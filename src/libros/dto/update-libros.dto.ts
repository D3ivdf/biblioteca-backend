import { PartialType } from '@nestjs/mapped-types';
import { CreateLibrosDto } from './create-libros.dto';

export class UpdateLibrosDto extends PartialType(CreateLibrosDto) {}
