import { Module } from '@nestjs/common';
import { AnimalSexService } from './animal_sex.service';
import { AnimalSexController } from './animal_sex.controller';
import { AnimalSex } from './entities/animal_sex.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([AnimalSex])],
  controllers: [AnimalSexController],
  providers: [AnimalSexService],
  exports: [TypeOrmModule, AnimalSexService]
})
export class AnimalSexModule {}
