import GameWorld from './GameWorld.js'; 

console.log("Script loaded");

const gameWorld = new GameWorld();
gameWorld.GenerateWorldCells();

gameWorld.PlaceCell(10,10);
gameWorld.PlaceCell(10,11);
gameWorld.PlaceCell(10,12);

gameWorld.UpdateWorldCells();