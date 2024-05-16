import { Module } from '@nestjs/common';
import { BreedService } from './breed.service';
import { BreedController } from './breed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Breed])],
  controllers: [BreedController],
  providers: [BreedService],
  exports: [TypeOrmModule, BreedService]
})
export class BreedModule {}
