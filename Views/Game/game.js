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
var Direcao_1 = require("../../Enums/Direcao");
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.blockSize = 50;
        _this.canDrawInLoop = false;
        _this.step = 50;
        _this.GameOver = function () {
            _this.canDrawInLoop = false;
            _this.snake = new Snake_1.Snake(new Position_1.Position(0, 0));
            _this.snake.head.OnTouchMargin = _this.GameOver;
            _this.Draw();
        };
        return _this;
    }
    Game.prototype.init = function () {
        this.render(require('game.html')["default"]);
        this.canvas = document.getElementById('game');
        this.context = this.canvas.getContext('2d');
        this.Resize();
        this.snake = new Snake_1.Snake(new Position_1.Position(0, 0));
        this.snake.head.OnTouchMargin = this.GameOver;
        this.fruit = new Fruit_1.Fruit(new Position_1.Position(200, 200), 50);
        this.canvas.width = window.innerWidth - (window.innerWidth % this.snake.size);
        this.canvas.height = window.innerHeight - (window.innerHeight % this.snake.size);
        this.DrawInLoop();
        this.Draw();
        this.Events();
    };
    Game.prototype.Draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.touch();
        if (this.snake.head.next(this.canvas)) {
            this.snake.head.drawHead(this.canvas, this.context);
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
    };
    Game.prototype.keydown = function (e) {
        if (this[e.key]) {
            this[e.key]();
            if (!this.canDrawInLoop) {
                this.canDrawInLoop = true;
            }
        }
    };
    Game.prototype.ArrowLeft = function () {
        if (this.snake.head.direcao !== Direcao_1.Direcao.Right)
            this.snake.head.direcao = Direcao_1.Direcao.Left;
    };
    Game.prototype.ArrowRight = function () {
        if (this.snake.head.direcao !== Direcao_1.Direcao.Left)
            this.snake.head.direcao = Direcao_1.Direcao.Right;
    };
    Game.prototype.ArrowUp = function () {
        if (this.snake.head.direcao !== Direcao_1.Direcao.Down)
            this.snake.head.direcao = Direcao_1.Direcao.Up;
    };
    Game.prototype.ArrowDown = function () {
        if (this.snake.head.direcao !== Direcao_1.Direcao.Up)
            this.snake.head.direcao = Direcao_1.Direcao.Down;
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
