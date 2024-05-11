import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { GenderModule } from 'src/gender/gender.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), GenderModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule, UserService]
})
export class UserModule {}
