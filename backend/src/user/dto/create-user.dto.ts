import { IsDate, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    birth_date: Date;
    gender: string;
}
