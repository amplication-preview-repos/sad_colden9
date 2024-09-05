/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SpendingService } from "../spending.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SpendingCreateInput } from "./SpendingCreateInput";
import { Spending } from "./Spending";
import { SpendingFindManyArgs } from "./SpendingFindManyArgs";
import { SpendingWhereUniqueInput } from "./SpendingWhereUniqueInput";
import { SpendingUpdateInput } from "./SpendingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SpendingControllerBase {
  constructor(
    protected readonly service: SpendingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Spending })
  @nestAccessControl.UseRoles({
    resource: "Spending",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSpending(
    @common.Body() data: SpendingCreateInput
  ): Promise<Spending> {
    return await this.service.createSpending({
      data: {
        ...data,

        device: data.device
          ? {
              connect: data.device,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dailySpent: true,

        device: {
          select: {
            id: true,
          },
        },

        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Spending] })
  @ApiNestedQuery(SpendingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Spending",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async spendings(@common.Req() request: Request): Promise<Spending[]> {
    const args = plainToClass(SpendingFindManyArgs, request.query);
    return this.service.spendings({
      ...args,
      select: {
        createdAt: true,
        dailySpent: true,

        device: {
          select: {
            id: true,
          },
        },

        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Spending })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Spending",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async spending(
    @common.Param() params: SpendingWhereUniqueInput
  ): Promise<Spending | null> {
    const result = await this.service.spending({
      where: params,
      select: {
        createdAt: true,
        dailySpent: true,

        device: {
          select: {
            id: true,
          },
        },

        id: true,
        startDate: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Spending })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Spending",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSpending(
    @common.Param() params: SpendingWhereUniqueInput,
    @common.Body() data: SpendingUpdateInput
  ): Promise<Spending | null> {
    try {
      return await this.service.updateSpending({
        where: params,
        data: {
          ...data,

          device: data.device
            ? {
                connect: data.device,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dailySpent: true,

          device: {
            select: {
              id: true,
            },
          },

          id: true,
          startDate: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Spending })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Spending",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSpending(
    @common.Param() params: SpendingWhereUniqueInput
  ): Promise<Spending | null> {
    try {
      return await this.service.deleteSpending({
        where: params,
        select: {
          createdAt: true,
          dailySpent: true,

          device: {
            select: {
              id: true,
            },
          },

          id: true,
          startDate: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
