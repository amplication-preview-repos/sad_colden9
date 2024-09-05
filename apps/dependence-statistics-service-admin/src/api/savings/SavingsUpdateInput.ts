import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SavingsUpdateInput = {
  amountSaved?: number | null;
  startDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
