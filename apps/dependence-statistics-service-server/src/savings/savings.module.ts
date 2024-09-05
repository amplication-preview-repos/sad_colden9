import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SavingsModuleBase } from "./base/savings.module.base";
import { SavingsService } from "./savings.service";
import { SavingsController } from "./savings.controller";
import { SavingsResolver } from "./savings.resolver";

@Module({
  imports: [SavingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SavingsController],
  providers: [SavingsService, SavingsResolver],
  exports: [SavingsService],
})
export class SavingsModule {}
