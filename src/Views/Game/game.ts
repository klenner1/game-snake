import { View } from '../View';
import { Snake } from '../../Models/Snake';
import { Fruit } from '../../Models/Fruit';
import { Position } from '../../Models/Position';
import { Direction } from '../../Enums/Direction';
export class Game extends View {

    blockSize = 50;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    canDrawInLoop = false;
    snake: Snake;
    fruit: Fruit;
    step = 50;

    init() {
        const html = require('./game.html');
        this.render(html);
        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.Resize();
        this.initSnake()
        this.fruit = new Fruit(new Position(200, 200), 50)
        this.DrawInLoop();
        this.Draw();
        this.Events();

    }
    initSnake() {
        this.snake = new Snake(new Position(0, 0));
        this.snake.head.OnTouchMargin = this.GameOver;
    }
    Draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.touch();
        if (this.snake.head.next(this.canvas)) {
            this.snake.head.drawHead(this.canvas, this.context);
        }else{
            this.GameOver()
        }
        this.fruit.draw(this.context);
    }
    DrawInLoop() {
        if (this.canDrawInLoop) { this.Draw(); }
        setTimeout(() => { this.DrawInLoop() }, 100);
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
        window.addEventListener('keydown', (e) => { this.keydown(e) });
    }
    keydown(e: KeyboardEvent) {
        const func = (this as any)[e.key]
        if (func) {
            func();
            this.canDrawInLoop = true;
        }
    }

    ChangeDirection(directionTo: Direction, ifNot: Direction): void {
        const direction = this.snake.head.direcao;
        if (direction !== ifNot)
            this.snake.head.nextDirecao = directionTo;
    }
    ArrowLeft = () => this.ChangeDirection(Direction.Left, Direction.Right)
    ArrowRight = () => this.ChangeDirection(Direction.Right, Direction.Left)
    ArrowUp = () => this.ChangeDirection(Direction.Up, Direction.Down)
    ArrowDown = () => this.ChangeDirection(Direction.Down, Direction.Up)

    touch() {
        if (this.snake.head.position.equals(this.fruit.position)) {
            this.fruit.move(this.canvas.width, this.canvas.height);
            this.snake.head.addRear();
        }
    }

    GameOver = () => {
        this.canDrawInLoop = false;
        this.initSnake()
        this.Draw();
    }
}