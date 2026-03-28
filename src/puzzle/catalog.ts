import catalog from "../../public/catalog.json";

export const { puzzles, puzzleIds, version } = catalog;

export interface PuzzleDataMap {
  [id: string]: PuzzleData;
}

export interface PuzzleData {
  name: string;
  description: string;
  objective: string;
  collection: string;
  unfinished?: boolean;
}

export const puzzleDataMap: Readonly<PuzzleDataMap> = puzzles;
