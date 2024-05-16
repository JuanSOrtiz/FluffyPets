import { Transform } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

  @IsString()
  gender: string;

  @IsDateString()
  birth_date: Date

}
