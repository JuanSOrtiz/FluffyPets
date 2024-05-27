import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { Breed } from 'src/breed/entities/breed.entity';
import { Specie } from 'src/specie/entities/specie.entity';
import { Shelter } from 'src/shelter/entities/shelter.entity';
import { AnimalSex } from 'src/animal_sex/entities/animal_sex.entity';

@Injectable()
export class PetService {

  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,

    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,

    @InjectRepository(Specie)
    private specieRepository: Repository<Specie>,

    @InjectRepository(Shelter)
    private shelterRepository: Repository<Shelter>,

    @InjectRepository(AnimalSex)
    private animalSexRepository: Repository<AnimalSex>,

  ){}

  async create(createPetDto: CreatePetDto) {
    const breed = await this.breedRepository.findOneBy({
      name: createPetDto.breed
    })

    const specie = await this.specieRepository.findOneBy({
      name: createPetDto.specie
    })

    const shelter = await this.shelterRepository.findOneBy({
      name: createPetDto.shelter
    })

    const animal_sex = await this.animalSexRepository.findOneBy({
      name: createPetDto.animal_sex
    })

    if(!breed){
      throw new BadRequestException('Breed not found')
    }

    if(!specie){
      throw new BadRequestException('Specie not found')
    }

    if(!shelter){
      throw new BadRequestException('Shelter not found')
    }

    if(!animal_sex){
      throw new BadRequestException('Animal sex not found')
    }

    const pet= this.petRepository.create({
      name: createPetDto.name,
      birth_date: createPetDto.birth_date,
      image_url: createPetDto.image_url,
      state: createPetDto.state,
      breed,
      specie,
      shelter,
      animal_sex
    })
    return await this.petRepository.save(pet);
  }

  async findAll() {
    return await this.petRepository.find();
  }

  async findOne(id: number) {
    return await this.petRepository.findOneBy({id});
  }

  async findBySpecie(specieId: number): Promise<Pet[]> {
    return await this.petRepository.find({
      where: { specie: { id: specieId } },
      relations: ['breed', 'specie', 'shelter'],
    });
  }
  async findByState(state: boolean): Promise<Pet[]> {
    return await this.petRepository.find({ where: { state } });
  }

  async findBySpecieAndState(specieId: number, state: boolean): Promise<Pet[]> {
    return await this.petRepository.find({
      where: { specie: { id: specieId }, state },
      relations: ['breed', 'specie', 'shelter'],
    });
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    const pet = await this.petRepository.findOneBy({id})

    if (!pet){
      throw new BadRequestException('Pet not found')
    }

    let breed;
    let specie;
    let shelter;
    let animal_sex;

    if(updatePetDto.breed){
      breed = await this.breedRepository.findOneBy({
        name: updatePetDto.breed
      })

      if(!breed){
        throw new BadRequestException('Breed not found')
      }
    }

    if(updatePetDto.specie){
      specie = await this.specieRepository.findOneBy({
        name: updatePetDto.specie
      })

      if(!specie){
        throw new BadRequestException('Specie not found')
      }
    }

    if(updatePetDto.shelter){
      shelter = await this.shelterRepository.findOneBy({
        name: updatePetDto.shelter
      })

      if(!shelter){
        throw new BadRequestException('Shelter not found')
      }
    }
    
    if(updatePetDto.animal_sex){
      animal_sex = await this.animalSexRepository.findOneBy({
        name: updatePetDto.animal_sex
      })

      if(!animal_sex){
        throw new BadRequestException('Animal sex not found')
      }
    }
    return await this.petRepository.save({
      ...pet,
      ...updatePetDto,
      breed,
      specie,
      shelter,
      animal_sex
    })
  }

  async remove(id: number) {
    return await this.petRepository.delete({id});
  }
}
