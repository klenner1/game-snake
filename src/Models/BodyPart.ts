import { Position } from './Position';
import { ObjectUtils } from '../Utils/ObjectUtils';
import { ElementView } from './ElementView';
import { Direction } from '../Enums/Direction';

export class BodyPart extends ElementView {
    rear: BodyPart;
    direction: Direction;
    nextDirection: Direction;
    index: number;
    countChangeDirection: number;

    constructor(position: Position, size: number, direction: Direction, index: number) {
        super(position, size)
        this.direction = direction;
        this.index = index;
        this.countChangeDirection = this.size;
    }
    addRear() {
        if (this.rear) {
            this.rear.addRear();
        } else {
            this.rear = new BodyPart(ObjectUtils.clone(this.position), this.size, Direction.stop, this.index + 1);
        }
    }
    next(stepSize: number, rearNext: boolean): void {
        const diference = (this.size % stepSize)
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
            this.countChangeDirection = this.size;
        }
        if (rearNext) {
            this.rear?.next(stepSize, true)
        }
    }
    moveTo(direction: Direction, stepSize: number) {
        if (this.direction !== Direction.stop) {
            super.moveTo(direction, stepSize);
        }
    }
    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = '#0F0FFF';
        this.toView(context);
        this.rear?.draw(context);
    }
    touchHead(headPosition: Position): boolean {
        return this.touch(headPosition) || this.rear?.touchHead(headPosition);
    }

}
