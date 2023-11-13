import _ from "lodash";
import {
  createSignetRingCard, getConvincingArgumentCard, getDaggerCard, getDiplomacyCard, getDuneTheDesertPlanetCard, getFoldspaceCard, getReconnaissanceCard, getSeekAlliesCard,
} from "./cards";
import {
  BoardLocation,
  Faction,
  GameEffect,
  GameEffectChoice,
  GameState,
  ImperiumCard,
  Leader,
  LocationType,
  PlayerColor,
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

export function combineGameEffectList(gameEffectList: GameEffect[]): GameEffect {
  return (initialGameState: GameState) => {
    return gameEffectList.reduce((currentGameState, gameEffect) => {
      return gameEffect(currentGameState);  // Apply the current gameEffect to the accumulated gameState
    }, initialGameState);
  };
}

export function applySoldierChangeToBattlefield(numSoldiers: number) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    currentPlayer.soldiersInBattlefield += numSoldiers;
    return game;
  };
}

export function applySoldierChangeToGarrison(numSoldiers: number) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    currentPlayer.soldiersInGarrison += numSoldiers;
    return game;
  };
}

export function applySoldiersToBattlefieldAndGarrison(numSoldiers: number): Map<string, (game: GameState) => GameState> {
  const combinations: Map<string, (game: GameState) => GameState> = new Map();
  for (let i = 0; i <= numSoldiers; i++) {
    const soldiersForBattlefield = i;
    const soldiersForGarrison = numSoldiers - i;
    const combinedFunction = (game: GameState): GameState => {
      let newGameState = applySoldierChangeToBattlefield(soldiersForBattlefield)(game);
      newGameState = applySoldierChangeToGarrison(soldiersForGarrison)(newGameState);
      return newGameState;
    };
    const description = `Soldiers: ${soldiersForBattlefield} to battlefield, ${soldiersForGarrison} to garrison`;
    combinations.set(description, combinedFunction);
  }
  return combinations;
}

export function doNothingEffect(): GameEffect {
  return function (game: GameState): GameState {
    return game
  }
}

// NEEDS_TESTING
export function applyInfluenceChangesToCurrentPlayer(influenceMap: Map<Faction, number>) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    influenceMap.forEach((change, faction) => {
      const currentInfluence = currentPlayer.influenceMap.get(faction) || 0;
      currentPlayer.influenceMap.set(faction, Math.min(currentInfluence + change, 7));
    });
    return {
      ...game,
      playerMap: new Map(game.playerMap).set(game.currentPlayer, currentPlayer),
    };
  };
}

export function applyResourceChangesToCurrentPlayer(resourceMap: Map<Resource, number>) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    for (const [resource, amount] of resourceMap.entries()) {
      const currentAmount = currentPlayer.resources.get(resource) || 0;
      currentPlayer.resources.set(resource, currentAmount + amount);
    }
    return game;
  };
}

// NEEDS_TESTING
export function drawCard() {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    let { deck, hand, discard } = currentPlayer;
    // If deck is empty, shuffle discard into deck
    if (deck.length === 0) {
      if (discard.length === 0) {
        throw new Error("Both deck and discard are empty. Cannot draw a card.");
      }
      deck = shuffle([...discard]);
      discard = [];
    }
    // Draw top card from deck
    const drawnCard = deck.pop();
    if (!drawnCard) {
      throw new Error("Failed to draw a card from the deck.");
    }
    // Add the drawn card to hand
    hand = [...hand, drawnCard];
    // Create a new player state
    const newCurrentPlayer: PlayerState = {
      ...currentPlayer,
      deck,
      hand,
      discard,
    };
    // Update the player map with the new player state
    const newPlayerMap = new Map(game.playerMap);
    newPlayerMap.set(game.currentPlayer, newCurrentPlayer);
    // Create a new game state and return
    const newGame: GameState = {
      ...game,
      playerMap: newPlayerMap,
    };
    return newGame;
  };
}

// NEEDS_TESTING
export function transferIntrigueCards() {
  return function (game: GameState): GameState {
    // Extract current player's state
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    const newPlayerMap = new Map<number, PlayerState>(game.playerMap);
    // Go through each player and transfer an intrigue card if condition met
    newPlayerMap.forEach((player, playerId) => {
      // Skip if the player is the current player
      if (playerId === game.currentPlayer) return;
      // Check if the player has 4 or more intrigue cards
      if (player.intrigueCardList.length >= 4) {
        // Choose a random card to give away
        const randomIndex = Math.floor(Math.random() * player.intrigueCardList.length);
        const [transferredCard] = player.intrigueCardList.splice(randomIndex, 1);
        // Add the chosen card to the current player's intrigue card list
        currentPlayer.intrigueCardList.push(transferredCard);
        // Update the player in the map
        newPlayerMap.set(playerId, {
          ...player,
          intrigueCardList: [...player.intrigueCardList],
        });
      }
    });
    // Update the current player in the map
    newPlayerMap.set(game.currentPlayer, {
      ...currentPlayer,
      intrigueCardList: [...currentPlayer.intrigueCardList],
    });
    // Return the new game state
    return {
      ...game,
      playerMap: newPlayerMap,
    };
  }
}

