import { Position } from './Position';
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
    constructor(view: ElementView, direction: Direction, index: number) {
        this.view = view;
        this.direction = direction;
        this.index = index;
        this.countChangeDirection = view.size;
    }
    addRear() {
        if (this.rear) {
            this.rear.addRear();
        } else {
            const x = this.view.position.x - (this.view.position.x % this.view.size);
            const y = this.view.position.y - (this.view.position.y % this.view.size);
            const position = new Position(x, y);
            const view = new Square(position, this.view.size, (this.view as Square).color);
            this.rear = new BodyPart(view, Direction.stop, this.index + 1);
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
        this.view.ToView(context);
        this.rear?.draw(context);
    }
    touchHead(headPosition: Position): boolean {
        return this.index > 4 && this.view.touch(headPosition) || this.rear?.touchHead(headPosition);
    }

}
