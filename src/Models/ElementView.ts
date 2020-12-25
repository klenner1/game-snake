import { Position } from './Position';
import { Direction } from '../Enums/Direction';
import { ObjectUtils } from '../Utils/ObjectUtils';

export class ElementView {
    position: Position;
    movingTo: Direction;
    size: number;
    constructor(position: Position, size: number) {
        this.position = position;
        this.size = size;
    }
    moveTo(direction: Direction) {
        this.movingTo = direction;
        switch (direction) {
            case Direction.Up:
                this.position.y--
                break;
            case Direction.Down:
                this.position.y++
                break;
            case Direction.Left:
                this.position.x--
                break;
            case Direction.Right:
                this.position.x++
                break;
        }
    }
    goTo(position: Position) {
        this.position = ObjectUtils.clone(position)
    }
    touch(position: Position): boolean {
        return this.position.equals(position);
    }
    protected toView(context: CanvasRenderingContext2D) {
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}
