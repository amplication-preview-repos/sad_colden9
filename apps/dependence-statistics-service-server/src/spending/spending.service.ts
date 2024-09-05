import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpendingServiceBase } from "./base/spending.service.base";

@Injectable()
export class SpendingService extends SpendingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
