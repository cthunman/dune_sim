import { createEmptyInfluenceMap } from "./factions";

export type Game = {
  numPlayers: number;
  stateHistory: GameState[];
  conflictDeck: ImperiumCard[];
  availableConflictCards: ImperiumCard[];
  intrigueDeck: IntrigueCard[];
}

export type GameState = {
  currentPlayer: number;
  playerMap: Map<number, PlayerState>;
}

export type PlayerState = {
  leader: Leader;
  numAgents: number;
  mentatInPlay: number;
  swordmasterInPlay: number;
  agentLocations: BoardLocation[];
  deck: ImperiumCard[];
  hand: ImperiumCard[];
  discard: ImperiumCard[];
  trash: ImperiumCard[];
  intrigueCardList: IntrigueCard[];
  influenceMap: Map<Faction, number>;
  allianceMap: Map<Faction, number>;
  resources: Map<Resource, number>;
  soldiersInGarrison: number;
  soldiersInBattlefield: number;
  victoryPointCount: number;
}

export function createInitialGameState(playerStates: PlayerState[]): GameState {
  let playerMap = new Map<number, PlayerState>();
  playerStates.forEach((playerState, index) => {
    playerMap.set(index, playerState);
  });
  return {
    currentPlayer: 0,
    playerMap: playerMap
  };
}

export function createInitialPlayerState(leader: Leader): PlayerState {
  const playerState: PlayerState = {
    leader: leader,
    numAgents: 2,
    mentatInPlay: 0,
    swordmasterInPlay: 0,
    agentLocations: [],
    deck: [],
    hand: [],
    discard: [],
    trash: [],
    intrigueCardList: [],
    influenceMap: createEmptyInfluenceMap(),
    allianceMap: createEmptyInfluenceMap(),
    resources: createEmptyResourceMap(),
    soldiersInGarrison: 0,
    soldiersInBattlefield: 0,
    victoryPointCount: 0
  }
  return playerState
}

export type Leader = {
  name: String;
  gameStartEffect: GameEffect;
  leaderEffect: GameEffect;
  signetRingEffect: GameEffect;
};

export type GameEffect = (game: GameState) => GameState;
// currentPlayer: Player;
// gain resource
// spend resource
// gain soldiers
// deploy soldiers from barracks to battlefield

export type Choice = {
  // This may need to be enhanced for "trash any card".
  choice: (decision: Boolean) => GameEffect;
}

export type ImperiumCard = {
  name: String;
  destinationTypes: LocationType[]
  pickupEffect: GameEffect;
  agentEffect: GameEffect;
  revealEffect: GameEffect;
  persuasionScore: number;
};

export type Resource = "spice" | "solari" | "water";
export function createEmptyResourceMap(): Map<Resource, number> {
  let resourceMap = new Map<Resource, number>();
  resourceMap.set("spice", 0);
  resourceMap.set("solari", 0);
  resourceMap.set("water", 0);
  return resourceMap;
}

export type LocationType = "yellow" | "purple" | "green" | "beneGesserit" | "fremen" | "emperor" | "guild";
export type Faction = {
  name: String;
};

export type IntrigueCard = {
  cardType: "plot" | "combat" | "endgame";
  effect: GameEffect;
}

export type PlayerAgentTurn = {
  cardPlayed: ImperiumCard;
  agentLocation: BoardLocation;
  intrigueCardsPlayed: IntrigueCard[];
}


export type BoardLocation = {
  name: String;
  resourceCost: Map<Resource, number>;
  locationType: LocationType;
  effect: GameEffect;
};
