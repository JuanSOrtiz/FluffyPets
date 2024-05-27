import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(+id);
  }

  @Get('species/:specieId')
  findBySpecie(@Param('specieId') specieId: string) {
    return this.petService.findBySpecie(+specieId);
  }

  @Get('state/:state')
  findByState(@Param('state') state: boolean) {
    return this.petService.findByState(state);
  }

  @Get('species/:specieId/state/:state')
  findBySpecieAndState(@Param('specieId') specieId: number, @Param('state') state: boolean) {
    return this.petService.findBySpecieAndState(specieId, state);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(+id);
  }
}
