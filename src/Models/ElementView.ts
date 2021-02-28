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
        this.position.move(direction, stepSize);
    }
    goTo(position: Position) {
        this.position = ObjectUtils.clone(position)
    }
    abstract touch(position: Position): boolean
    abstract ToView(context: CanvasRenderingContext2D): void
}
