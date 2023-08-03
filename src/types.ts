export type Game = {
    numPlayers: number;
    stateHistory: GameState[];
}

export type GameState = {
    currentPlayer: number;
    playerMap: Map<number, PlayerState>;
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

export type Leader = {
    name: String;
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

export type Card = {
    name: String;
    destinationTypes: LocationType[]
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

// export type BoardColor = "yellow" | "purple" | "green";
export type LocationType = "yellow" | "purple" | "green" | "beneGesserit" | "fremen" | "emperor" | "guild";
export type Faction = {
    name: String;
};

export type IntrigueCard = {
    cardType: "plot" | "combat" | "endgame";
}

export type PlayerState = {
    seatNumber: number;
    leader: Leader;
    numAgents: number;
    agentLocations: BoardLocation[];
    deck: Card[];
    hand: Card[];
    discard: Card[];
    trash: Card[];
    intrigueCardList: IntrigueCard[];
    influenceMap: Map<Faction, number>;
    allianceMap: Map<Faction, number>;
    resources: Map<Resource, number>;
    soldiersInGarrison: number;
    soldiersInBattlefield: number;
    victoryPointCount: number;
}

export type BoardLocation = {
    name: String;
    resourceCost: Map<Resource, number>;
    locationType: LocationType;
};
