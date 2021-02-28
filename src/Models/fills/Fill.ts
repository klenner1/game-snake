import { Head } from '../Head';
import { BodyPart } from '../BodyPart';
import { Fruit } from '../Fruit';

export abstract class Fill {
    fill(context: CanvasRenderingContext2D, name: string): void {
        switch (name) {
            case Head.name:
                this.fillHead(context)
                break;
            case BodyPart.name:
                this.fillBody(context)
                break;
            case Fruit.name:
                this.fillFuit(context)
                break;
        }
    }
    abstract fillHead(context: CanvasRenderingContext2D): void;
    abstract fillBody(context: CanvasRenderingContext2D): void;
    abstract fillFuit(context: CanvasRenderingContext2D): void;

}