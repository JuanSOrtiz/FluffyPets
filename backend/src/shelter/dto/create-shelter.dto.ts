import { IsString, MinLength } from "class-validator";
export class CreateShelterDto {
    @IsString()
    @MinLength(1)
    name: string
}

