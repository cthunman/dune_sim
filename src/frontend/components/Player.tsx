import React from 'react';
import { PlayerState } from '../../types';

type PlayerProps = {
  playerState: PlayerState;
};

function Player({ playerState }: PlayerProps) {
  return (
    <div>
      <h2>{playerState.leader.name}</h2>
      {/* Other player details can be added here */}
    </div>
  );
}

export default Player;
