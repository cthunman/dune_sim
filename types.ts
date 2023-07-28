type Leader = {
    name: String;
}

type Card = {
    name: String;
    destinationTypes: Array<BoardLocation>
}

type Faction = {
    name: String;
}

type BoardColor = {
    color: "yellow" | "purple" | "green";
}

type LocationType = {
    locationType: Faction | BoardColor;
}

type Player = {
    seat_number: Number;
    leader: Leader;
    numAgents: Number;
    cardList: Array<Card>;
    influenceMap: Map<Faction, Number>;
}

type Resource = {
    name: "spice" | "solari" | "water";
}

type BoardLocation = {
    name: String;
    resourceCost: Map<Resource, Number>;
    locationType: LocationType;
}
