import { GameEffect, GameState, ImperiumCard, Leader } from "./types";
import { getCurrentPlayer } from "./util";

export const convincingArgumentCard: ImperiumCard = {
  name: "",
  destinationTypes: [],
  factionAffiliations: [],
  agentEffect: {
    choices: new Map<string, GameEffect>([])
  },
  revealEffect: {
    choices: new Map<string, GameEffect>([])
  },
  pickupEffect: {
    choices: new Map<string, GameEffect>([])
  },
  persuasionScore: 0,
};

export const daggerCard: ImperiumCard = {
  name: "Dagger",
  destinationTypes: [],
  factionAffiliations: [],
  agentEffect: {
    choices: new Map<string, GameEffect>([])
  },
  revealEffect: {
    choices: new Map<string, GameEffect>([])
  },
  pickupEffect: {
    choices: new Map<string, GameEffect>([])
  },
  persuasionScore: 0,
};

export const diplomacyCard: ImperiumCard = {
  name: "Diplomacy",
  destinationTypes: [],
  factionAffiliations: [],
  agentEffect: {
    choices: new Map<string, GameEffect>([])
  },
  revealEffect: {
    choices: new Map<string, GameEffect>([])
  },
  pickupEffect: {
    choices: new Map<string, GameEffect>([])
  },
  persuasionScore: 0
};

export const duneTheDesertPlanetCard: ImperiumCard = {
  name: "Dune The Desert Planet",
  destinationTypes: [],
  factionAffiliations: [],
  agentEffect: {
    choices: new Map<string, GameEffect>([])
  },
  revealEffect: {
    choices: new Map<string, GameEffect>([])
  },
  pickupEffect: {
    choices: new Map<string, GameEffect>([])
  },
  persuasionScore: 0
};

export const reconnaissanceCard: ImperiumCard = {
  name: "Reconnaissance",
  destinationTypes: [],
  factionAffiliations: [],
  agentEffect: {
    choices: new Map<string, GameEffect>([])
  },
  revealEffect: {
    choices: new Map<string, GameEffect>([])
  },
  pickupEffect: {
    choices: new Map<string, GameEffect>([])
  },
  persuasionScore: 0
};

export const seekAlliesCard: ImperiumCard = {
  name: "Seek Allies",
  destinationTypes: [],
  factionAffiliations: [],
  agentEffect: {
    choices: new Map<string, GameEffect>([])
  },
  revealEffect: {
    choices: new Map<string, GameEffect>([])
  },
  pickupEffect: {
    choices: new Map<string, GameEffect>([])
  },
  persuasionScore: 0
};

// export const signetRingCard: ImperiumCard = {
//   name: "Signet Ring",
//   destinationTypes: ["yellow", "green", "purple"],
//   agentEffect: function (game: GameState): GameStateEffect {
//     const currentPlayer = getCurrentPlayer(game);
//     const leader = currentPlayer.leader;
//     return leader.signetRingEffect(game);
//   },
//   revealEffect: function (game: GameState): GameState {
//     throw new Error("Function not implemented.");
//   },
//   persuasionScore: 0,
//   pickupEffect: function (game: GameState): GameState {
//     return game;
//   }
// };
export function createSignetRingCard(leader: Leader): ImperiumCard {
  return {
    name: "Signet Ring",
    destinationTypes: ["yellow", "green", "purple"],
    factionAffiliations: [], // fill in as necessary
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    agentEffect: leader.signetRingEffect,  // the agent effect comes from the leader
    revealEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 1, // or whatever default value you want
  };
}
