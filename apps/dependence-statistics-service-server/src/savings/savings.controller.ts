import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SavingsService } from "./savings.service";
import { SavingsControllerBase } from "./base/savings.controller.base";

@swagger.ApiTags("savings")
@common.Controller("savings")
export class SavingsController extends SavingsControllerBase {
  constructor(
    protected readonly service: SavingsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
