import './index.scss';
import './manifest.json'
import { Game } from './Views/Game/game';


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

const base = document.getElementById('base');
const game = new Game(base);
game.init();
