import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateAdoptionCommentaryDto {
    @IsString()
    @MinLength(1)
    description: string

    @IsNumber()
    adoption: number
}
