import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { CreateShelterDto } from './dto/create-shelter.dto';
import { UpdateShelterDto } from './dto/update-shelter.dto';

@Controller('shelter')
export class ShelterController {
  constructor(private readonly shelterService: ShelterService) {}

  @Post()
  create(@Body() createShelterDto: CreateShelterDto) {
    return this.shelterService.create(createShelterDto);
  }

  @Get()
  findAll() {
    return this.shelterService.findAll();
  }

}
