import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Adoption } from './entities/adoption.entity';
import { Repository } from 'typeorm';
import { Pet } from 'src/pet/entities/pet.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AdoptionService {
  constructor(
    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository<Adoption>,

    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  async create(createAdoptionDto: CreateAdoptionDto) {

    const pet = await this.petRepository.findOneBy({
      name: createAdoptionDto.pet
    })

    const user = await this.userRepository.findOneBy({
      email: createAdoptionDto.user
    })

    if(!pet){
      throw new BadRequestException('Pet not found')
    }

    if(!user){
      throw new BadRequestException('User not found')
    }

    const adoption = this.adoptionRepository.create({
      adoption_date: createAdoptionDto.adoption_date,
      adoption_status: createAdoptionDto.adoption_status,
      pet,
      user,
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
