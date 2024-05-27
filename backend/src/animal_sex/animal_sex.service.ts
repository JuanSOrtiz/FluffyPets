import { Injectable } from '@nestjs/common';
import { CreateAnimalSexDto } from './dto/create-animal_sex.dto';
import { UpdateAnimalSexDto } from './dto/update-animal_sex.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalSex } from './entities/animal_sex.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalSexService {

  constructor(
    @InjectRepository(AnimalSex)
    private readonly animalSexRepository: Repository <AnimalSex>
  ){}
  
  async create(createAnimalSexDto: CreateAnimalSexDto) {
    const animalSex = this.animalSexRepository.create(createAnimalSexDto)
    return await this.animalSexRepository.save(animalSex);
  }

  async findAll() {
    return await this.animalSexRepository.find()
  }


  async remove(id: number) {
    return await this.animalSexRepository.delete({id})
  }
}
