import GameWorld from './GameWorld.js'; 

console.log("Script loaded");

const gameWorld = new GameWorld();
gameWorld.GenerateWorldCells();

gameWorld.PlaceCell(10,10);
gameWorld.PlaceCell(10,11);
gameWorld.PlaceCell(10,12);
gameWorld.PlaceCell(10,13);
gameWorld.PlaceCell(10,14);
gameWorld.PlaceCell(10,15);
gameWorld.PlaceCell(11,15);
gameWorld.PlaceCell(12,15);