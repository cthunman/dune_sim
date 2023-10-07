import React from 'react';
import { BoardLocation } from '../models/types';

interface BoardLocationProps {
  location: BoardLocation;
}

const BoardLocationComponent: React.FC<BoardLocationProps> = ({ location }) => {
  return (
    <div className={`board-location ${location.locationType}`}>
      <h3>{location.name}</h3>
      <p>Type: {location.locationType}</p>
      
      {/* {Array.from(location.effect.choices.keys()).map((choiceKey, index) => (
        <button key={index} onClick={() => location.effect.choices.get(choiceKey)!()}>
          {choiceKey}
        </button>
      ))} */}
    </div>
  );
};


export default BoardLocationComponent;
