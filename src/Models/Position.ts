import { Direction } from '../Enums/Direction';

export class Position {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    equals(position: Position) {
        return this.x === position?.x && this.y === position?.y
    }
    toString = () => this.x + ' : ' + this.y

    move(direction: Direction, stepSize: number) {
        switch (direction) {
            case Direction.Up:
                this.y -= stepSize
                break;
            case Direction.Down:
                this.y += stepSize
                break;
            case Direction.Left:
                this.x -= stepSize
                break;
            case Direction.Right:
                this.x += stepSize
                break;
        }
    }

}
