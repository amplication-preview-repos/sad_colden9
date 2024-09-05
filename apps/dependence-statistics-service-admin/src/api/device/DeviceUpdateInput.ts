import { SpendingUpdateManyWithoutDevicesInput } from "./SpendingUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  dailyCost?: number | null;
  name?: string | null;
  spendings?: SpendingUpdateManyWithoutDevicesInput;
};
