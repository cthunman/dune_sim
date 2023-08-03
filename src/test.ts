import { createEmptyInfluenceMap } from "./factions";
import { earlThorvald } from "./leaders";
import { GameEffect, GameState, PlayerState, Resource, createEmptyResourceMap, createInitialGameState } from "./types";
import _ from 'lodash';
import { arrakeen } from "./locations";

// Sample initial game setup
const boardLocation = arrakeen

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
};

const initialState: GameState = createInitialGameState([player1]);

export function cloneAndModifyGameState(
    gameState: GameState,
    modifyFunction: GameEffect
): GameState {
    let clonedGameState: GameState = _.cloneDeep(gameState);
    clonedGameState = modifyFunction(clonedGameState)
    return clonedGameState;
}

function incrementResourceForCurrentPlayer(resource: Resource, amount: number) {
    return function (game: GameState): GameState {
        const currentPlayer = game.playerMap.get(game.currentPlayer);
        if (currentPlayer) {
            const currentAmount = currentPlayer.resources.get(resource) || 0;
            currentPlayer.resources.set(resource, currentAmount + amount);
        }
        return game; 
    };
}

const nextState = cloneAndModifyGameState(initialState, incrementResourceForCurrentPlayer("solari", 1));

console.log(initialState);
console.log(nextState);
