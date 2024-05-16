import { IsBoolean, IsDate, IsDateString, IsEnum, IsString } from "class-validator";
import { AdoptionStatus } from "../interfaces/adoption-status.enum";

export class CreateAdoptionDto {
    @IsString()
    user: string;

    @IsString()
    pet: string;

    @IsDateString()
    adoption_date: Date;
    
    @IsEnum(AdoptionStatus)
    adoption_status: AdoptionStatus;
}
