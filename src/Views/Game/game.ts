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
    moving = false;
    snake: Snake;
    fruit: Fruit;

    StepSize = 2;
    Score = 0;
    Delay = 10;
    scoreElement: HTMLParagraphElement;

    init() {
        const html = require('./game.html');
        this.render(html);
        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreElement = document.getElementById('score') as HTMLParagraphElement;
        this.Resize();
        this.initSnake()
        this.fruit = new Fruit(new Position(200, 200), this.blockSize)
        this.DrawInLoop();
        this.MovimentLoop()
        this.Draw();
        this.Events();

    }
    initSnake() {
        this.snake = new Snake(new Position(0, 0), this.blockSize);
        this.snake.head.OnTouchMargin = this.GameOver;
    }
    Moviment() {
        this.touch();
        if (this.snake.head.nextMovement(this.canvas, this.StepSize)) {
            this.snake.head.drawHead(this.canvas, this.context);
        } else {
            this.GameOver()
        }
    }
    MovimentLoop() {
        if (this.moving) { this.Moviment(); }
        setTimeout(() => { this.MovimentLoop() }, this.Delay);
    }
    Draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.head.drawHead(this.canvas, this.context);
        this.fruit.draw(this.context);
    }

    DrawInLoop() {
        if (this.canDrawInLoop) { this.Draw(); }
        setTimeout(() => { this.DrawInLoop() }, 1);
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
        const direction = this.snake.head.direction;
        this.canDrawInLoop = true;
        this.moving = true;
        if (direction !== ifNot)
            this.snake.head.nextDirection = directionTo;
    }
    ArrowLeft = () => this.ChangeDirection(Direction.Left, Direction.Right)
    ArrowRight = () => this.ChangeDirection(Direction.Right, Direction.Left)
    ArrowUp = () => this.ChangeDirection(Direction.Up, Direction.Down)
    ArrowDown = () => this.ChangeDirection(Direction.Down, Direction.Up)

    touch() {
        if (this.fruit.view.touch(this.snake.head.view.position)) {
            this.fruit.move(this.canvas.width, this.canvas.height);
            this.snake.head.addRear();
            this.Score++;
            this.updateScore()
        }
    }

    updateScore() {
        const score = this.Score / 4;
        this.Delay = Math.ceil(score - (Math.ceil((score + 1) / 10) * 10)) * -1;
        this.StepSize = this.Delay <= 5 ? 1 : 2;
        this.scoreElement.textContent = `${this.Score}XP`;
    }

    GameOver = () => {
        this.canDrawInLoop = false;
        this.moving = false;
        this.initSnake()
        this.Draw();
        this.Score = 0;
        this.updateScore()
    }
}