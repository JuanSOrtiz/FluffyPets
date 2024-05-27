import { IsBoolean, IsDate, IsDateString, IsEnum, IsString } from "class-validator";


export class CreateAdoptionDto {
    @IsString()
    user: string;

    @IsString()
    pet: string;

    @IsDateString()
    adoption_date: Date;
    
    @IsString()
    adoption_status: string;

}
