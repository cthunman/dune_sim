import _ from "lodash";
import { GameEffect, GameEffectChoice, GameState, Leader, PlayerState, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer, applySoldierChangeToBattlefield, applySoldierChangeToGarrison, applySoldiersToBattlefieldAndGarrison } from "./util";

export const arianaThorvald: Leader = {
  name: "Countess Ariana Thorvald",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: (player: PlayerState) => ({ choices: new Map<string, GameEffect>([]) }),
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const glossuRabban: Leader = {
  name: "Glossu \"The Beast\" Rabban",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (player: PlayerState): GameEffectChoice {
    const hasAllianceWithAnyFaction = Array.from(player.allianceMap.values()).some(value => value > 0);
    if (hasAllianceWithAnyFaction) {
      return { choices: applySoldiersToBattlefieldAndGarrison(2) };
    }
    return { choices: applySoldiersToBattlefieldAndGarrison(1) };
  },

  // signetRingEffect: {
  //   choices: new Map([
  //     ...applySoldiersToBattlefieldAndGarrison(1),
  //     ...applySoldiersToBattlefieldAndGarrison(2)
  //   ])
  // },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const baronHarkonnen: Leader = {
  name: "Baron Vladimir Harkonnen",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (player: PlayerState) {
    return { choices: new Map<string, GameEffect>([]) }
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
  signetRingEffect: function (player: PlayerState) {
    return { choices: new Map<string, GameEffect>([]) }
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
  signetRingEffect: function (player: PlayerState) {
    return { choices: new Map<string, GameEffect>([]) }
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
  signetRingEffect: function (player: PlayerState) {
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
    }
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
  signetRingEffect: function (player: PlayerState) {
    return { choices: new Map<string, GameEffect>([]) }
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
  signetRingEffect: function (player: PlayerState) {
    return { choices: new Map<string, GameEffect>([]) }
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}
