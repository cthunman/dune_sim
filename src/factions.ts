import { Faction } from "./types";

export const fremenFaction: Faction = {
  name: "Fremen"
};

export const beneGesseritFaction: Faction = {
  name: "Bene Gesserit"
};

export const guildFaction: Faction = {
  name: "Guild"
};

export const emperorFaction: Faction = {
  name: "Emperor"
};

// Generate empty faction map.
export const fullFactionList = [fremenFaction, beneGesseritFaction, guildFaction, emperorFaction];
export function createEmptyInfluenceMap(): Map<Faction, number> {
  const influenceMap = new Map<Faction, number>();

  for (const faction of fullFactionList) {
    influenceMap.set(faction, 0);
  }

  return influenceMap;
}