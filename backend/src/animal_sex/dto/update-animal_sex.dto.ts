import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalSexDto } from './create-animal_sex.dto';

export class UpdateAnimalSexDto extends PartialType(CreateAnimalSexDto) {}
