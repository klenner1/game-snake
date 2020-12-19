"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Game = void 0;
var View_1 = require("../View");
var Snake_1 = require("../../Models/Snake");
var Fruit_1 = require("../../Models/Fruit");
var Position_1 = require("../../Models/Position");
var Direction_1 = require("../../Enums/Direction");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchstart = new Position_1.Position(0, 0);
        _this.blockSize = 50;
        _this.canDrawInLoop = false;
        _this.step = 50;
        _this.ArrowLeft = function () { return _this.ChangeDirection(Direction_1.Direction.Left, Direction_1.Direction.Right); };
        _this.ArrowRight = function () { return _this.ChangeDirection(Direction_1.Direction.Right, Direction_1.Direction.Left); };
        _this.ArrowUp = function () { return _this.ChangeDirection(Direction_1.Direction.Up, Direction_1.Direction.Down); };
        _this.ArrowDown = function () { return _this.ChangeDirection(Direction_1.Direction.Down, Direction_1.Direction.Up); };
        _this.GameOver = function () {
            _this.canDrawInLoop = false;
            _this.initSnake();
            _this.Draw();
        };
        return _this;
    }
    Game.prototype.init = function () {
        var html = require('./game.html');
        this.render(html);
        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');
        this.Resize();
        this.initSnake();
        this.fruit = new Fruit_1.Fruit(new Position_1.Position(200, 200), 50);
        this.DrawInLoop();
        this.Draw();
        this.Events();
    };
    Game.prototype.initSnake = function () {
        this.snake = new Snake_1.Snake(new Position_1.Position(0, 0));
        this.snake.head.OnTouchMargin = this.GameOver;
    };
    Game.prototype.Draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.touch();
        if (this.snake.head.next(this.canvas)) {
            this.snake.head.drawHead(this.canvas, this.context);
        }
        else {
            this.GameOver();
        }
        this.fruit.draw(this.context);
    };
    Game.prototype.DrawInLoop = function () {
        var _this = this;
        if (this.canDrawInLoop) {
            this.Draw();
        }
        setTimeout(function () { _this.DrawInLoop(); }, 100);
    };
    Game.prototype.Resize = function () {
        var gameContainer = document.querySelector('.game-container');
        var offsetHeight = gameContainer.offsetHeight;
        var offsetWidth = gameContainer.offsetWidth;
        this.canvas.height = offsetHeight - (offsetHeight % this.blockSize);
        this.canvas.width = offsetWidth - (offsetWidth % this.blockSize);
    };
    Game.prototype.Events = function () {
        var _this = this;
        window.addEventListener('resize', function (e) { _this.Resize(); });
        window.addEventListener('keydown', function (e) { _this.keydown(e); });
        window.addEventListener('touchstart', function (e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            _this.touchstart = new Position_1.Position(x, y);
        });
        window.addEventListener('touchend', function (e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            var touchstart = _this.touchstart;
            var touchend = new Position_1.Position(x, y);
            var xMovement = touchstart.x - touchend.x;
            var yMovement = touchstart.y - touchend.y;
            var moveInX = Math.abs(xMovement) > Math.abs(yMovement);
            if (moveInX) {
                if (xMovement > 0) {
                    _this.ArrowRight();
                }
                else if (xMovement < 0) {
                    _this.ArrowLeft();
                }
            }
            else {
                if (yMovement > 0) {
                    _this.ArrowUp();
                }
                else if (yMovement < 0) {
                    _this.ArrowDown();
                }
            }
        });
    };
    Game.prototype.keydown = function (e) {
        var func = this[e.key];
        if (func) {
            func();
            this.canDrawInLoop = true;
        }
    };
    Game.prototype.ChangeDirection = function (directionTo, ifNot) {
        var direction = this.snake.head.direcao;
        if (direction !== ifNot)
            this.snake.head.nextDirecao = directionTo;
    };
    Game.prototype.touch = function () {
        if (this.snake.head.position.equals(this.fruit.position)) {
            this.fruit.move(this.canvas.width, this.canvas.height);
            this.snake.head.addRear();
        }
    };
    return Game;
}(View_1.View));
exports.Game = Game;
