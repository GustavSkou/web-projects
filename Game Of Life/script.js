import GameWorld from './GameWorld.js'; 
import NavigationBar from './navbar.js';
import GameTick from './GameTick.js';

console.log("Script loaded");

const navbar = new NavigationBar();
navbar.CreateGenerationDiv();

const gameWorld = new GameWorld();
gameWorld.GenerateWorldCells();

const tick = new GameTick(gameWorld, navbar);


