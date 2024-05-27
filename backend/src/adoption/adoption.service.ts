import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Adoption } from './entities/adoption.entity';
import { Repository } from 'typeorm';
import { Pet } from 'src/pet/entities/pet.entity';
import { User } from 'src/user/entities/user.entity';
import { AdoptionStatus } from 'src/adoption_status/entities/adoption_status.entity';
import { AdoptionCommentary } from 'src/adoption_commentary/entities/adoption_commentary.entity';

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,

    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(AdoptionStatus)
    private readonly adoptionStatusRepository: Repository<AdoptionStatus>,

  ){}
  async create(createAdoptionDto: CreateAdoptionDto) {

    const pet = await this.petRepository.findOneBy({
      name: createAdoptionDto.pet
    })

    const user = await this.userRepository.findOneBy({
      email: createAdoptionDto.user
    })

    const adoption_status = await this.adoptionStatusRepository.findOneBy({
      name: createAdoptionDto.adoption_status
    })


    if(!pet){
      throw new BadRequestException('Pet not found')
    }

    if(!user){
      throw new BadRequestException('User not found')
    }

    if(!adoption_status){
      throw new BadRequestException('Adoption Status not found')
    }


    const adoption = this.adoptionRepository.create({
      adoption_date: createAdoptionDto.adoption_date,
      pet,
      user,
      adoption_status,
  
    });

    return await this.adoptionRepository.save(adoption) //await this.adoptionRepository.save(adoption);
  }

  async findAll() {
    return await this.adoptionRepository.find();
  }

  async findOne(id: number) {
    return await this.adoptionRepository.findOneBy({id});
  }

  async update(id: number, updateAdoptionDto: UpdateAdoptionDto) {
    return `This action updates a #${id} adoption`;
  }

  async remove(id: number) {
    return await this.adoptionRepository.delete({id});
  }
}
