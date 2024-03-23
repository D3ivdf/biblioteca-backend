import {
    NotFoundException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { LibroService } from './libro.service';
  import { Libro } from '@prisma/client';
  
  @Controller('libros')
  export class LibroController {
    constructor(private readonly libroService: LibroService) {}
  
    @Get()
    async getAllLibros() {
      return this.libroService.getAllLibros();
    }
  
    @Get(':id')
    async getLibroById(@Param('id') id: string) {
      const libroFound = await this.libroService.getLibroById(Number(id));
      if (!libroFound) throw new NotFoundException('Libro does not exist');
      return libroFound;
    }
  
    @Post()
    async createLibro(@Body() data: Libro) {
      return this.libroService.createLibro(data);
    }
  
    @Put(':id')
    async updateLibro(@Param('id') id: string, @Body() data: Libro) {
      try {
        return await this.libroService.updateLibro(Number(id), data);
      } catch (error) {
        throw new NotFoundException('Libro does not exist');
      }
    }
  
    @Delete(':id')
    async deleteLibro(@Param('id') id: string) {
      try {
        return await this.libroService.deleteLibro(Number(id));
      } catch (error) {
        console.error(error);
        throw new NotFoundException('Libro does not exist');
      }
    }
  }