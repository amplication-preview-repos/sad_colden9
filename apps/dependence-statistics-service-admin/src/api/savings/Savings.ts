import { User } from "../user/User";

export type Savings = {
  amountSaved: number | null;
  createdAt: Date;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
