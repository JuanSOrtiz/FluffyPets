import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AdoptionCommentaryService } from './adoption_commentary.service';
import { CreateAdoptionCommentaryDto } from './dto/create-adoption_commentary.dto';
import { UpdateAdoptionCommentaryDto } from './dto/update-adoption_commentary.dto';

@Controller('adoption-commentary')
export class AdoptionCommentaryController {
  constructor(private readonly adoptionCommentaryService: AdoptionCommentaryService) {}

  @Post()
  create(@Body() createAdoptionCommentaryDto: CreateAdoptionCommentaryDto) {
    return this.adoptionCommentaryService.create(createAdoptionCommentaryDto);
  }

  @Get()
  findAll() {
    return this.adoptionCommentaryService.findAll();
  }

  @Get('adoption/:adoptionId') // Ajuste aquí, 'adoption' -> 'adoptionId'
  async findByAdoption(@Param('adoptionId') adoptionId: number) { // Ajuste aquí, 'adoption' -> 'adoptionId'
    return this.adoptionCommentaryService.findByAdoption(adoptionId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adoptionCommentaryService.remove(+id);
  }
}
