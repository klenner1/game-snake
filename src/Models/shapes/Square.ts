import { Position } from '../Position';
import { ElementView } from '../ElementView';

export class Square extends ElementView {
    color: string
    constructor(position: Position, size: number, color: string) {
        super(position, size);
        this.color = color;
    }
    inside(p1: Position, p2: Position): boolean {
        return p1.x <= p2.x && p1.x + this.size > p2.x
            && p1.y <= p2.y && p1.y + this.size > p2.y;
    }
    touch(position: Position): boolean {
        return this.inside(this.position, position) || this.inside(position, this.position)
    }
    ToView(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

}
