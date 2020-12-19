
import { View } from '../View';
import html from './game.html';

export class Game extends View {

    blockSize = 50;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    init() {
        this.render(html)
        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.Resize();
        this.Events();

    }
    Resize() {
        const gameContainer = document.querySelector('.game-container') as HTMLElement;
        const offsetHeight = gameContainer.offsetHeight
        const offsetWidth = gameContainer.offsetWidth
        this.canvas.height = offsetHeight - (offsetHeight % this.blockSize);
        this.canvas.width = offsetWidth - (offsetWidth % this.blockSize);
    }

    Events() {
        window.addEventListener('resize', (e) => { this.Resize(); });
    }
}