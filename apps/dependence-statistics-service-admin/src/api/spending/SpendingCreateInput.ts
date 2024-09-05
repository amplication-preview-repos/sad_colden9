import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpendingCreateInput = {
  dailySpent?: number | null;
  device?: DeviceWhereUniqueInput | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
