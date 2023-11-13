import React, { useState } from 'react';
import { createInitialGameState, createInitialPlayerState, getAvailableLocations } from '../models/util';
import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from '../models/leaders';
import Player from './PlayerComponent';
import Board from './BoardComponent';
import { fullLocationList } from '../models/locations';
import { ImperiumCard } from '../models/types';

function GameComponent() {
  const p1 = createInitialPlayerState(earlThorvald, "red");
  const p2 = createInitialPlayerState(glossuRabban, "blue");
  const p3 = createInitialPlayerState(paulAtreides, "green");
  const p4 = createInitialPlayerState(ilbanRichese, "tan");
  const initialGameState = createInitialGameState([p1, p2, p3, p4]);
  const [selectedCard, setSelectedCard] = useState<ImperiumCard | null>(null);
  const [game, _setGame] = useState({
    numPlayers: 4,
    stateHistory: [initialGameState],
    currentGameState: initialGameState,
  });
  const playersComponents: React.ReactNode[] = [];
  game.currentGameState.playerMap.forEach((playerState, playerId) => {
    const isCurrent = playerId === game.currentGameState.currentPlayer;
    playersComponents.push(
      <Player key={playerId} playerState={playerState} isCurrent={isCurrent} onCardClick={function (card: ImperiumCard): void {
        throw new Error('Function not implemented.');
      }} />
    );
  });

  const currentPlayerState = game.currentGameState.playerMap.get(game.currentGameState.currentPlayer);
  if (!currentPlayerState) {
    throw new Error("Invalid current player id");
  }

  const currentCardBasedOnGameState = currentPlayerState.hand[currentPlayerState.hand.length - 1];
  if (!currentCardBasedOnGameState) {
    throw new Error("Current player has no cards in hand");
  }

  const availableLocations = getAvailableLocations(game.currentGameState, fullLocationList, selectedCard || currentCardBasedOnGameState, []);
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
            onCardClick={(card) => setSelectedCard(card)}
            selectedCard={selectedCard}
          />
        ))}
      </div>
      <Board fullLocationList={fullLocationList} />
    </>
  );
}

export default GameComponent;
