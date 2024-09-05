import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SpendingListRelationFilter } from "../spending/SpendingListRelationFilter";

export type DeviceWhereInput = {
  dailyCost?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  spendings?: SpendingListRelationFilter;
};
