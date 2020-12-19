import { ElementView } from './ElementView';
import { Position } from './Position';

export class Fruit extends ElementView {

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = '#FFF000';
        super.toView(context);
    }
    move(maxX: number, maxY: number) {
        let x = Math.random() * maxX;
        x = x - (x % this.size);
        let y = Math.random() * maxY;
        y = y - (y % this.size);
        this.moveTo(new Position(x, y));
    }

}