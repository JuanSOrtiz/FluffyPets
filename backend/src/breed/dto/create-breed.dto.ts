import { IsString, MinLength } from "class-validator";

export class CreateBreedDto {
    @IsString()
    @MinLength(1)
    name: string
}
