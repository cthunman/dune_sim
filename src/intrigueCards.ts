import { GameEffect, IntrigueCard, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer } from "./util";

export const windfallIntrigueCard: IntrigueCard = {
  cardTypes: ["plot"],
  effect: {
    choices: new Map<string, GameEffect>([
      ["Gain 2 Solari", applyResourceChangesToCurrentPlayer(
        new Map<Resource, number>([
          ["solari", 2]
        ])
      )]
    ])
  }
};

export const waterPeddlersUnionIntrigueCard: IntrigueCard = {
  cardTypes: ["plot"],
  effect: {
    choices: new Map<string, GameEffect>([
      ["Gain 1 Water", applyResourceChangesToCurrentPlayer(
        new Map<Resource, number>([
          ["water", 1]
        ])
      )]
    ])
  }
};