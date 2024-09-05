import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpendingModuleBase } from "./base/spending.module.base";
import { SpendingService } from "./spending.service";
import { SpendingController } from "./spending.controller";
import { SpendingResolver } from "./spending.resolver";

@Module({
  imports: [SpendingModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpendingController],
  providers: [SpendingService, SpendingResolver],
  exports: [SpendingService],
})
export class SpendingModule {}
