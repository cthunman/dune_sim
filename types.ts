type Game = {
    numPlayers: Number;
    stateHistory: GameState[];
}

type GameState = {
    currentPlayer: Number;
    playerMap: Map<Number, Player>;
}

type Action = {
    actionType: string;
    actionValue: number;
};
type AgentAction = {
    cardPlayed: Card;
    targetLocation: Location;
    decisionMap: Map<Choice, Boolean>;
}

type Leader = {
    name: String;
    leaderEffect: GameEffect;
    signetRingEffect: GameEffect;
};

type GameEffect = {
    gameEffect: (game: GameState) => GameState;

    // currentPlayer: Player;
    // gain resource
    // spend resource
    // gain soldiers
    // deploy soldiers from barracks to battlefield
}

type Choice = {
    // This may need to be enhanced for "trash any card".
    choice: (decision: Boolean) => GameEffect;
}

type Card = {
    name: String;
    destinationTypes: LocationType[]
    agentEffect: GameEffect;
    revealEffect: GameEffect;
    persuasionScore: Number;
};

type Faction = {
    name: String;
};

type Resource = "spice" | "solari" | "water";
type BoardColor = "yellow" | "purple" | "green";

type LocationType = Faction | BoardColor;

type IntrigueCard = {
    cardType: "plot" | "combat" | "endgame";
    effects: () => Action[];
}

type Player = {
    seatNumber: Number;
    leader: Leader;
    numAgents: Number;
    agentLocations: BoardLocation[];
    deck: Card[];
    hand: Card[];
    discard: Card[];
    trash: Card[];
    intrigueCardList: IntrigueCard[];
    influenceMap: Map<Faction, Number>;
    allianceMap: Map<Faction, Number>;
    resources: Map<Resource, Number>;
    soldiersInGarrison: Number;
    soldiersInBattlefield: Number;
    victoryPointCount: Number;
}

type BoardLocation = {
    name: String;
    resourceCost: Map<Resource, Number>;
    locationType: LocationType;
    effect: () => Action[];
};

const fremenFaction: Faction = {
    name: "Fremen"
};
const fremenFactionType: LocationType = fremenFaction;

const boardLocation: BoardLocation = {
    name: "Arrakeen",
    resourceCost: new Map<Resource, Number>([
        ["spice", 2]
    ]),
    locationType: fremenFactionType,
    effect: () => [
        {
            actionType: "Gain Spice",
            actionValue: 5
        }
    ]
};

console.log(boardLocation);
console.log(boardLocation.effect());