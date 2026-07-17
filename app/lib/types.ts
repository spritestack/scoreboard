
export enum Sport {
  bike = 0,
  row = 1,
  ski = 2
}

export interface Result {
  id?: number;
  athlete: string; // name
  time: number; // time in milliseconds
  category: Sport;
  race_date?: string; // date in YYYY-MM-DD format
}