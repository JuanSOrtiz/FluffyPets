import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { BreedModule } from 'src/breed/breed.module';
import { BreedService } from 'src/breed/breed.service';
import { SpecieModule } from 'src/specie/specie.module';
import { SpecieService } from 'src/specie/specie.service';
import { ShelterModule } from 'src/shelter/shelter.module';
import { ShelterService } from 'src/shelter/shelter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), BreedModule, SpecieModule, ShelterModule],
  controllers: [PetController],
  providers: [PetService, BreedService, SpecieService, ShelterService],
  exports: [TypeOrmModule, PetService]
})
export class PetModule {}
