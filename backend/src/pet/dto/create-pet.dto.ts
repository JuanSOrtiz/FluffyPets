import { IsBoolean, IsDate, IsDateString, IsOptional, IsString, MinLength } from "class-validator"

export class CreatePetDto {

    @MinLength(2)
    @IsString()
    name: string

    @IsString()
    specie: string

    @IsString()
    breed: string

    @IsDateString()
    birth_date: Date

    @IsString()
    @IsOptional()
    image_url?: string

    @IsBoolean()
    state: boolean

    @IsString()
    shelter: string

    @IsString()
    animal_sex: string

}
