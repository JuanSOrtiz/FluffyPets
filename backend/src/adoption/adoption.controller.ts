import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';

@Controller('adoption')
export class AdoptionController {
  constructor(private readonly adoptionService: AdoptionService) {}

  @Post()
  create(@Body() createAdoptionDto: CreateAdoptionDto) {
    return this.adoptionService.create(createAdoptionDto);
  }

  @Get()
  findAll() {
    return this.adoptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adoptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdoptionDto: UpdateAdoptionDto) {
    return this.adoptionService.update(+id, updateAdoptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adoptionService.remove(+id);
  }
}
