import { Module } from '@nestjs/common';
import { SpecieService } from './specie.service';
import { SpecieController } from './specie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specie } from './entities/specie.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Specie])],
  controllers: [SpecieController],
  providers: [SpecieService],
  exports: [TypeOrmModule]
})
export class SpecieModule {}
