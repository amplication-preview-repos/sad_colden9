import { InputJsonValue } from "../../types";
import { SavingsCreateNestedManyWithoutUsersInput } from "./SavingsCreateNestedManyWithoutUsersInput";
import { SpendingCreateNestedManyWithoutUsersInput } from "./SpendingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  savingsItems?: SavingsCreateNestedManyWithoutUsersInput;
  spendings?: SpendingCreateNestedManyWithoutUsersInput;
  username: string;
};
