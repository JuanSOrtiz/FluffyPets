import { Module } from '@nestjs/common';
import { AdoptionStatusService } from './adoption_status.service';
import { AdoptionStatusController } from './adoption_status.controller';
import { AdoptionStatus } from './entities/adoption_status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AdoptionStatus])],
  controllers: [AdoptionStatusController],
  providers: [AdoptionStatusService],
  exports: [TypeOrmModule, AdoptionStatusService]
})
export class AdoptionStatusModule {}
