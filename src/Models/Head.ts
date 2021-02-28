import { BodyPart } from './BodyPart';
import { Direction } from '../Enums/Direction';
import { ElementView } from './ElementView';
import { ObjectUtils } from '../Utils/ObjectUtils';

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

    getnextPosition(stepSize: number) {
        const position = ObjectUtils.clone(this.view.position);
        position.move(this.direction, stepSize)
        return position;
    }
    touchBody(): boolean {
        return this.rear?.touchHead(this.view.position);
    }
}
