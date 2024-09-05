import { SortOrder } from "../../util/SortOrder";

export type SpendingOrderByInput = {
  createdAt?: SortOrder;
  dailySpent?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
