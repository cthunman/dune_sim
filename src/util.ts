import _ from "lodash";
import {
  convincingArgumentCard,
  daggerCard,
  diplomacyCard,
  duneTheDesertPlanetCard,
  reconnaissanceCard,
  seekAlliesCard,
  signetRingCard
} from "./cards";
import {
  Faction,
  GameEffect,
  GameState,
  ImperiumCard,
  Leader,
  PlayerState,
  Resource,
  fullFactionList
} from "./types";

export function cloneAndModifyGameState(
  gameState: GameState,
  modifyFunction: GameEffect
): GameState {
  let clonedGameState: GameState = _.cloneDeep(gameState);
  clonedGameState = modifyFunction(clonedGameState)
  return clonedGameState;
}

export function applyResourceChangesToCurrentPlayer(resourceMap: Map<Resource, number>) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    for (let [resource, amount] of resourceMap.entries()) {
      let currentAmount = currentPlayer.resources.get(resource) || 0;
      currentPlayer.resources.set(resource, currentAmount + amount);
    }
    return game;
  };
}

export function getCurrentPlayer(game: GameState): PlayerState {
  const currentPlayer = game.playerMap.get(game.currentPlayer);
  if (!currentPlayer) {
    throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
  }
  return currentPlayer;
}

export function getNextPlayer(game: GameState): number {
  return (game.currentPlayer + 1) % game.playerMap.size;
}

export function createInitialGameState(playerStates: PlayerState[]): GameState {
  let playerMap = new Map<number, PlayerState>();
  let delayedEffectsMap = new Map<number, GameEffect>();
  playerStates.forEach((playerState, index) => {
    playerMap.set(index, playerState);
  });
  return {
    roundNumber: 0,
    currentPlayer: 0,
    playerMap: playerMap,
    delayedEffects: delayedEffectsMap
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
    resources: createInitialResourceMap(),
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

export function createInitialResourceMap(): Map<Resource, number> {
  let resourceMap = new Map<Resource, number>();
  resourceMap.set("spice", 0);
  resourceMap.set("solari", 0);
  resourceMap.set("water", 1);
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
