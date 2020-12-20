import { View } from '../View';
import { Snake } from '../../Models/Snake';
import { Fruit } from '../../Models/Fruit';
import { Position } from '../../Models/Position';
import { Direction } from '../../Enums/Direction';
export class Game extends View {

    touchstartPosition = new Position(0, 0)
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
        } else {
            this.GameOver()
        }
        this.fruit.draw(this.context);
    }

    DrawInLoop() {
        if (this.canDrawInLoop) { this.Draw(); }
        setTimeout(() => { this.DrawInLoop() }, 100);
    }
    Resize() {
        document.getElementsByTagName('body')[0].setAttribute('style', `max-height: ${window.innerHeight}px`);
        const gameContainer = document.querySelector('.game-container') as HTMLElement;
        const offsetHeight = gameContainer.offsetHeight
        const offsetWidth = gameContainer.offsetWidth
        this.canvas.height = offsetHeight - (offsetHeight % this.blockSize);
        this.canvas.width = offsetWidth - (offsetWidth % this.blockSize);
    }

    Events() {
        window.addEventListener('resize', (e) => { this.Resize(); });
        window.addEventListener('keydown', (e) => { this.keydown(e) });
        window.addEventListener('touchstart', (e) => { this.touchstart(e) });
        window.addEventListener('touchend', (e) => { this.touchend(e) });
    }
    touchstart(e: TouchEvent) {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        this.touchstartPosition = new Position(x, y);
    }
    touchend(e: TouchEvent) {
        const x = e.changedTouches[0].clientX;
        const y = e.changedTouches[0].clientY;
        const touchstart = this.touchstartPosition;
        const touchend = new Position(x, y);
        const xMovement = touchstart.x - touchend.x;
        const yMovement = touchstart.y - touchend.y;
        const moveInX = Math.abs(xMovement) > Math.abs(yMovement)
        if (moveInX) {
            if (xMovement < -1) {
                this.ArrowRight()
            } else if (xMovement > 1) {
                this.ArrowLeft()
            }
        } else {
            if (yMovement > 1) {
                this.ArrowUp()
            } else if (yMovement < -1) {
                this.ArrowDown()
            }
        }
    }
    keydown(e: KeyboardEvent) {
        const func = (this as any)[e.key]
        if (func) {
            func();
        }
    }

    ChangeDirection(directionTo: Direction, ifNot: Direction): void {
        const direction = this.snake.head.direcao;
        this.canDrawInLoop = true;
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