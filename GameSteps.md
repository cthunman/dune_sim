Instantiate new game:
- Players connect 
- Player seating is determined by random number generator
- Player in seat 1 chooses leader first and then 2, 3, 4
- If any player chose Baron Harkonnen, they choose 2 factions
- Starting resources are allocated to players
- Button is given to player based on random number generator
- First round begins...

Round steps:
- Conflict card flips over
- Button player goes first
- Build data structure to track which players have played a reveal turn... maybe:
{
    Player1: False,
    Player2: False,
    Player3: False,
    Player4: False,
}
- Iterate through player turns. Once all of them have played a reveal turn initiate combat phase
- Combat phase begins with button player
- Iterate through each player. Each has the option to play combat cards.
- After "pass" action by all players consecutively, end the combat phase
- Update player resources/victory points/location flags based on conflict card
- Maker phase: add spice to spice locations where no players sent agents during the round.

Player turn steps:
- Player selects Agent / Reveal

Player agent turn
- Player selects Imperium / Intrigue card
- 
