import GameWorld from './GameWorld.js'; 
import NavigationBar from './navbar.js';

console.log("Script loaded");

const navbar = new NavigationBar();
navbar.CreateGenerationDiv();
navbar.UpdateGenerationNumber();


const gameWorld = new GameWorld();
gameWorld.GenerateWorldCells();

