import './index.scss';
import './manifest.json'
import { Game } from './Views/Game/game';


function registerServiceWorker(): void {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(document.location.pathname + 'sw.js')
    }
}


const base = document.getElementById('base');
const game = new Game(base);
game.init();

registerServiceWorker();