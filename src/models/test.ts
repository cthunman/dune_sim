import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from "./leaders";
import { GameEffect, GameState, PlayerAgentTurn } from "./types";
import { haggaBasin } from "./locations";
import {
  advanceGameToNextPlayer,
  cloneAndModifyGameState,
  createInitialGameState,
  createInitialPlayerState,
} from "./util";
import { diplomacyCard } from "./cards";

const p1 = createInitialPlayerState(earlThorvald, "red");
const p2 = createInitialPlayerState(glossuRabban, "blue");
const p3 = createInitialPlayerState(paulAtreides, "green");
const p4 = createInitialPlayerState(ilbanRichese, "tan");

const initialState: GameState = createInitialGameState([p1, p2, p3, p4]);

function getGameEffectsFromPlayerTurn(playerTurn: PlayerAgentTurn): GameEffect[] {
  const gameEffectList: GameEffect[] = [];
  const cardPlayed = playerTurn.cardPlayed;
  const imperiumCardChoice = cardPlayed.effectChoice;
  const cardChoices = cardPlayed.cardPlayed.agentEffect(playerTurn.gameState)
  const imperiumCardEffect = cardChoices.choices.get(imperiumCardChoice);
  if (imperiumCardEffect) {
    gameEffectList.push(imperiumCardEffect);
  }
  const locationEffectChoice = playerTurn.agentLocation.effectChoice;
  const boardLocationEffect = playerTurn.agentLocation.boardLocation.effect.choices.get(locationEffectChoice);
  if (boardLocationEffect) {
    gameEffectList.push(boardLocationEffect);
  }
  for (const intrigueCard of playerTurn.intrigueCardsPlayed) {
    const intrigueCardChoice = intrigueCard.effectChoice;
    const intrigueCardEffect = intrigueCard.cardPlayed.effect.choices.get(intrigueCardChoice);
    if (intrigueCardEffect) {
      gameEffectList.push(intrigueCardEffect);
    }
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
  gameState: initialState,
  cardPlayed: {
    cardPlayed: diplomacyCard,
    effectChoice: ""
  },
  agentLocation: {
    boardLocation: haggaBasin,
    effectChoice: "Pay 1 Water Gain 2 Spice"
  },
  intrigueCardsPlayed: []
}

console.log(initialState);
const nextState = applyPlayerTurn(initialState, firstTurn);
console.log(nextState);
console.log(isGameStateLegal(nextState));

const secondTurn: PlayerAgentTurn = {
  gameState: nextState,
  cardPlayed: {
    cardPlayed: diplomacyCard,
    effectChoice: ""
  },
  agentLocation: {
    boardLocation: haggaBasin,
    effectChoice: "Pay 1 Water Gain 2 Spice"
  },
  intrigueCardsPlayed: []
}

const thirdState = applyPlayerTurn(nextState, secondTurn);
console.log(thirdState);
console.log(isGameStateLegal(thirdState));
