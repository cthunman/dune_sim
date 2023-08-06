import { fullFactionList } from "./factions";
import { Faction, GameState, Leader, PlayerState, Resource } from "./types";

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
