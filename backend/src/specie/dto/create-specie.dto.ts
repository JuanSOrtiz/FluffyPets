import { IsString, MinLength } from "class-validator";

export class CreateSpecieDto {
    @IsString()
    @MinLength(1)
    name: string
}
