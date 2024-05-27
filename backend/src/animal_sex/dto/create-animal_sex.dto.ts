import { IsString, MinLength } from "class-validator";

export class CreateAnimalSexDto {
    @IsString()
    @MinLength(1)
    name: string
}
