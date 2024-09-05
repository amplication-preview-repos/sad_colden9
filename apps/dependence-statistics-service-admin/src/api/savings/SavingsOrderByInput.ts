import { SortOrder } from "../../util/SortOrder";

export type SavingsOrderByInput = {
  amountSaved?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
