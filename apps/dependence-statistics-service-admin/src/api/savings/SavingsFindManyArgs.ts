import { SavingsWhereInput } from "./SavingsWhereInput";
import { SavingsOrderByInput } from "./SavingsOrderByInput";

export type SavingsFindManyArgs = {
  where?: SavingsWhereInput;
  orderBy?: Array<SavingsOrderByInput>;
  skip?: number;
  take?: number;
};
