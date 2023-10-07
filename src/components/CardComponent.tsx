import React from 'react';
import { ImperiumCard } from '../models/types';

type CardProps = {
  card: ImperiumCard;
};

const CardComponent: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.name}</h3>
      <h4>Destinations</h4>
      <p>{card.destinationTypes.join(', ')}</p>

      <h4>Factions</h4>
      <p>{card.factionAffiliations.join(', ')}</p>

      <h4>Persuasion Score</h4>
      <p>{card.persuasionScore}</p>

      {card.pickupEffect && (
        <>
          <h4>Pickup Effect Choices</h4>
          <ul>
            {Array.from(card.pickupEffect.choices.keys()).map(choiceKey => (
              <li key={choiceKey}>{choiceKey}</li>
            ))}
          </ul>
        </>
      )}
      {/* You might display other card properties here as needed */}
    </div>
  );
};

export default CardComponent;
