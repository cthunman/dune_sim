type Leader = {
    name: String;
};

type GameEffect = {
    currentPlayer: Player;
    // gain resource
    // spend resource
    // gain soldiers
    // deploy soldiers from barracks to battlefield

}

type Choice = {

}

type Card = {
    name: String;
    destinationTypes: LocationType[]
};

type Faction = {
    name: String;
};

type Resource = "spice" | "solari" | "water";
type BoardColor = "yellow" | "purple" | "green";

type LocationType = {
    locationType: Faction | BoardColor;
};

type Player = {
    seat_number: Number;
    leader: Leader;
    numAgents: Number;
    cardList: Card[];
    influenceMap: Map<Faction, Number>;
    resources: Map<Resource, Number>;
};

type BoardLocation = {
    name: String;
    resourceCost: Map<Resource, Number>;
    locationType: LocationType;
    sideEffect: () => Action[];
};

type Action = {
    actionType: string;
    actionValue: number;
};

const fremenFaction: Faction = {
    name: "Fremen"
};
const fremenFactionType: LocationType = {
    locationType: fremenFaction
};

const boardLocation: BoardLocation = {
    name: "Arrakeen",
    resourceCost: new Map<Resource, Number>([
        ["spice", 2]
    ]),
    locationType: fremenFactionType,
    sideEffect: () => [
        {
            actionType: "Gain Spice",
            actionValue: 5
        }
    ]
};

console.log(boardLocation);
console.log(boardLocation.sideEffect());