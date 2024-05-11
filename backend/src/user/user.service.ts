import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Gender } from 'src/gender/entities/gender.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Gender) 
    private readonly genderRepository: Repository<Gender>
  ){}
  
  async create(createUserDto: CreateUserDto) {

    const gender = await this.genderRepository.findOneBy({
      name: createUserDto.gender
    })

    if(!gender){
      throw new BadRequestException("Gender not found")
    }

    const user = this.userRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      birth_date: createUserDto.birth_date,
      gender
    })
    return await this.userRepository.save(user);
  }


  async findOneByEmail(email: string) {
    return await this.userRepository.findOneBy({email});
  }

  async remove(id: number) {
    return this.userRepository.delete({id});
  }
}
