import { Module } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterController } from './shelter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shelter } from './entities/shelter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shelter])],
  controllers: [ShelterController],
  providers: [ShelterService],
  exports: [TypeOrmModule],
})
export class ShelterModule {}
