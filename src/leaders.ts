import _ from "lodash";
import { GameEffect, GameState, Leader, PlayerState, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer, applySoldierChangeToBattlefield, applySoldierChangeToGarrison } from "./util";

export const arianaThorvald: Leader = {
  name: "Countess Ariana Thorvald",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const glossuRabban: Leader = {
  name: "Glossu \"The Beast\" Rabban",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([
      ["Add 1 Soldier to Garrison", applySoldierChangeToGarrison(1)],
      ["Add 1 Soldier to Battlefiedl", applySoldierChangeToBattlefield(1)]
    ])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const baronHarkonnen: Leader = {
  name: "Baron Vladimir Harkonnen",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const paulAtreides: Leader = {
  name: "Paul Atreides",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const ilbanRichese: Leader = {
  name: "Count Ilban Richese",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    let clonedPlayerState: PlayerState = _.cloneDeep(playerState);
    let currentSolari = playerState.resources.get("solari") || 0;
    clonedPlayerState.resources.set("solari", currentSolari + 2);
    return clonedPlayerState;
  }
}

export const earlThorvald: Leader = {
  name: "Earl Memnon Thorvald",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
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
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const letoAtreides: Leader = {
  name: "Duke Leto Atreides",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const helenaRichese: Leader = {
  name: "Helena Richese",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: {
    choices: new Map<string, GameEffect>([])
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}
