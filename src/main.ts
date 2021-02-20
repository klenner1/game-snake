import './index.scss';
import './manifest.json'
import { Game } from './Views/Game/game';


function registerServiceWorker(): void {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(document.location.pathname + 'sw.js')
            .then((registration) =>
                console.log(`Service Worker registration complete, scope: '${registration.scope}'`, registration))
            .catch((error) =>
                console.log(`Service Worker registration failed with error: '${error}'`, error));
    }
}


const base = document.getElementById('base');
const game = new Game(base);
game.init();

//registerServiceWorker();