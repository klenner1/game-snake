export abstract class Fill {
    fill(context: CanvasRenderingContext2D, name: string): void {
        (this as any)['fill' + name]?.()
    }
    abstract fillHead(context: CanvasRenderingContext2D): void;
    abstract fillBody(context: CanvasRenderingContext2D): void;
    abstract fillFuit(context: CanvasRenderingContext2D): void;

}