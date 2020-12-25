import { BodyPart } from './BodyPart';
import { Direction } from '../Enums/Direction';

export class Head extends BodyPart {

    OnTouchMargin: () => void;
    OnTouchBody: () => void;
    Left() {
        if (this.position.x > 0) {
            this.position.x--
        }
        else {
            this.OnTouchMargin();
        };
    }
    Right(maxX: number) {
        if (this.position.x < maxX - this.size) {
            this.position.x++;
        } else {
            this.OnTouchMargin();
        }
    }
    Up() {
        if (this.position.y > 0) {
            this.position.y--;
        } else {
            this.OnTouchMargin();
        }
    }
    Down(maxY: number) {
        if (this.position.y < maxY - this.size) {
            this.position.y++;
        } else {
            this.OnTouchMargin();
        }
    }

    nextMovement(canvas: HTMLCanvasElement): boolean {
        switch (this.direction) {
            case Direction.Left:
                this.Left();
                break;
            case Direction.Right:
                this.Right(canvas.width);
                break;
            case Direction.Up:
                this.Up();
                break;
            case Direction.Down:
                this.Down(canvas.height);
                break;
        }
        if (this.position.x % this.size === 0 && this.position.y % this.size === 0 && this.nextDirection) {
            if (this.rear) {
                this.rear.nextDirection = this.direction;
            }
            this.direction = this.nextDirection;
        }
        this.rear?.next()
        if (this.touchBody()) {
            this.OnTouchBody?.();
            return false;
        }
        return true;
    }
    drawHead(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, move = true) {
        this.rear?.draw(context);
        context.fillStyle = '#FF0000';
        this.toView(context);
    }
    touchBody(): boolean {
        return (this.touch(this.rear?.position) && this.direction !== Direction.stop) || this.rear?.touchHead(this.position);
    }
}
