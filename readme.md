# Dune Sim

Steps to create a new game:
- Choose number of players
- Choose placement of each player at the table
- Choose a leader for each player
- Create initial state for each player

Steps to play a single player's agent turn
- Choose which card to play
- Choose where to send agent
- Choose which intrigue cards to play
- Create list of GameEffects caused by the card, agent location, and intrigue cards.
- Apply GameEffects and check if the game state is legal. (Player has enough resources, target location is not already taken, etc.)

Steps to play a single player's reveal turn
- Choose which intrigue cards to play
- Create list of GameEffects from reveal cards and intrigue cards
- Apply GameEffects
- Tally up persuasion score
- Tally up strength

Steps to play a full round of turns
- Start with player who has the button. Button player chooses to play an agent turn or reveal turn.
- Resolve player's turn
- Advance to next player and repeat.
- Track player's who have already played a reveal turn. Skip any who have until all have played reveal turn.

Steps to resolve combat
- Starting with button player, give each player the option to play combat intrigue cards.
- Each time a player plays a combat intrigue card, apply the GameEffects immediately.
- Once each player has passed consecutively, award combard rewards to winners of the battle.

Maker Step
- Each maker square with no agent on it gets a bonus spice added.

Recall phase
- Check if anyone has more than 10 victory points. If they do, trigger endgame.
- If no one has won yet, continue recall.
- Mentat returns to its space.
- Agents return to players.
- Button moves to next player.

