import { Head } from './Head';
import { Position } from './Position';
import { Direction } from '../Enums/Direction';

export class Snake {
    head: Head;
    size: number;

    constructor(position: Position, size: number) {
        this.size = size;
        this.head = new Head(position, this.size, Direction.stop, 0);
    }
}

