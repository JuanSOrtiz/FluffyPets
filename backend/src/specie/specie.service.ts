import { Injectable } from '@nestjs/common';
import { CreateSpecieDto } from './dto/create-specie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Specie } from './entities/specie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecieService {

  constructor(
    @InjectRepository(Specie)
    private readonly specieRepository: Repository<Specie>
  ){}

  async create(createSpecieDto: CreateSpecieDto) {
    const specie = this.specieRepository.create(createSpecieDto)
    return await this.specieRepository.save(specie);
  }

  async findAll() {
    return await this.specieRepository.find()
  }

}
