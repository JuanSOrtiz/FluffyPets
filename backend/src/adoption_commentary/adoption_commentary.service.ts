import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdoptionCommentaryDto } from './dto/create-adoption_commentary.dto';
import { UpdateAdoptionCommentaryDto } from './dto/update-adoption_commentary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdoptionCommentary } from './entities/adoption_commentary.entity';
import { Repository } from 'typeorm';
import { Adoption } from 'src/adoption/entities/adoption.entity';

@Injectable()
export class AdoptionCommentaryService {
  constructor(
    @InjectRepository(AdoptionCommentary)
    private readonly adoptionCommentaryRepository: Repository <AdoptionCommentary>,

    @InjectRepository(Adoption)
    private readonly adoptionRepository: Repository <Adoption>,

  ){}
  async create(createAdoptionCommentaryDto: CreateAdoptionCommentaryDto) {

    const adoption = await this.adoptionRepository.findOneBy({
      id: createAdoptionCommentaryDto.adoption
    })

    if(!adoption){
      throw new BadRequestException('Adoption not found')
    }

    const adoptionCommentary = this.adoptionCommentaryRepository.create({
      description: createAdoptionCommentaryDto.description,
      adoption
  
    });

    return await this.adoptionCommentaryRepository.save(adoptionCommentary)
   
    
  }

  async findAll(){
    return await this.adoptionCommentaryRepository.find();
  }

  async findByAdoption(adoptionId: number): Promise<AdoptionCommentary[]> {
    return await this.adoptionCommentaryRepository.find({
      where: { adoption: { id: adoptionId } },
      relations: ['adoption'],
    });
  }

  async findByUser(userEmail: string): Promise<Adoption[]> {
    return await this.adoptionRepository.find({
      where: { user: { email: userEmail } }, // Filtrar por correo electrónico del usuario
      relations: ['pet', 'user', 'adoption_status'],
    });
  }

  async remove(id: number) {
    return await this.adoptionCommentaryRepository.delete({id});
  }
}
