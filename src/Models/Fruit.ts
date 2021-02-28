import { ElementView } from './ElementView';
import { Position } from './Position';
import { Square } from './shapes/Square';
import { Theme } from './Theme';

export class Fruit {
    view: ElementView
    constructor(position: Position, size: number, theme: Theme) {
        this.view = new Square(position, size, theme)
    }
    draw(context: CanvasRenderingContext2D) {
        this.view.ToView(context, this.constructor.name);
    }
    move(maxX: number, maxY: number) {
        let x = Math.random() * maxX;
        x = x - (x % this.view.size);
        let y = Math.random() * maxY;
        y = y - (y % this.view.size);
        this.view.goTo(new Position(x, y));
    }

}