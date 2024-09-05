import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SavingsListRelationFilter } from "../savings/SavingsListRelationFilter";
import { SpendingListRelationFilter } from "../spending/SpendingListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  savingsItems?: SavingsListRelationFilter;
  spendings?: SpendingListRelationFilter;
  username?: StringFilter;
};
