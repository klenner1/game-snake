import { Position } from './Position';
import { ObjectUtils } from '../Utils/ObjectUtils';

export class ElementView {
    position: Position;
    size: number;
    constructor(position: Position, size: number) {
        this.position = position;
        this.size = size;
    }
    moveTo(position: Position) {
        this.position = ObjectUtils.clone(position);
    }
    touch(position: Position): boolean {
        return this.position.equals(position);
    }
    protected toView(context: CanvasRenderingContext2D) {
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}
