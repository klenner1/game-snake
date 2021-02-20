import { Position } from './Position';
import { ObjectUtils } from '../Utils/ObjectUtils';
import { ElementView } from './ElementView';
import { Direction } from '../Enums/Direction';
import { Square } from './shapes/Square';

export class BodyPart {
    rear: BodyPart;
    direction: Direction;
    nextDirection: Direction;
    index: number;
    countChangeDirection: number;
    view: ElementView;
    constructor(position: Position, size: number, direction: Direction, index: number) {
        this.view = new Square(position, size, '#0F0FFF');
        this.direction = direction;
        this.index = index;
        this.countChangeDirection = size;
    }
    addRear() {
        if (this.rear) {
            this.rear.addRear();
        } else {
            this.rear = new BodyPart(ObjectUtils.clone(this.view.position), this.view.size, Direction.stop, this.index + 1);
        }
    }
    next(stepSize: number, rearNext: boolean): void {
        const diference = (this.view.size % stepSize)
        if (diference >= this.countChangeDirection) {
            stepSize = diference
        }
        this.moveTo(this.direction, stepSize)
        if (!(this.constructor.name === 'Head' && this.direction === Direction.stop)) {
            this.countChangeDirection -= stepSize;
        }
        if (this.countChangeDirection === 0) {
            if (this.rear) {
                this.rear.nextDirection = this.direction;
            }
            this.direction = this.nextDirection;
            this.countChangeDirection = this.view.size;
        }
        if (rearNext) {
            this.rear?.next(stepSize, true)
        }
    }
    moveTo(direction: Direction, stepSize: number) {
        if (this.direction !== Direction.stop) {
            this.view.moveTo(direction, stepSize);
        }
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = '#0F0FFF';
        this.view.ToView(context);
        this.rear?.draw(context);
    }
    touchHead(headPosition: Position): boolean {
        return this.index > 4 && this.view.touch(headPosition) || this.rear?.touchHead(headPosition);
    }

}
