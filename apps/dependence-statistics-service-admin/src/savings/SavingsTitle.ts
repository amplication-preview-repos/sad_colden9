import { Savings as TSavings } from "../api/savings/Savings";

export const SAVINGS_TITLE_FIELD = "id";

export const SavingsTitle = (record: TSavings): string => {
  return record.id?.toString() || String(record.id);
};
