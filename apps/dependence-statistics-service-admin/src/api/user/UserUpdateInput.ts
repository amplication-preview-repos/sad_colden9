import { InputJsonValue } from "../../types";
import { SavingsUpdateManyWithoutUsersInput } from "./SavingsUpdateManyWithoutUsersInput";
import { SpendingUpdateManyWithoutUsersInput } from "./SpendingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  savingsItems?: SavingsUpdateManyWithoutUsersInput;
  spendings?: SpendingUpdateManyWithoutUsersInput;
  username?: string;
};
