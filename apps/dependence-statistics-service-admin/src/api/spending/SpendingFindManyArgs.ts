import { SpendingWhereInput } from "./SpendingWhereInput";
import { SpendingOrderByInput } from "./SpendingOrderByInput";

export type SpendingFindManyArgs = {
  where?: SpendingWhereInput;
  orderBy?: Array<SpendingOrderByInput>;
  skip?: number;
  take?: number;
};
