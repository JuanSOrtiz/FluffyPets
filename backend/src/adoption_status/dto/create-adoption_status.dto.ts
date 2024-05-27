import { IsString, MinLength } from "class-validator";

export class CreateAdoptionStatusDto {
    @IsString()
    @MinLength(1)
    name: string
}
