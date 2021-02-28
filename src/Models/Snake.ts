import { Head } from './Head';
import { Position } from './Position';
import { Direction } from '../Enums/Direction';
import { Square } from './shapes/Square';

export class Snake {
    head: Head;
    size: number;

    constructor(position: Position, size: number) {
        this.size = size;
        const view = new Square(new Position(0, 0), size,'#ff0000');
        this.head = new Head(view, Direction.stop, 0,'#00ff00');
    }
}

