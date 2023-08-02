import { fremenFactionType, createEmptyInfluenceMap } from "./factions";
import { earlThorvald, letoAtreides } from "./leaders";
import { BoardLocation, GameState, PlayerState, Resource, createEmptyResourceMap, createInitialGameState } from "./types";
import _ from 'lodash';

// Sample initial game setup
const boardLocation: BoardLocation = {
    name: "Arrakeen",
    resourceCost: new Map<Resource, number>([
        ["spice", 2]
    ]),
    locationType: fremenFactionType,
};

const player1: PlayerState = {
    seatNumber: 1,
    leader: earlThorvald,
    numAgents: 2,
    agentLocations: [],
    deck: [],
    hand: [],
    discard: [],
    trash: [],
    intrigueCardList: [],
    influenceMap: createEmptyInfluenceMap(),
    allianceMap: createEmptyInfluenceMap(),
    resources: createEmptyResourceMap(),
    soldiersInGarrison: 3,
    soldiersInBattlefield: 0,
    victoryPointCount: 0
}

console.log(boardLocation);
console.log(player1);

const initialState: GameState = createInitialGameState([player1]);
console.log(initialState);

console.log("Current Player");
console.log(initialState.playerMap.get(initialState.currentPlayer));

export function cloneAndModifyGameState(gameState: GameState): GameState {
    // Clone the playerMap
    const clonedPlayerMap = _.cloneDeep(gameState.playerMap);
    // const clonedPlayerMap = new Map(gameState.playerMap);

    // Create the cloned GameState
    let clonedGameState: GameState = {
        currentPlayer: gameState.currentPlayer,
        playerMap: clonedPlayerMap
    };
    const player = gameState.playerMap.get(0);
    let playerCopy = clonedPlayerMap.get(0);
    if (playerCopy && player) {
        playerCopy.leader = letoAtreides;
        console.log("player == playerCopy");
        console.log(player == playerCopy);
        console.log("player.leader");
        console.log(player.leader);
        console.log("playerCopy.leader");
        console.log(playerCopy.leader);
    } else {
        console.log("Wtf?");
    }

    // Apply your changes to the clonedGameState here
    // This is just an example. Replace it with your own logic.
    if (clonedGameState.playerMap.size > 0) {
        clonedGameState.currentPlayer = 2;
    }


    return clonedGameState;
}

const nextState = cloneAndModifyGameState(initialState)

// console.log("next state");
// console.log(nextState.currentPlayer);
// console.log(initialState.currentPlayer);
