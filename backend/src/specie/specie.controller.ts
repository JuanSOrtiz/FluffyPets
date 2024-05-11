import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpecieService } from './specie.service';
import { CreateSpecieDto } from './dto/create-specie.dto';

@Controller('specie')
export class SpecieController {
  constructor(private readonly specieService: SpecieService) {}

  @Post()
  create(@Body() createSpecieDto: CreateSpecieDto) {
    return this.specieService.create(createSpecieDto);
  }

  @Get()
  findAll() {
    return this.specieService.findAll();
  }

  
}
