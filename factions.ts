import { Faction, LocationType } from "./types";

export const fremenFaction: Faction = {
    name: "Fremen"
};
export const fremenFactionType: LocationType = fremenFaction;

export const beneGesseritFaction: Faction = {
    name: "Bene Gesserit"
};
export const beneGesseritFactionType: LocationType = beneGesseritFaction;

export const guildFaction: Faction = {
    name: "Guild"
};
export const guildFactionType: LocationType = guildFaction;

export const emperorFaction: Faction = {
    name: "Emperor"
};
export const emperorFactionType: LocationType = emperorFaction;

// Generate empty faction map.
const factions = [fremenFaction, beneGesseritFaction, guildFaction, emperorFaction];
export function createEmptyInfluenceMap(): Map<Faction, number> {
    const influenceMap = new Map<Faction, number>();

    for (const faction of factions) {
        influenceMap.set(faction, 0);
    }

    return influenceMap;
}