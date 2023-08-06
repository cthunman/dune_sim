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
