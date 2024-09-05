import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpendingUpdateInput = {
  dailySpent?: number | null;
  device?: DeviceWhereUniqueInput | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
