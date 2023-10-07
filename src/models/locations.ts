import { BoardLocation, Faction, GameEffect, Resource } from "./types";
import { applyPersuasionChangeToPlayer, applyResourceChangesToCurrentPlayer, applySoldierChangeToBattlefield, applySoldierChangeToGarrison, combineGameEffectList, doNothingEffect, drawCard, drawFoldspaceCard, drawIntrigueCard, givePlayerHighCouncilSeat, givePlayerSwordmaster, transferIntrigueCards } from "./util";

// Green
export const highCouncil: BoardLocation = {
  name: "High Council",
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Purchase High Council Seat",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -5]
            ])
          ),
          givePlayerHighCouncilSeat() // TODO: #6 Test that this function works.
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const mentat: BoardLocation = {
  name: "Mentat",
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: true,
  isMentatAvailable: true,
  influenceRequrement: new Map<Faction, number>([])
}

export const rallyTroops: BoardLocation = {
  name: "Rally Troops",
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 4 solari for 4 Troops to Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -4]
            ])
          ),
          applySoldierChangeToBattlefield(4)
        ])
      ],
      [
        "Pay 4 solari for 3 Troops to Battlefield 1 to Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -4]
            ])
          ),
          applySoldierChangeToBattlefield(3),
          applySoldierChangeToGarrison(1)
        ])
      ],
      [
        "Pay 4 solari for 2 Troops to Battlefield 2 to Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -4]
            ])
          ),
          applySoldierChangeToBattlefield(2),
          applySoldierChangeToGarrison(2)
        ])
      ],
      [
        "Pay 4 solari for 1 Troops to Battlefield 3 to Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -4]
            ])
          ),
          applySoldierChangeToBattlefield(1),
          applySoldierChangeToGarrison(3)
        ])
      ],
      [
        "Pay 4 solari for 4 Troops to Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -4]
            ])
          ),
          applySoldierChangeToGarrison(4)
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const swordmaster: BoardLocation = {
  name: "Swordmaster",
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 8 solari for a swordmaster",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["solari", -8]
            ])
          ),
          givePlayerSwordmaster()
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const hallOfOratory: BoardLocation = {
  name: "Hall of Oratory",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "green",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Receive 1 Troop to Battlefield and +1 Persuasion",
        combineGameEffectList([
          applySoldierChangeToBattlefield(1),
          applyPersuasionChangeToPlayer(1)
        ])
      ],
      [
        "Receive 1 Troop to Garrison and +1 Persuasion",
        combineGameEffectList([
          applySoldierChangeToGarrison(1),
          applyPersuasionChangeToPlayer(1)
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

// Purple
export const carthag: BoardLocation = {
  name: "Carthag",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Receive 1 Troop to Battlefield and Draw Intrigue Card",
        combineGameEffectList([
          applySoldierChangeToBattlefield(1),
          drawIntrigueCard()
        ])
      ],
      [
        "Receive 1 Troop to Garrison and Draw Intrigue Card",
        combineGameEffectList([
          applySoldierChangeToGarrison(1),
          drawIntrigueCard()
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const arrakeen: BoardLocation = {
  name: "Arrakeen",
  // resourceCost: new Map<Resource, number>([]),
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Receive 1 Troop to Battlefield and Draw Card",
        combineGameEffectList([
          applySoldierChangeToBattlefield(1),
          drawCard()
        ])
      ],
      [
        "Receive 1 Troop to Garrison and Draw Card",
        combineGameEffectList([
          applySoldierChangeToGarrison(1),
          drawCard()
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const researchStation: BoardLocation = {
  name: "Research Station",
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 2 Water Draw 3 Cards",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["water", -2]
            ])
          ),
          drawCard(),
          drawCard(),
          drawCard()
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

// TODO: #7 Figure out how to require 2 influence with Fremen
export const sietchTabr: BoardLocation = {
  name: "Sietch Tabr",
  locationType: "purple",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Receive 1 Troop to Battlefield and Get 1 Water",
        combineGameEffectList([
          applySoldierChangeToBattlefield(1),
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["water", 1]
            ])
          ),
        ])
      ],
      [
        "Receive 1 Troop to Garrison and Get 1 Water",
        combineGameEffectList([
          applySoldierChangeToGarrison(1),
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["water", 1]
            ])
          ),
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([
    ["fremenFaction", 2]
  ])
}

// Yellow
// TODO: #8 Figure out bonus spice on these locations.
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

// Bene Gesserit
export const selectiveBreeding: BoardLocation = {
  name: "Selective Breeding",
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
          doNothingEffect(), // TODO: #9 Figure out how to handle discard a card choice.
          drawCard(),
          drawCard()
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
          drawIntrigueCard(),
          transferIntrigueCards() // TODO: #3 Write Steal Intrigue Card from Opponents with 4 or More Function
        ])
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

// Guild
export const foldspace: BoardLocation = {
  name: "Foldspace",
  locationType: "guild",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Draw Foldspace Card",
        drawFoldspaceCard()
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const heighliner: BoardLocation = {
  name: "Heighliner",
  locationType: "guild",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 6 Spice to Gain 2 Water and 5 Troops in Garrison",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -6],
              ["water", 2]
            ])
          ),
          applySoldierChangeToGarrison(5)
        ])
      ],
      [
        "Pay 6 Spice to Gain 2 Water and 4 Troops in Garrison and 1 in Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -6],
              ["water", 2]
            ])
          ),
          applySoldierChangeToGarrison(4),
          applySoldierChangeToBattlefield(1)
        ])
      ],
      [
        "Pay 6 Spice to Gain 2 Water and 3 Troops in Garrison and 2 in Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -6],
              ["water", 2]
            ])
          ),
          applySoldierChangeToGarrison(3),
          applySoldierChangeToBattlefield(2)
        ])
      ],
      [
        "Pay 6 Spice to Gain 2 Water and 2 Troops in Garrison and 3 in Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -6],
              ["water", 2]
            ])
          ),
          applySoldierChangeToGarrison(2),
          applySoldierChangeToBattlefield(3)
        ])
      ],
      [
        "Pay 6 Spice to Gain 2 Water and 1 Troops in Garrison and 4 in Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -6],
              ["water", 2]
            ])
          ),
          applySoldierChangeToGarrison(1),
          applySoldierChangeToBattlefield(4)
        ])
      ],
      [
        "Pay 6 Spice to Gain 2 Water and 5 Troops in Battlefield",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -6],
              ["water", 2]
            ])
          ),
          applySoldierChangeToBattlefield(5)
        ])
      ],
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

