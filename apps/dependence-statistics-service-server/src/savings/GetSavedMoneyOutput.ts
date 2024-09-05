import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("GetSavedMoneyOutputObject")
class GetSavedMoneyOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    amountSaved!: number;

    @Field(() => Date)
    @Type(() => Date)
    startDate!: Date;
}

export { GetSavedMoneyOutput as GetSavedMoneyOutput };