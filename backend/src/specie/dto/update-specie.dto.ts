import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecieDto } from './create-specie.dto';

export class UpdateSpecieDto extends PartialType(CreateSpecieDto) {}
