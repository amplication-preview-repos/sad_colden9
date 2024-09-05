import { Device } from "../device/Device";
import { User } from "../user/User";

export type Spending = {
  createdAt: Date;
  dailySpent: number | null;
  device?: Device | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
