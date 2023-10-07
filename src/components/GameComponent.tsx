import React, { useState } from 'react';
import { createInitialGameState, createInitialPlayerState, getAvailableLocations } from '../models/util';
import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from '../models/leaders';
import Player from './PlayerComponent';
import Board from './BoardComponent';
import { fullLocationList } from '../models/locations';

function GameComponent() {
  const p1 = createInitialPlayerState(earlThorvald, "red");
  const p2 = createInitialPlayerState(glossuRabban, "blue");
  const p3 = createInitialPlayerState(paulAtreides, "green");
  const p4 = createInitialPlayerState(ilbanRichese, "tan");
  const initialGameState = createInitialGameState([p1, p2, p3, p4]);
  const [game, setGame] = useState({
    numPlayers: 4,
    stateHistory: [initialGameState],
    currentGameState: initialGameState,
  });
  const playersComponents: React.ReactNode[] = [];
  game.currentGameState.playerMap.forEach((playerState, playerId) => {
    const isCurrent = playerId === game.currentGameState.currentPlayer;
    playersComponents.push(
      <Player key={playerId} playerState={playerState} isCurrent={isCurrent} />
    );
  });

  const currentPlayerState = game.currentGameState.playerMap.get(game.currentGameState.currentPlayer);
  if (!currentPlayerState) {
    throw new Error("Invalid current player id");
  }

  // Assume top card (last in array) is the one being considered for play
  const currentCard = currentPlayerState.hand[currentPlayerState.hand.length - 1];
  if (!currentCard) {
    throw new Error("Current player has no cards in hand");
  }

  // Use the getAvailableLocations function
  const availableLocations = getAvailableLocations(game.currentGameState, fullLocationList, currentCard);
  console.log(availableLocations);

  return (
    <>
      <Board fullLocationList={availableLocations} />
      <div className="players-container">
        {Array.from(game.currentGameState.playerMap).map(([playerId, playerState]) => (
          <Player
            key={playerId}
            playerState={playerState}
            isCurrent={playerId === game.currentGameState.currentPlayer}
          />
        ))}
      </div>
      <Board fullLocationList={fullLocationList} />
    </>
  );
}

export default GameComponent;
