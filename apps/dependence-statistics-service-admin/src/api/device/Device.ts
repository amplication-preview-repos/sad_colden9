import { Spending } from "../spending/Spending";

export type Device = {
  createdAt: Date;
  dailyCost: number | null;
  id: string;
  name: string | null;
  spendings?: Array<Spending>;
  updatedAt: Date;
};
