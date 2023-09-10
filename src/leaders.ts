import _ from "lodash";
import { GameEffect, GameState, Leader, PlayerState, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer } from "./util";

// export type Leader = {
//     name: String;
//     leaderEffect: GameEffect;
//     signetRingEffect: GameEffect;
// };

export const arianaThorvald: Leader = {
  name: "Countess Ariana Thorvald",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
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
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
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
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
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
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
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
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
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
  signetRingEffect: applyResourceChangesToCurrentPlayer(
    new Map<Resource, number>([
      ["spice", 1]
    ])
  ),
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}

export const letoAtreides: Leader = {
  name: "Duke Leto Atreides",
  leaderEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
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
  signetRingEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  gameStartEffect: function (playerState: PlayerState): PlayerState {
    return playerState;
  }
}
