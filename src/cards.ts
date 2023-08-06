import { GameState, ImperiumCard } from "./types";
import { getCurrentPlayer } from "./util";

export const convincingArgumentCard: ImperiumCard = {
  name: "Convincing Argument",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
};

export const daggerCard: ImperiumCard = {
  name: "Dagger",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
};

export const diplomacyCard: ImperiumCard = {
  name: "Diplomacy",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
};

export const duneTheDesertPlanetCard: ImperiumCard = {
  name: "Dune The Desert Planet",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
};

export const reconnaissanceCard: ImperiumCard = {
  name: "Reconnaissance",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
};

export const seekAlliesCard: ImperiumCard = {
  name: "Seek Allies",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
};

export const signetRingCard: ImperiumCard = {
  name: "Signet Ring",
  destinationTypes: [],
  agentEffect: function (game: GameState): GameState {
    const currentPlayer = getCurrentPlayer(game);
    const leader = currentPlayer.leader;
    return leader.signetRingEffect(game);
  },
  revealEffect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  },
  persuasionScore: 0,
  pickupEffect: function (game: GameState): GameState {
    return game;
  }
};