// Emperor
export const wealth: BoardLocation = {
  name: "Wealth",
  locationType: "emperor",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Gain 2 solari",
        applyResourceChangesToCurrentPlayer(
          new Map<Resource, number>([
            ["solari", 2]
          ])
        )
      ]
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
}

export const conspire: BoardLocation = {
  name: "Conspire",
  locationType: "emperor",
  effect: {
    choices: new Map<string, GameEffect>([
      [
        "Pay 4 Spice to Gain 5 Solari and 2 Troops in Garrison and Draw an Intrigue Card",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -4],
              ["solari", 5]
            ])
          ),
          applySoldierChangeToGarrison(2),
          drawIntrigueCard()
        ])
      ],
      [
        "Pay 4 Spice to Gain 5 Solari and 1 Troops in Battlefield and 1 in Garrison and Draw an Intrigue Card",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -4],
              ["solari", 5]
            ])
          ),
          applySoldierChangeToBattlefield(1),
          applySoldierChangeToGarrison(1),
          drawIntrigueCard()
        ])
      ],
      [
        "Pay 4 Spice to Gain 5 Solari and 2 Troops in Battlefield and Draw an Intrigue Card",
        combineGameEffectList([
          applyResourceChangesToCurrentPlayer(
            new Map<Resource, number>([
              ["spice", -4],
              ["solari", 5]
            ])
          ),
          applySoldierChangeToBattlefield(2),
          drawIntrigueCard()
        ])
      ],
    ])
  },
  isMakerLocation: false,
  extraSpice: 0,
  isMentatSpace: false,
  isMentatAvailable: false,
  influenceRequrement: new Map<Faction, number>([])
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
