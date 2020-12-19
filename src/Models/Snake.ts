import { Head } from "./Head";
import { Position } from "./Position";

export class Snake {
    head: Head;
    size = 50;
    
    constructor(position: Position) {
        this.head = new Head(position, this.size);
    }
}

