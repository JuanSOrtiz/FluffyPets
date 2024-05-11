import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gender } from './entities/gender.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenderService {
  constructor(
    @InjectRepository(Gender)
    private readonly genderRepository: Repository<Gender>
  ){}
  async create(createGenderDto: CreateGenderDto) {
    const gender = this.genderRepository.create(createGenderDto);
    return await this.genderRepository.save(gender);
  }

  async findAll() {
    return await this.genderRepository.find();
  }

}
