import { Injectable } from '@nestjs/common';
import { CreateShelterDto } from './dto/create-shelter.dto';
import { UpdateShelterDto } from './dto/update-shelter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shelter } from './entities/shelter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShelterService {

  constructor(
    @InjectRepository(Shelter)
    private readonly shelterRepository: Repository<Shelter>
  ){}
  async create(createShelterDto: CreateShelterDto) {
    const shelter = this.shelterRepository.create(createShelterDto)
    return await this.shelterRepository.save(shelter);
  }

  async findAll() {
    return await this.shelterRepository.find();
  }

}
