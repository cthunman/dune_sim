// import { fullLocationList } from '../models/locations';
// import BoardLocationComponent from './BoardLocationComponent';

// const Board = () => {
//   return (
//     <div className="board">
//       {fullLocationList.map((location, index) => (
//         <BoardLocationComponent key={index} location={location} />
//       ))}
//     </div>
//   );
// };

// export default Board;

import React from 'react';
import BoardLocationComponent from './BoardLocationComponent';
import { BoardLocation } from '../models/types';

type BoardProps = {
  fullLocationList: BoardLocation[];
};

const Board: React.FC<BoardProps> = ({ fullLocationList }) => {
  return (
    <div className="board">
      {fullLocationList.map((location, index) => (
        <BoardLocationComponent key={index} location={location} />
      ))}
    </div>
  );
};

export default Board;
