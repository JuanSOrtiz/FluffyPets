import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimalSexService } from './animal_sex.service';
import { CreateAnimalSexDto } from './dto/create-animal_sex.dto';
import { UpdateAnimalSexDto } from './dto/update-animal_sex.dto';

@Controller('animal-sex')
export class AnimalSexController {
  constructor(private readonly animalSexService: AnimalSexService) {}

  @Post()
  create(@Body() createAnimalSexDto: CreateAnimalSexDto) {
    return this.animalSexService.create(createAnimalSexDto);
  }

  @Get()
  findAll() {
    return this.animalSexService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalSexService.remove(+id);
  }
}
