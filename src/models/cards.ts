import { GameEffect, GameState, ImperiumCard, Leader } from "./types";
import { v4 as uuidv4 } from 'uuid';


export function createSignetRingCard(leader: Leader): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Signet Ring",
    destinationTypes: ["yellow", "green", "purple"],
    factionAffiliations: [],
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    agentEffect: leader.signetRingEffect,
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    persuasionScore: 1,
  };
}

export function getConvincingArgumentCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Convincing Argument",
    destinationTypes: [],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0,
  };
}

export function getDaggerCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Dagger",
    destinationTypes: ["green"],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0,
  };
}

export function getDiplomacyCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Diplomacy",
    destinationTypes: ["beneGesserit", "emperor", "fremen", "guild"],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0
  };
}

export function getDuneTheDesertPlanetCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Dune The Desert Planet",
    destinationTypes: ["yellow"],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0
  };
}

export function getReconnaissanceCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Reconnaissance",
    destinationTypes: ["purple"],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0
  };
}

export function getSeekAlliesCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Seek Allies",
    destinationTypes: ["beneGesserit", "emperor", "guild", "fremen"],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0
  };
}

export function getFoldspaceCard(): ImperiumCard {
  return {
    id: uuidv4(),
    name: "Foldspace",
    destinationTypes: ["yellow", "green", "purple", "beneGesserit", "emperor", "fremen", "guild"],
    factionAffiliations: [],
    agentEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    revealEffect: (_state: GameState) => {
      return {
        choices: new Map<string, GameEffect>([
        ])
      };
    },
    pickupEffect: {
      choices: new Map<string, GameEffect>([])
    },
    persuasionScore: 0
  };
}
