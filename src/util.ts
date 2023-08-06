import { convincingArgumentCard, daggerCard, diplomacyCard, duneTheDesertPlanetCard, reconnaissanceCard, seekAlliesCard, signetRingCard } from "./cards";
import { Faction, GameState, ImperiumCard, Leader, PlayerState, Resource, fullFactionList } from "./types";

export function getCurrentPlayer(game: GameState): PlayerState {
  const currentPlayer = game.playerMap.get(game.currentPlayer);
  if (!currentPlayer) {
    throw new Error("Game state invalid.")
  }
  return currentPlayer
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
    deck: createStartingDeck(),
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
  return leader.gameStartEffect(playerState);
}

function createStartingDeck(): ImperiumCard[] {
  return [
    ...Array(2).fill(convincingArgumentCard),
    ...Array(2).fill(daggerCard),
    ...Array(2).fill(duneTheDesertPlanetCard),
    diplomacyCard,
    reconnaissanceCard,
    seekAlliesCard,
    signetRingCard
  ];
}

export function createEmptyInfluenceMap(): Map<Faction, number> {
  const influenceMap = new Map<Faction, number>();
  for (const faction of fullFactionList) {
    influenceMap.set(faction, 0);
  }
  return influenceMap;
}

export function createEmptyResourceMap(): Map<Resource, number> {
  let resourceMap = new Map<Resource, number>();
  resourceMap.set("spice", 0);
  resourceMap.set("solari", 0);
  resourceMap.set("water", 0);
  return resourceMap;
}

// Fisher-Yates (Knuth) shuffle algorithm.
export function shuffle<T>(array: T[]): T[] {
  const shuffled = array.slice();  // Create a copy of the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
