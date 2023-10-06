import React, { useState } from 'react';
import { createInitialGameState, createInitialPlayerState } from '../../util';
import { earlThorvald, glossuRabban, ilbanRichese, paulAtreides } from '../../leaders';
import Player from './Player';

function GameComponent() {
  // Create players
  const p1 = createInitialPlayerState(earlThorvald);
  const p2 = createInitialPlayerState(glossuRabban);
  const p3 = createInitialPlayerState(paulAtreides);
  const p4 = createInitialPlayerState(ilbanRichese);

  // Create initial game state
  const initialGameState = createInitialGameState([p1, p2, p3, p4]);

  // Use the initial game state as the default value for your component's state
  const [game, setGame] = useState({
    numPlayers: 4, 
    stateHistory: [initialGameState],
    currentGameState: initialGameState,
  });

  // const updateGame = (newGameState) => {
  //   setGame(newGameState);
  // };

  const playersComponents: React.ReactNode[] = [];
  
  game.currentGameState.playerMap.forEach((playerState, playerId) => {
    playersComponents.push(
      <Player key={playerId} playerState={playerState} />
    );
  });

  return (
    <div>
      <h1>Game Component</h1>
      {playersComponents}
    </div>
  );
}

export default GameComponent;
