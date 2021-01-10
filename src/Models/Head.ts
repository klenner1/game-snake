import { BodyPart } from './BodyPart';
import { Direction } from '../Enums/Direction';

export class Head extends BodyPart {

    OnTouchMargin: () => void;
    OnTouchBody: () => void;
    isInCanvas(canvas: HTMLCanvasElement) {
        const x = this.position.x
        const y = this.position.y
        const maxX = canvas.width - this.size;
        const maxY = canvas.height - this.size;
        if (x < 0 || x > maxX || y < 0 || y > maxY) {
            this.OnTouchMargin();
        }
    }

    nextMovement(canvas: HTMLCanvasElement, stepSize: number): boolean {
        this.isInCanvas(canvas)
        if (this.position.x % this.size === 0 && this.position.y % this.size === 0 && this.nextDirection) {
            if (this.rear) {
                this.rear.nextDirection = this.direction;
            }
            this.direction = this.nextDirection;
        }
        this.next(stepSize, false)
        this.rear?.next(stepSize, true)
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
