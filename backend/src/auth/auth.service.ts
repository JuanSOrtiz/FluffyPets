import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcryptjs from "bcryptjs";
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async register({password, email, name, birth_date, gender}:RegisterDto){
        const user = await this.userService.findOneByEmail(email)
        
        if(user){
            throw new BadRequestException("Email already exists")
        }

        const hashedPassword = await bcryptjs.hash(password,10)

        await this.userService.create({
            name,
            email,
            password: hashedPassword,
            birth_date,
            gender,
        })

        return{
            message: "User created successfully"
        }
    }

    async login({email, password}:LoginDto){
        const user = await this.userService.findOneByEmail(email)

        if(!user){
            throw new UnauthorizedException("Invalid email")
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if(!isPasswordValid){
            throw new UnauthorizedException("Invalid password")
        }

        const payload = {email: user.email};
        const token = await this.jwtService.signAsync(payload)

        return{
            token: token,
            email: user.email
        }
    }
}
