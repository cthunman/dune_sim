import { IntrigueCard, Resource } from "./types";
import { applyResourceChangesToCurrentPlayer } from "./util";

export const gainTwoWaterIntrigueCard: IntrigueCard = {
  cardType: "plot",
  effect: applyResourceChangesToCurrentPlayer(
    new Map<Resource, number>([
      ["water", 3]
    ])
  )
};

export const gainThreeSolariIntrigueCard: IntrigueCard = {
  cardType: "plot",
  effect: applyResourceChangesToCurrentPlayer(
    new Map<Resource, number>([
      ["solari", 3]
    ])
  )
};