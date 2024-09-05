import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SavingsCreateInput = {
  amountSaved?: number | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
