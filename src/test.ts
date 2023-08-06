import { earlThorvald } from "./leaders";
import { GameEffect, GameState, PlayerState, Resource } from "./types";
import _ from 'lodash';
import { arrakeen } from "./locations";
import { createInitialGameState, createInitialPlayerState } from "./util";

const boardLocation = arrakeen;

const player1: PlayerState = createInitialPlayerState(earlThorvald);
const initialState: GameState = createInitialGameState([player1]);

export function cloneAndModifyGameState(
  gameState: GameState,
  modifyFunction: GameEffect
): GameState {
  let clonedGameState: GameState = _.cloneDeep(gameState);
  clonedGameState = modifyFunction(clonedGameState)
  return clonedGameState;
}

function applyResourceChangesToCurrentPlayer(resourceMap: Map<Resource, number>) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    for (let [resource, amount] of resourceMap.entries()) {
      let currentAmount = currentPlayer.resources.get(resource) || 0;
      currentPlayer.resources.set(resource, currentAmount + amount);
    }
    return game;
  };
}

const nextState = cloneAndModifyGameState(initialState, applyResourceChangesToCurrentPlayer(
  new Map<Resource, number>([
    ["solari", 1]
  ])
));

console.log(initialState);
console.log(nextState);
