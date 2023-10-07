import { GameEffect, ImperiumCard, Leader } from "./types";

export const convincingArgumentCard: ImperiumCard = {
  name: "Convincing Argument",
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
  destinationTypes: ["beneGesserit", "emperor", "guild", "fremen"],
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

export const foldspaceCard: ImperiumCard = {
  name: "Foldspace",
  destinationTypes: ["yellow", "green", "purple", "beneGesserit", "emperor", "fremen", "guild"],
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

export function createSignetRingCard(leader: Leader): ImperiumCard {
  return {
    name: "Signet Ring",
    destinationTypes: ["yellow", "green", "purple"],
    factionAffiliations: [], // fill in as necessary
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    agentEffect: {
      choices: new Map<string, GameEffect>([])
    },
    // agentEffect: leader.signetRingEffect,  // the agent effect comes from the leader
    revealEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 1, // or whatever default value you want
  };
}
