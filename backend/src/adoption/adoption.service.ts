import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
      cellphone_number: createAdoptionDto.cellphone_number,
      address: createAdoptionDto.address,
      neighborhood: createAdoptionDto.neighborhood,
      live_with_quant:createAdoptionDto.live_with_quant,
      own_house:createAdoptionDto.own_house,
      responsibility:createAdoptionDto.responsibility,
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

  async findByUser(userEmail: string): Promise<Adoption[]> {
    return await this.adoptionRepository.find({
      where: { user: { email: userEmail } }, // Filtrar por correo electrónico del usuario
      relations: ['pet', 'user', 'adoption_status'],
    });
  }

  async findByStatus(statusName: string): Promise<Adoption[]> {
    return await this.adoptionRepository.find({
      where: {adoption_status:{name: statusName}},
      relations:['pet', 'user', 'adoption_status']
    })
  }

  

  async update(id: number, updateAdoptionDto: UpdateAdoptionDto) {
    const adoption = await this.adoptionRepository.findOneBy({id})

    if (!adoption){
      throw new BadRequestException('Adoption not found')
    }

    let pet;
    let user;
    let adoption_status;

    if(updateAdoptionDto.pet){
      pet = await this.petRepository.findOneBy({
        name: updateAdoptionDto.pet
      })

      if(!pet){
        throw new BadRequestException('Pet not found')
      }
    }

    if(updateAdoptionDto.user){
      user = await this.userRepository.findOneBy({
        email: updateAdoptionDto.user
      })

      if(!user){
        throw new BadRequestException('User not found')
      }
    }

    if(updateAdoptionDto.adoption_status){
      adoption_status = await this.adoptionStatusRepository.findOneBy({
        name: updateAdoptionDto.adoption_status
      })

      if(!adoption_status){
        throw new BadRequestException('Adoption status not found')
      }
    }

    return await this.adoptionRepository.save({
      ...adoption,
      ...updateAdoptionDto,
      pet,
      user,
      adoption_status

    })

}


  async remove(id: number) {
    return await this.adoptionRepository.delete({id});
  }
}
