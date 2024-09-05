/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Device } from "./Device";
import { DeviceCountArgs } from "./DeviceCountArgs";
import { DeviceFindManyArgs } from "./DeviceFindManyArgs";
import { DeviceFindUniqueArgs } from "./DeviceFindUniqueArgs";
import { CreateDeviceArgs } from "./CreateDeviceArgs";
import { UpdateDeviceArgs } from "./UpdateDeviceArgs";
import { DeleteDeviceArgs } from "./DeleteDeviceArgs";
import { SpendingFindManyArgs } from "../../spending/base/SpendingFindManyArgs";
import { Spending } from "../../spending/base/Spending";
import { DeviceSelectInput } from "../DeviceSelectInput";
import { DeviceService } from "../device.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Device)
export class DeviceResolverBase {
  constructor(
    protected readonly service: DeviceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "read",
    possession: "any",
  })
  async _devicesMeta(
    @graphql.Args() args: DeviceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Device])
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "read",
    possession: "any",
  })
  async devices(@graphql.Args() args: DeviceFindManyArgs): Promise<Device[]> {
    return this.service.devices(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Device, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "read",
    possession: "own",
  })
  async device(
    @graphql.Args() args: DeviceFindUniqueArgs
  ): Promise<Device | null> {
    const result = await this.service.device(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Device)
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "create",
    possession: "any",
  })
  async createDevice(@graphql.Args() args: CreateDeviceArgs): Promise<Device> {
    return await this.service.createDevice({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Device)
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "update",
    possession: "any",
  })
  async updateDevice(
    @graphql.Args() args: UpdateDeviceArgs
  ): Promise<Device | null> {
    try {
      return await this.service.updateDevice({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Device)
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "delete",
    possession: "any",
  })
  async deleteDevice(
    @graphql.Args() args: DeleteDeviceArgs
  ): Promise<Device | null> {
    try {
      return await this.service.deleteDevice(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Spending], { name: "spendings" })
  @nestAccessControl.UseRoles({
    resource: "Spending",
    action: "read",
    possession: "any",
  })
  async findSpendings(
    @graphql.Parent() parent: Device,
    @graphql.Args() args: SpendingFindManyArgs
  ): Promise<Spending[]> {
    const results = await this.service.findSpendings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => String)
  async SelectDevice(
    @graphql.Args()
    args: DeviceSelectInput
  ): Promise<string> {
    return this.service.SelectDevice(args);
  }
}
