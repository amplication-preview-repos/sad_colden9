import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SpendingWhereInput = {
  dailySpent?: FloatNullableFilter;
  device?: DeviceWhereUniqueInput;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
