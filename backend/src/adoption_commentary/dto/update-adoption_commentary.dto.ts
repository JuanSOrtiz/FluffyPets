import { PartialType } from '@nestjs/mapped-types';
import { CreateAdoptionCommentaryDto } from './create-adoption_commentary.dto';

export class UpdateAdoptionCommentaryDto extends PartialType(CreateAdoptionCommentaryDto) {}
