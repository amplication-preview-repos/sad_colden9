import { JsonValue } from "type-fest";
import { Savings } from "../savings/Savings";
import { Spending } from "../spending/Spending";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  savingsItems?: Array<Savings>;
  spendings?: Array<Spending>;
  updatedAt: Date;
  username: string;
};
