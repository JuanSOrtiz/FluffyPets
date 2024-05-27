import { IsBoolean, IsDate, IsDateString, IsEnum, IsNumber, IsString } from "class-validator";


export class CreateAdoptionDto {
    @IsString()
    user: string;

    @IsString()
    pet: string;

    @IsDateString()
    adoption_date: Date;
    
    @IsString()
    adoption_status: string;

    @IsString()
    cellphone_number: string;

    @IsString()
    address: string;

    @IsString()
    neighborhood: string;

    @IsNumber()
    live_with_quant: number;

    @IsBoolean()
    own_house: boolean;

    @IsBoolean()
    responsibility: boolean;

    

}
