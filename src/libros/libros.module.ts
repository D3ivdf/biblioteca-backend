import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';

@Module({
    imports: [],
    controllers: [LibrosController],
    providers: [],
})
export class LibrosModule {}
