import _ from "lodash";
import { GameEffect, GameEffectChoice, GameState, Leader, PlayerState, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer, applySoldiersToBattlefieldAndGarrison } from "./util";

export const arianaThorvald: Leader = {
  name: "Countess Ariana Thorvald",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: (_state: GameState) => ({ choices: new Map<string, GameEffect>([]) }),
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const glossuRabban: Leader = {
  name: "Glossu \"The Beast\" Rabban",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (state: GameState): GameEffectChoice {
    const player = state.playerMap.get(state.currentPlayer);
    if (!player) {
      throw new Error("Player not defined. Illegal game state.");
    }
    const hasAllianceWithAnyFaction = Array.from(player.allianceMap.values()).some(value => value > 0);
    if (hasAllianceWithAnyFaction) {
      return { choices: applySoldiersToBattlefieldAndGarrison(2) };
    }
    return { choices: applySoldiersToBattlefieldAndGarrison(1) };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const baronHarkonnen: Leader = {
  name: "Baron Vladimir Harkonnen",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (_state: GameState) {
    return { choices: new Map<string, GameEffect>([]) };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const paulAtreides: Leader = {
  name: "Paul Atreides",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (_state: GameState) {
    return { choices: new Map<string, GameEffect>([]) };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const ilbanRichese: Leader = {
  name: "Count Ilban Richese",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (_state: GameState) {
    return { choices: new Map<string, GameEffect>([]) };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    let clonedPlayerState: PlayerState = _.cloneDeep(playerState);
    let currentSolari = playerState.resources.get("solari") || 0;
    clonedPlayerState.resources.set("solari", currentSolari + 2);
    return clonedPlayerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const earlThorvald: Leader = {
  name: "Earl Memnon Thorvald",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (_state: GameState) {
    return {
      choices: new Map<string, GameEffect>([
        [
          "Gain 1 Spice.",
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", 1]
            ])
          )
        ]
      ])
    };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const letoAtreides: Leader = {
  name: "Duke Leto Atreides",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (_state: GameState) {
    return { choices: new Map<string, GameEffect>([]) };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: []
}

export const helenaRichese: Leader = {
  name: "Helena Richese",
  leaderEffect: function (_game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (_state: GameState) {
    return { choices: new Map<string, GameEffect>([]) };
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  },
  ignoreEnemyAgentsOnLocationTypes: ["green", "purple"]
}
