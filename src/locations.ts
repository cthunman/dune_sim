import { BoardLocation, GameState, Resource } from "./types";

// Green
export const highCouncil: BoardLocation = {
  name: "High Council",
  resourceCost: new Map<Resource, number>([
    ["solari", 5]
  ]),
  locationType: "green",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const mentat: BoardLocation = {
  name: "Mentat",
  resourceCost: new Map<Resource, number>([
    ["solari", 2]
  ]),
  locationType: "green",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const rallyTroops: BoardLocation = {
  name: "Rally Troops",
  resourceCost: new Map<Resource, number>([
    ["solari", 4]
  ]),
  locationType: "green",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const swordmaster: BoardLocation = {
  name: "Swordmaster",
  resourceCost: new Map<Resource, number>([
    ["solari", 8]
  ]),
  locationType: "green",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const hallOfOratory: BoardLocation = {
  name: "Hall of Oratory",
  resourceCost: new Map<Resource, number>([]),
  locationType: "green",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

// Purple
export const carthag: BoardLocation = {
  name: "Carthag",
  resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const arrakeen: BoardLocation = {
  name: "Arrakeen",
  resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const researchStation: BoardLocation = {
  name: "Research Station",
  resourceCost: new Map<Resource, number>([
    ["water", 2]
  ]),
  locationType: "purple",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const sietchTabr: BoardLocation = {
  name: "Sietch Tabr",
  resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

// Yellow
export const theGreatFlat: BoardLocation = {
  name: "The Great Flat",
  resourceCost: new Map<Resource, number>([
    ["water", 2]
  ]),
  locationType: "yellow",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const haggaBasin: BoardLocation = {
  name: "HaggaBasin",
  resourceCost: new Map<Resource, number>([
    ["water", 1]
  ]),
  locationType: "yellow",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const imperialBasin: BoardLocation = {
  name: "Imperial Basin",
  resourceCost: new Map<Resource, number>([]),
  locationType: "yellow",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const secureContract: BoardLocation = {
  name: "Secure Contract",
  resourceCost: new Map<Resource, number>([]),
  locationType: "yellow",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const sellMelange: BoardLocation = {
  name: "Sell Melange",
  resourceCost: new Map<Resource, number>([]),
  locationType: "yellow",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

// Bene Gesserit
export const selectiveBreeding: BoardLocation = {
  name: "Selective Breeding",
  resourceCost: new Map<Resource, number>([
    ["solari", 2]
  ]),
  locationType: "beneGesserit",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const secrets: BoardLocation = {
  name: "Secrets",
  resourceCost: new Map<Resource, number>([]),
  locationType: "beneGesserit",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

// Fremen
export const stillsuits: BoardLocation = {
  name: "Stillsuits",
  resourceCost: new Map<Resource, number>([]),
  locationType: "fremen",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const hardyWarriors: BoardLocation = {
  name: "Hardy Warriors",
  resourceCost: new Map<Resource, number>([
    ["water", 1]
  ]),
  locationType: "fremen",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

// Guild
export const foldspace: BoardLocation = {
  name: "Foldspace",
  resourceCost: new Map<Resource, number>([]),
  locationType: "fremen",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const heighliner: BoardLocation = {
  name: "Heighliner",
  resourceCost: new Map<Resource, number>([
    ["spice", 6]
  ]),
  locationType: "fremen",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

// Emperor
export const wealth: BoardLocation = {
  name: "Wealth",
  resourceCost: new Map<Resource, number>([]),
  locationType: "fremen",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}

export const conspire: BoardLocation = {
  name: "Conspire",
  resourceCost: new Map<Resource, number>([
    ["spice", 4]
  ]),
  locationType: "fremen",
  effect: function (game: GameState): GameState {
    throw new Error("Function not implemented.");
  }
}
