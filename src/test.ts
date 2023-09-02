import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from "./leaders";
import { GameEffect, GameState, PlayerAgentTurn, PlayerState, Resource } from "./types";
import _ from 'lodash';
import { arrakeen, haggaBasin } from "./locations";
import {
  applyResourceChangesToCurrentPlayer,
  cloneAndModifyGameState,
  createInitialGameState,
  createInitialPlayerState,
  getCurrentPlayer
} from "./util";
import { signetRingCard } from "./cards";

const boardLocation = arrakeen;
const p1: PlayerState = createInitialPlayerState(earlThorvald);
const p2: PlayerState = createInitialPlayerState(paulAtreides);
const p3: PlayerState = createInitialPlayerState(glossuRabban);
const p4: PlayerState = createInitialPlayerState(ilbanRichese);

const initialState: GameState = createInitialGameState([p1, p2, p3, p4]);

const firstTurn: PlayerAgentTurn = {
  cardPlayed: signetRingCard,
  agentLocation: haggaBasin,
  intrigueCardsPlayed: []
}

function getGameEffectsFromPlayerTurn(playerTurn: PlayerAgentTurn): GameEffect[] {
  const gameEffectList: GameEffect[] = [];
  gameEffectList.push(playerTurn.cardPlayed.agentEffect);
  gameEffectList.push(playerTurn.agentLocation.effect);
  for (const intrigueCard of playerTurn.intrigueCardsPlayed) {
    gameEffectList.push(intrigueCard.effect);
  }
  return gameEffectList;
}

function applyPlayerTurn(game: GameState, playerTurn: PlayerAgentTurn): GameState {
  const gameEffectList: GameEffect[] = getGameEffectsFromPlayerTurn(playerTurn);
  
  return gameEffectList.reduce((currentGameState, gameEffect) => {
    return cloneAndModifyGameState(currentGameState, gameEffect);
  }, game);
}

function isGameStateLegal(game: GameState): boolean {
  return true;
}


// const nextState = cloneAndModifyGameState(initialState, applyResourceChangesToCurrentPlayer(
//   new Map<Resource, number>([
//     ["solari", 1]
//   ])
// ));

// console.log(initialState);
console.log(getCurrentPlayer(initialState));
// console.log(nextState);
