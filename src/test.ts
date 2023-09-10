import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from "./leaders";
import { GameEffect, GameState, PlayerAgentTurn, PlayerState } from "./types";
import _ from 'lodash';
import { haggaBasin } from "./locations";
import {
  advanceGameToNextPlayer,
  cloneAndModifyGameState,
  createInitialGameState,
  createInitialPlayerState,
  getNextPlayer,
} from "./util";
import { signetRingCard } from "./cards";
import { gainThreeSolariIntrigueCard } from "./intrigueCards";

const p1: PlayerState = createInitialPlayerState(earlThorvald);
const p2: PlayerState = createInitialPlayerState(glossuRabban);
const p3: PlayerState = createInitialPlayerState(paulAtreides);
const p4: PlayerState = createInitialPlayerState(ilbanRichese);

const initialState: GameState = createInitialGameState([p1, p2, p3, p4]);

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
  gameEffectList.push(advanceGameToNextPlayer);
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

const firstTurn: PlayerAgentTurn = {
  cardPlayed: signetRingCard,
  agentLocation: haggaBasin,
  intrigueCardsPlayed: [gainThreeSolariIntrigueCard]
}

const secondTurn: PlayerAgentTurn = {
  cardPlayed: signetRingCard,
  agentLocation: haggaBasin,
  intrigueCardsPlayed: [gainThreeSolariIntrigueCard]
}

console.log(initialState);
const nextState = applyPlayerTurn(initialState, firstTurn);
console.log(nextState);
console.log(isGameStateLegal(nextState));
const thirdState = applyPlayerTurn(nextState, secondTurn);
console.log(thirdState);
console.log(isGameStateLegal(thirdState));
