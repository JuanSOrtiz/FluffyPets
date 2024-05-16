import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptionDto } from './create-adoption.dto';

export class UpdateAdoptionDto extends PartialType(CreateAdoptionDto) {}
