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
import { Savings } from "./Savings";
import { SavingsCountArgs } from "./SavingsCountArgs";
import { SavingsFindManyArgs } from "./SavingsFindManyArgs";
import { SavingsFindUniqueArgs } from "./SavingsFindUniqueArgs";
import { CreateSavingsArgs } from "./CreateSavingsArgs";
import { UpdateSavingsArgs } from "./UpdateSavingsArgs";
import { DeleteSavingsArgs } from "./DeleteSavingsArgs";
import { User } from "../../user/base/User";
import { SavingsService } from "../savings.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Savings)
export class SavingsResolverBase {
  constructor(
    protected readonly service: SavingsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Savings",
    action: "read",
    possession: "any",
  })
  async _savingsItemsMeta(
    @graphql.Args() args: SavingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Savings])
  @nestAccessControl.UseRoles({
    resource: "Savings",
    action: "read",
    possession: "any",
  })
  async savingsItems(
    @graphql.Args() args: SavingsFindManyArgs
  ): Promise<Savings[]> {
    return this.service.savingsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Savings, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Savings",
    action: "read",
    possession: "own",
  })
  async savings(
    @graphql.Args() args: SavingsFindUniqueArgs
  ): Promise<Savings | null> {
    const result = await this.service.savings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Savings)
  @nestAccessControl.UseRoles({
    resource: "Savings",
    action: "create",
    possession: "any",
  })
  async createSavings(
    @graphql.Args() args: CreateSavingsArgs
  ): Promise<Savings> {
    return await this.service.createSavings({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Savings)
  @nestAccessControl.UseRoles({
    resource: "Savings",
    action: "update",
    possession: "any",
  })
  async updateSavings(
    @graphql.Args() args: UpdateSavingsArgs
  ): Promise<Savings | null> {
    try {
      return await this.service.updateSavings({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Savings)
  @nestAccessControl.UseRoles({
    resource: "Savings",
    action: "delete",
    possession: "any",
  })
  async deleteSavings(
    @graphql.Args() args: DeleteSavingsArgs
  ): Promise<Savings | null> {
    try {
      return await this.service.deleteSavings(args);
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
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Savings): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
