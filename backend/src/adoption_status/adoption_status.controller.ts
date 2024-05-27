import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdoptionStatusService } from './adoption_status.service';
import { CreateAdoptionStatusDto } from './dto/create-adoption_status.dto';
import { UpdateAdoptionStatusDto } from './dto/update-adoption_status.dto';

@Controller('adoption-status')
export class AdoptionStatusController {
  constructor(private readonly adoptionStatusService: AdoptionStatusService) {}

  @Post()
  create(@Body() createAdoptionStatusDto: CreateAdoptionStatusDto) {
    return this.adoptionStatusService.create(createAdoptionStatusDto);
  }

  @Get()
  findAll() {
    return this.adoptionStatusService.findAll();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adoptionStatusService.remove(+id);
  }
}
