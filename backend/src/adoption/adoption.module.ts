import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adoption } from './entities/adoption.entity';
import { PetModule } from 'src/pet/pet.module';
import { UserModule } from 'src/user/user.module';
import { PetService } from 'src/pet/pet.service';
import { UserService } from 'src/user/user.service';
import { BreedModule } from 'src/breed/breed.module';
import { SpecieModule } from 'src/specie/specie.module';
import { ShelterModule } from 'src/shelter/shelter.module';
import { GenderModule } from 'src/gender/gender.module';
import { AdoptionStatusModule } from 'src/adoption_status/adoption_status.module';
import { AdoptionStatusService } from 'src/adoption_status/adoption_status.service';
import { AdoptionCommentaryModule } from 'src/adoption_commentary/adoption_commentary.module';
import { AdoptionCommentaryService } from 'src/adoption_commentary/adoption_commentary.service';
import { AnimalSexModule } from 'src/animal_sex/animal_sex.module';



@Module({
  imports:[TypeOrmModule.forFeature([Adoption]),PetModule, UserModule, BreedModule, SpecieModule, ShelterModule, AnimalSexModule, GenderModule, AdoptionStatusModule],
  controllers: [AdoptionController],
  providers: [AdoptionService, PetService, UserService, AdoptionStatusService],
  exports:[TypeOrmModule, AdoptionService]
})
export class AdoptionModule {}
