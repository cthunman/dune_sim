import { GameState, PlayerState } from "./types";

export function getCurrentPlayer(game: GameState): PlayerState {
  const currentPlayer = game.playerMap.get(game.currentPlayer);
  if (!currentPlayer) {
    throw new Error("Game state invalid.")
  }
  return currentPlayer
}