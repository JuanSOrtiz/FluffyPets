import { IsDate, IsOptional, IsString, MinLength } from "class-validator"

export class CreatePetDto {

    @MinLength(2)
    @IsString()
    name: string

    @IsString()
    specie: string

    @IsString()
    breed: string

    @IsDate()
    birth_date: Date

    @IsString()
    @IsOptional()
    image_url?: string

    @IsString()
    shelter: string

}
