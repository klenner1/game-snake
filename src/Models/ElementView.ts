import { Position } from './Position';
import { Direction } from '../Enums/Direction';
import { ObjectUtils } from '../Utils/ObjectUtils';

export abstract class ElementView {
    position: Position;
    movingTo: Direction;
    size: number;
    index: number;
    constructor(position: Position, size: number) {
        this.position = position;
        this.size = size;
    }
    moveTo(direction: Direction, stepSize: number) {
        this.movingTo = direction;
        switch (direction) {
            case Direction.Up:
                this.position.y -= stepSize
                break;
            case Direction.Down:
                this.position.y += stepSize
                break;
            case Direction.Left:
                this.position.x -= stepSize
                break;
            case Direction.Right:
                this.position.x += stepSize
                break;
        }
    }
    goTo(position: Position) {
        this.position = ObjectUtils.clone(position)
    }
    abstract touch(position: Position): boolean
    abstract ToView(context: CanvasRenderingContext2D): void
}
