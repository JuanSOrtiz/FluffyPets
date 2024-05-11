import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}

    @Post("register")
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }
        
    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
