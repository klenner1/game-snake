import { BodyPart } from './BodyPart';
import { Direction } from '../Enums/Direction';
import { Position } from './Position';

export class Head extends BodyPart {

    OnTouchMargin: () => void;
    OnTouchBody: () => void;
    isInCanvas(canvas: HTMLCanvasElement) {
        const x = this.view.position.x
        const y = this.view.position.y
        const maxX = canvas.width - this.view.size;
        const maxY = canvas.height - this.view.size;
        if (x < 0 || x > maxX || y < 0 || y > maxY) {
            this.OnTouchMargin();
        }
    }

    nextMovement(canvas: HTMLCanvasElement, stepSize: number): boolean {
        this.isInCanvas(canvas)
        if (this.view.position.x % this.view.size === 0 && this.view.position.y % this.view.size === 0 && this.nextDirection) {
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
        this.view.ToView(context);
    }
    touchBody(): boolean {
        return this.rear?.touchHead(this.view.position);
    }
}
