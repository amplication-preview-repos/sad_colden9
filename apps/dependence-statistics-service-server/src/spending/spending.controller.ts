import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpendingService } from "./spending.service";
import { SpendingControllerBase } from "./base/spending.controller.base";

@swagger.ApiTags("spendings")
@common.Controller("spendings")
export class SpendingController extends SpendingControllerBase {
  constructor(
    protected readonly service: SpendingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
