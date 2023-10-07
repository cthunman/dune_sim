import { fullLocationList } from '../models/locations';
import BoardLocationComponent from './BoardLocationComponent';

const Board = () => {
  return (
    <div className="board">
      {fullLocationList.map((location, index) => (
        <BoardLocationComponent key={index} location={location} />
      ))}
    </div>
  );
};

export default Board;
