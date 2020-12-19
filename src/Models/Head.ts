import { BodyPart } from './BodyPart';
import { Direction } from '../Enums/Direction';

export class Head extends BodyPart {
    direcao: Direction;
    nextDirecao: Direction;
    OnTouchMargin: () => void;
    OnTouchBody: () => void;
    Left() {
        if (this.position.x > 0) {
            this.position.x = this.position.x - this.size
        }
        else {
            this.OnTouchMargin();
        };
        this.direcao = Direction.Left;
    }
    Right(maxX: number) {
        if (this.position.x < maxX - this.size) {
            this.position.x = this.position.x + this.size;
        } else {
            this.OnTouchMargin();
        }
        this.direcao = Direction.Right;
    }
    Up() {
        if (this.position.y > 0) {
            this.position.y = this.position.y - this.size;
        } else {
            this.OnTouchMargin();
        }
        this.direcao = Direction.Up;
    }
    Down(maxY: number) {
        if (this.position.y < maxY - this.size) {
            this.position.y = this.position.y + this.size;
        } else {
            this.OnTouchMargin();
        }
        this.direcao = Direction.Down;
    }

    next(canvas: HTMLCanvasElement): boolean {
        this.rear?.moveTo(Object.assign(this.position));
        const direcion = this.nextDirecao != null ? this.nextDirecao : this.direcao;
        switch (direcion) {
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
        this.nextDirecao = null;
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
        return this.touch(this.rear?.position) || this.rear?.touchHead(this.position);
    }
}
