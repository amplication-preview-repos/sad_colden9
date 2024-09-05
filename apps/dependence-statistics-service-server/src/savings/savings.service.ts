import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SavingsServiceBase } from "./base/savings.service.base";

@Injectable()
export class SavingsService extends SavingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
