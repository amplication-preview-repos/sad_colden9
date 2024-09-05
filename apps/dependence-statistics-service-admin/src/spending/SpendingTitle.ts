import { Spending as TSpending } from "../api/spending/Spending";

export const SPENDING_TITLE_FIELD = "id";

export const SpendingTitle = (record: TSpending): string => {
  return record.id?.toString() || String(record.id);
};
