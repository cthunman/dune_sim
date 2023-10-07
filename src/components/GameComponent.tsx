import React, { useState } from 'react';
import { createInitialGameState, createInitialPlayerState } from '../models/util';
import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from '../models/leaders';
import Player from './PlayerComponent';
import { GameState } from '../models/types';
import Board from './BoardComponent';

function GameComponent() {
  // Create players
  const p1 = createInitialPlayerState(earlThorvald, "red");
  const p2 = createInitialPlayerState(glossuRabban, "blue");
  const p3 = createInitialPlayerState(paulAtreides, "green");
  const p4 = createInitialPlayerState(ilbanRichese, "tan");

  // Create initial game state
  const initialGameState = createInitialGameState([p1, p2, p3, p4]);

  // Use the initial game state as the default value for your component's state
  const [game, setGame] = useState({
    numPlayers: 4,
    stateHistory: [initialGameState],
    currentGameState: initialGameState,
  });

  // This is garbage
  const updateGame = (newGameState: React.SetStateAction<{ numPlayers: number; stateHistory: GameState[]; currentGameState: GameState; }>) => {
    setGame(newGameState);
  };
  <button onClick={() => updateGame((gameState) => gameState)}></button>

  const playersComponents: React.ReactNode[] = [];

  game.currentGameState.playerMap.forEach((playerState, playerId) => {
    const isCurrent = playerId === game.currentGameState.currentPlayer;
    playersComponents.push(
      <Player key={playerId} playerState={playerState} isCurrent={isCurrent} />
    );
  });

  return (
    <>
      <Board />
      <div className="players-container">
        {Array.from(game.currentGameState.playerMap).map(([playerId, playerState]) => (
          <Player
            key={playerId}
            playerState={playerState}
            isCurrent={playerId === game.currentGameState.currentPlayer}
          />
        ))}
      </div>
    </>
  );
}

export default GameComponent;
