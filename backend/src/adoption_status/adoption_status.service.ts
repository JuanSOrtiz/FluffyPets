import { Injectable } from '@nestjs/common';
import { CreateAdoptionStatusDto } from './dto/create-adoption_status.dto';
import { UpdateAdoptionStatusDto } from './dto/update-adoption_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdoptionStatus } from './entities/adoption_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdoptionStatusService {
  constructor(
    @InjectRepository(AdoptionStatus)
    private readonly adoptionStatusRepository: Repository <AdoptionStatus>
  ){}
  async create(createAdoptionStatusDto: CreateAdoptionStatusDto) {
    const adoption_status = this.adoptionStatusRepository.create(createAdoptionStatusDto)
    return await this.adoptionStatusRepository.save(adoption_status);
  }

  async findAll() {
    return await this.adoptionStatusRepository.find();
  }


  async remove(id: number) {
    return await this.adoptionStatusRepository.delete({id});
  }
}
