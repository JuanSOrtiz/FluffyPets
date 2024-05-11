import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from './entities/breed.entity';

@Injectable()
export class BreedService {

  constructor(
    @InjectRepository(Breed)
    private readonly breedRepository: Repository <Breed>
  ){}

  async create(createBreedDto: CreateBreedDto) {
    const breed = this.breedRepository.create(createBreedDto)
    return await this.breedRepository.save(breed);
  }

  async findAll() {
    return await this.breedRepository.find();
  }

}
