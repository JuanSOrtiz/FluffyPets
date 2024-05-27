import { Module } from '@nestjs/common';
import { AdoptionCommentaryService } from './adoption_commentary.service';
import { AdoptionCommentaryController } from './adoption_commentary.controller';
import { AdoptionCommentary } from './entities/adoption_commentary.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionService } from 'src/adoption/adoption.service';
import { AdoptionModule } from 'src/adoption/adoption.module';
import { PetModule } from 'src/pet/pet.module';
import { UserModule } from 'src/user/user.module';
import { BreedModule } from 'src/breed/breed.module';
import { SpecieModule } from 'src/specie/specie.module';
import { ShelterModule } from 'src/shelter/shelter.module';
import { GenderModule } from 'src/gender/gender.module';
import { AdoptionStatusModule } from 'src/adoption_status/adoption_status.module';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionCommentary]), AdoptionModule, PetModule, UserModule, BreedModule, SpecieModule, ShelterModule, GenderModule, AdoptionStatusModule],
  controllers: [AdoptionCommentaryController],
  providers: [AdoptionCommentaryService, AdoptionService],
  exports: [TypeOrmModule, AdoptionCommentaryService]
})
export class AdoptionCommentaryModule {}
