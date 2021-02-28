import { Head } from './Head';
import { Position } from './Position';
import { Direction } from '../Enums/Direction';
import { Square } from './shapes/Square';
import { Theme } from './Theme';

export class Snake {
    head: Head;
    size: number;

    constructor(position:Position,size: number, theme:Theme) {
        this.size = size;
        const view = new Square(position, size, theme);
        this.head = new Head(view, Direction.stop, 0);
    }
}

