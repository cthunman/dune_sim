import { IntrigueCard, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer } from "./util";

export const gainTwoWater: IntrigueCard = {
  cardType: "plot",
  effect: applyResourceChangesToCurrentPlayer(
    new Map<Resource, number>([
      ["water", 2]
    ])
  )
};

export const gainThreeSolari: IntrigueCard = {
  cardType: "plot",
  effect: applyResourceChangesToCurrentPlayer(
    new Map<Resource, number>([
      ["solari", 3]
    ])
  )
};