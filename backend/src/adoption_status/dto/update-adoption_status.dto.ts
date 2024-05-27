import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptionStatusDto } from './create-adoption_status.dto';

export class UpdateAdoptionStatusDto extends PartialType(CreateAdoptionStatusDto) {}
