import './index.scss';
import { Game } from './Views/Game/game';

const base = document.getElementById('base');
const game = new Game(base);
game.init();
