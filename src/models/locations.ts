import { BoardLocation, GameEffect, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer, applySoldierChangeToBattlefield, applySoldierChangeToGarrison, applySoldiersToBattlefieldAndGarrison, combineGameEffectList, doNothingEffect } from "./util";

// Green
export const highCouncil: BoardLocation = {
  name: "High Council",
  // resourceCost: new Map<Resource, number>([
  //   ["solari", 5]
  // ]),
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const mentat: BoardLocation = {
  name: "Mentat",
  // resourceCost: new Map<Resource, number>([ 
  //   ["solari", 2]
  // ]),
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const rallyTroops: BoardLocation = {
  name: "Rally Troops",
  // resourceCost: new Map<Resource, number>([
  //   ["solari", 4]
  // ]),
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const swordmaster: BoardLocation = {
  name: "Swordmaster",
  // resourceCost: new Map<Resource, number>([
  //   ["solari", 8]
  // ]),
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const hallOfOratory: BoardLocation = {
  name: "Hall of Oratory",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

// Purple
export const carthag: BoardLocation = {
  name: "Carthag",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const arrakeen: BoardLocation = {
  name: "Arrakeen",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const researchStation: BoardLocation = {
  name: "Research Station",
  // resourceCost: new Map<Resource, number>([
  //   ["water", 2]
  // ]),
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const sietchTabr: BoardLocation = {
  name: "Sietch Tabr",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

// Yellow
export const theGreatFlat: BoardLocation = {
  name: "The Great Flat",
  locationType: "yellow",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 2 Water Gain 3 Spice",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", 3],
            ["water", -2]
          ])
        ),
      ]
    ])
  }
}

export const haggaBasin: BoardLocation = {
  name: "HaggaBasin",
  locationType: "yellow",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 1 Water Gain 2 Spice",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", 2],
            ["water", -1]
          ])
        ),
      ]
    ])
  }
}

export const imperialBasin: BoardLocation = {
  name: "Imperial Basin",
  locationType: "yellow",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Gain 1 Spice",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", 1],
          ])
        ),
      ]
    ])
  }
}

export const secureContract: BoardLocation = {
  name: "Secure Contract",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "yellow",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Gain 3 Solari",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["solari", 3],
          ])
        ),
      ]
    ])
  }
}

export const sellMelange: BoardLocation = {
  name: "Sell Melange",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "yellow",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Trade 2 Spice for 6 Solari",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", -2],
            ["solari", 6],
          ])
        ),
      ],
      [
        "Trade 3 Spice for 8 Solari",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", -3],
            ["solari", 8],
          ])
        ),
      ],
      [
        "Trade 4 Spice for 10 Solari",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", -4],
            ["solari", 10],
          ])
        ),
      ],
      [
        "Trade 5 Spice for 12 Solari",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", -5],
            ["solari", 12],
          ])
        ),
      ]
    ])
  }
}

// Bene Gesserit
export const selectiveBreeding: BoardLocation = {
  name: "Selective Breeding",
  // resourceCost: new Map<Resource, number>([
  //   ["solari", 2]
  // ]),
  locationType: "beneGesserit",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 2 Spice",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["spice", -2]
          ])
        ),
      ],
      [
        "Pay 2 Spice Discard a Card and Draw 2 Cards",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -2]
            ])
          ),
          doNothingEffect() // TODO: #1 Write Discard Card and Draw 2 Cards function
        ])
      ]
    ])
  }
}

export const secrets: BoardLocation = {
  name: "Secrets",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "beneGesserit",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Draw 1 Intrigue Card and Steal Intrigue Card from Opponents with 4 or More",
        combineGameEffectList([
          doNothingEffect(), // TODO: #2 Write Draw N Intrigue Card Function
          doNothingEffect() // TODO: #3 Write Steal Intrigue Card from Opponents with 4 or More Function
        ])
      ]
    ])
  }
}

// Fremen
export const stillsuits: BoardLocation = {
  name: "Stillsuits",
  locationType: "fremen",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Gain 1 Water",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["water", 1]
          ])
        ),
      ]
    ])
  }
}

export const hardyWarriors: BoardLocation = {
  name: "Hardy Warriors",
  locationType: "fremen",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 1 Water Gain 2 Troops in Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["water", -1]
            ])
          ),
          applySoldierChangeToBattlefield(2)
        ])
      ],
      [
        "Pay 1 Water Gain 1 Troop in Battlefield 1 in Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["water", -1]
            ])
          ),
          applySoldierChangeToBattlefield(1),
          applySoldierChangeToGarrison(1)
        ])
      ],
      [
        "Pay 1 Water Gain 2 Troops in Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["water", -1]
            ])
          ),
          applySoldierChangeToGarrison(2)
        ])
      ]
    ])
  }
}

// Guild
export const foldspace: BoardLocation = {
  name: "Foldspace",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "fremen",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const heighliner: BoardLocation = {
  name: "Heighliner",
  // resourceCost: new Map<Resource, number>([
  //   ["spice", 6]
  // ]),
  locationType: "fremen",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

// Emperor
export const wealth: BoardLocation = {
  name: "Wealth",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "fremen",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const conspire: BoardLocation = {
  name: "Conspire",
  // resourceCost: new Map<Resource, number>([
  //   ["spice", 4]
  // ]),
  locationType: "fremen",
  effect: {
    choices: new Map<string, GameEffect>([])
  }
}

export const fullLocationList: BoardLocation[] = [
  highCouncil,
  conspire,
  mentat,
  rallyTroops,
  swordmaster,
  hallOfOratory,
  carthag,
  arrakeen,
  researchStation,
  sietchTabr,
  theGreatFlat,
  haggaBasin,
  imperialBasin,
  secureContract,
  sellMelange,
  selectiveBreeding,
  secrets,
  stillsuits,
  hardyWarriors,
  foldspace,
  heighliner,
  wealth,
];
