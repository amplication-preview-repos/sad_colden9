import { SpendingCreateNestedManyWithoutDevicesInput } from "./SpendingCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  dailyCost?: number | null;
  name?: string | null;
  spendings?: SpendingCreateNestedManyWithoutDevicesInput;
};
