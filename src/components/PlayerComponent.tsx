import { ImperiumCard, PlayerState } from '../models/types';
import CardComponent from './CardComponent';

type PlayerProps = {
  playerState: PlayerState;
  isCurrent: boolean;
  onCardClick: (card: ImperiumCard) => void;
  selectedCard: ImperiumCard | null;
};

function Player({ playerState, isCurrent, onCardClick, selectedCard }: PlayerProps) {
  return (
    <div className={`player ${isCurrent ? 'player-highlight' : ''}`} style={{ backgroundColor: playerState.color }}>
      <h2 className="player-name">{playerState.leader.name}</h2>
      <p><strong>Agents:</strong> {playerState.numAgents}</p>
      <p><strong>Mentat In Play:</strong> {playerState.mentatInPlay}</p>
      <p><strong>Swordmaster In Play:</strong> {playerState.swordmasterInPlay}</p>
      <p><strong>Soldiers in Garrison:</strong> {playerState.soldiersInGarrison}</p>
      <p><strong>Soldiers in Battlefield:</strong> {playerState.soldiersInBattlefield}</p>
      <p><strong>Victory Points:</strong> {playerState.victoryPointCount}</p>

      <div>
        <h3>Resources:</h3>
        {Array.from(playerState.resources.entries()).map(([resource, count]) => (
          <p key={resource}><strong>{resource}:</strong> {count}</p>
        ))}
      </div>

      <div>
        <h3>Influence Map:</h3>
        {Array.from(playerState.influenceMap.entries()).map(([faction, value]) => (
          <p key={faction}><strong>{faction}:</strong> {value}</p>
        ))}
      </div>

      <div>
        <h3>Alliances:</h3>
        {Array.from(playerState.allianceMap.entries()).map(([faction, value]) => (
          <p key={faction}><strong>{faction}:</strong> {value}</p>
        ))}
      </div>

      <div className="player-cards">
        {playerState.hand.map((card, index) => (
          <div
            onClick={() => onCardClick(card)}
            key={index}
            className={card === selectedCard ? 'selected-card' : ''}
          >
            <CardComponent card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Player;