// NEEDS_TESTING
export function drawIntrigueCard() {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    if (game.intrigueDeck.length === 0) {
      throw new Error("Intrigue Deck is empty. Cannot draw a card.");
    }
    // Get the top intrigue card and remove it from the intrigue deck
    const drawnCard = game.intrigueDeck.pop();
    if (!drawnCard) {
      throw new Error(`Game state invalid. Unable to draw intrigueCard.`);
    }
    // Copy player and update the intrigueCardList
    const newCurrentPlayer: PlayerState = {
      ...currentPlayer,
      intrigueCardList: [...currentPlayer.intrigueCardList, drawnCard]
    };
    // Update the player map with the new player state
    const newPlayerMap = new Map(game.playerMap);
    newPlayerMap.set(game.currentPlayer, newCurrentPlayer);
    // Update game state and return
    const newGame: GameState = {
      ...game,
      playerMap: newPlayerMap,
      intrigueDeck: game.intrigueDeck // No need to slice, pop has modified the original array
    };
    return newGame;
  };
}

export function drawFoldspaceCard() {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    const newFoldspace: ImperiumCard = {
      ...getFoldspaceCard(),
    };
    const updatedDiscard = [...currentPlayer.discard, newFoldspace];
    // Updating the currentPlayer state
    const updatedPlayer: PlayerState = {
      ...currentPlayer,
      discard: updatedDiscard,
    };
    // Updating the game's playerMap
    const newPlayerMap = new Map(game.playerMap);
    newPlayerMap.set(game.currentPlayer, updatedPlayer);
    // Constructing and returning the updated game state
    return {
      ...game,
      playerMap: newPlayerMap,
    };
  };
}

// NEEDS_TESTING
export function applyPersuasionChangeToPlayer(persuasionScore: number) {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    currentPlayer.persuasionScore += persuasionScore;
    return game;
  };
}

// NEEDS_TESTING
export function givePlayerSwordmaster() {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    currentPlayer.swordmasterInPlay = 1;
    return game;
  };
}

// NEEDS_TESTING
export function givePlayerHighCouncilSeat() {
  return function (game: GameState): GameState {
    const currentPlayer = game.playerMap.get(game.currentPlayer);
    if (!currentPlayer) {
      throw new Error(`Game state invalid. Current player value: ${game.currentPlayer}`);
    }
    currentPlayer.highCouncilSeat = 1;
    return game;
  };
}

// NEEDS_TESTING
// TODO: #10 Implement logic to handle intrigue cards that affect available spaces.
export function getAvailableLocations(
  gameState: GameState,
  fullLocationList: BoardLocation[],
  imperiumCard: ImperiumCard,
  ignoreAgentsLocationTypes: LocationType[],
): BoardLocation[] {
  const occupiedLocations: Set<string> = new Set();
  gameState.playerMap.forEach((playerState, playerId) => {
    playerState.agentLocations.forEach(location => {
      // If it is not the currentPlayer or if the location type is not in the ignore list
      if (playerId === gameState.currentPlayer || !ignoreAgentsLocationTypes.includes(location.locationType)) {
        occupiedLocations.add(location.name);
      }
    });
  });

  return fullLocationList.filter(location => {
    // Rule 1: The location is not already occupied by an agent
    if (occupiedLocations.has(location.name)) {
      return false;
    }
    // Rule 2: The location type must be one of the destinationTypes on the card
    return imperiumCard.destinationTypes.includes(location.locationType);
  });
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

export function advanceGameToNextPlayer(game: GameState): GameState {
  const nextPlayer = getNextPlayer(game);
  game.currentPlayer = nextPlayer;
  return game
}

export function createInitialGameState(playerStates: PlayerState[]): GameState {
  const playerMap = new Map<number, PlayerState>();
  const delayedEffectsMap = new Map<number, GameEffectChoice>();
  playerStates.forEach((playerState, index) => {
    const shuffledDeck = shuffle(playerState.deck);
    playerState.deck = shuffledDeck.slice(5);
    playerState.hand = shuffledDeck.slice(0, 5);
    playerMap.set(index, playerState);
  });
  return {
    roundNumber: 0,
    currentPlayer: 0,
    playerMap: playerMap,
    delayedEffects: delayedEffectsMap,
    // Initializing the various decks as empty arrays for now
    intrigueDeck: [],
    conflictDeck: [],
    imperiumDeck: [],
    availableImperiumCards: [],
  };
}

export function createInitialPlayerState(leader: Leader, color: PlayerColor): PlayerState {
  const playerState: PlayerState = {
    leader: leader,
    color: color,
    numAgents: 2,
    mentatInPlay: 0,
    swordmasterInPlay: 0,
    highCouncilSeat: 0,
    persuasionScore: 0,
    agentLocations: [],
    locationFlags: [],
    deck: createStartingDeck(leader),
    hand: [],
    discard: [],
    trash: [],
    intrigueCardList: [],
    influenceMap: createEmptyInfluenceMap(),
    allianceMap: createEmptyInfluenceMap(),
    resources: createInitialResourceMap(),
    soldiersInGarrison: 3,
    soldiersInBattlefield: 0,
    victoryPointCount: 0
  }
  return leader.gameStartEffect(playerState);
}

function createStartingDeck(leader: Leader): ImperiumCard[] {
  return [
    getConvincingArgumentCard(),
    getConvincingArgumentCard(),
    getDaggerCard(),
    getDaggerCard(),
    getDuneTheDesertPlanetCard(),
    getDuneTheDesertPlanetCard(),
    getDiplomacyCard(),
    getReconnaissanceCard(),
    getSeekAlliesCard(),
    createSignetRingCard(leader)
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
  const resourceMap = new Map<Resource, number>();
  resourceMap.set("spice", 0);
  resourceMap.set("solari", 0);
  resourceMap.set("water", 0);
  return resourceMap;
}

export function createInitialResourceMap(): Map<Resource, number> {
  const resourceMap = new Map<Resource, number>();
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
