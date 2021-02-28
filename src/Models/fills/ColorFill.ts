import { Fill } from "./fill";

export class ColorFill extends Fill {
    bodyColor: string
    colorHead: string
    fruitColor: string
    constructor(colorHead: string, bodyColor: string, fruitColor: string) {
        super()
        this.colorHead = colorHead;
        this.bodyColor = bodyColor;
        this.fruitColor = fruitColor;
    }
    fillHead(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.colorHead;
    }
    fillBody(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.bodyColor;
    }
    fillFuit(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.fruitColor;
    }
}