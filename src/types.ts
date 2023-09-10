export type Game = {
  numPlayers: number;
  stateHistory: GameState[];
  conflictDeck: ConflictCard[];
  imperiumDeck: ImperiumCard[];
  availableImperiumCards: ImperiumCard[];
  intrigueDeck: IntrigueCard[];
}

export type GameState = {
  roundNumber: number;
  currentPlayer: number;
  playerMap: Map<number, PlayerState>;
  delayedEffects: Map<number, GameEffectChoice>;
}

export type PlayerState = {
  leader: Leader;
  numAgents: number;
  mentatInPlay: number;
  swordmasterInPlay: number;
  agentLocations: BoardLocation[];
  locationFlags: BoardLocation[];
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

export type LeaderEffect = {}
export type Leader = {
  name: string;
  gameStartEffect: PlayerEffect;
  leaderEffect: LeaderEffect;
  signetRingEffect: GameEffectChoice;
};

export type PlayerEffect = (game: PlayerState) => PlayerState;
export type GameEffect = (game: GameState) => GameState;
export type GameEffectChoice = {
  choices: Map<string, GameEffect>;
}

export type ImperiumCard = {
  name: string;
  destinationTypes: LocationType[];
  factionAffiliations: Faction[];
  pickupEffect: GameEffectChoice;
  agentEffect: GameEffectChoice;
  revealEffect: GameEffectChoice;
  persuasionScore: number;
};

export type Resource = "spice" | "solari" | "water";
export type LocationType = "yellow" | "purple" | "green" | "beneGesserit" | "fremen" | "emperor" | "guild";
export type Faction = "beneGesseritFaction" | "fremenFaction" | "emperorFaction" | "guildFaction";
export type IntrigueCardType = "plot" | "combat" | "endgame";
export const fullFactionList: Faction[] = ["beneGesseritFaction", "fremenFaction", "emperorFaction", "guildFaction"];

export type IntrigueCard = {
  cardTypes: IntrigueCardType[];
  effect: GameEffectChoice;
}

type PlayCard<T> = {
  cardPlayed: T;
  effectChoice: string;
};
export type PlayIntrigueOrImperiumCard = PlayCard<IntrigueCard | ImperiumCard>;

export type PlayerAgentTurn = {
  cardPlayed: PlayIntrigueOrImperiumCard;
  agentLocation: BoardLocation;
  intrigueCardsPlayed: PlayIntrigueOrImperiumCard[];
}

export type BoardLocation = {
  name: string;
  locationType: LocationType;
  effect: GameEffectChoice;
};

export type ConflictCard = {
  firstPlace: GameEffectChoice;
  secondPlace: GameEffectChoice;
  thirdPlace: GameEffectChoice;
}