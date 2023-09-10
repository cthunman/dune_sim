import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from "./leaders";
import { GameEffect, GameState, PlayerAgentTurn, PlayerState, Resource } from "./types";
import _ from 'lodash';
import { haggaBasin } from "./locations";
import {
  cloneAndModifyGameState,
  createInitialGameState,
  createInitialPlayerState,
} from "./util";
import { signetRingCard } from "./cards";
import { gainThreeSolari, gainTwoWater } from "./intrigueCards";

const p1: PlayerState = createInitialPlayerState(earlThorvald);
const p2: PlayerState = createInitialPlayerState(paulAtreides);
const p3: PlayerState = createInitialPlayerState(glossuRabban);
const p4: PlayerState = createInitialPlayerState(ilbanRichese);

const initialState: GameState = createInitialGameState([p1, p2, p3, p4]);

const firstTurn: PlayerAgentTurn = {
  cardPlayed: signetRingCard,
  agentLocation: haggaBasin,
  intrigueCardsPlayed: [gainThreeSolari, gainTwoWater]
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

export function isGameStateLegal(game: GameState): boolean {
  for (const [, player] of game.playerMap) {
    // Check agent locations
    if (player.agentLocations.length > player.numAgents + player.swordmasterInPlay + player.mentatInPlay) {
      return false;
    }
    // Check all entries in influenceMap
    for (const [, value] of player.influenceMap) {
      if (value < 0) {
        return false;
      }
    }
    // Check all entries in allianceMap
    for (const [, value] of player.allianceMap) {
      if (value < 0) {
        return false;
      }
    }
    // Check all entries in resources
    for (const [, value] of player.resources) {
      if (value < 0) {
        return false;
      }
    }
    // Check soldiers in garrison and battlefield
    if (player.soldiersInGarrison < 0 || player.soldiersInBattlefield < 0) {
      return false;
    }
    // Check victory points
    if (player.victoryPointCount < 0) {
      return false;
    }
  }
  return true;
}

// const nextState = cloneAndModifyGameState(initialState, applyResourceChangesToCurrentPlayer(
//   new Map<Resource, number>([
//     ["solari", 1]
//   ])
// ));

console.log(initialState);
const nextState = applyPlayerTurn(initialState, firstTurn)
// console.log(getCurrentPlayer(initialState));
console.log(nextState);
console.log(isGameStateLegal(nextState));
