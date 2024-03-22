import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import {LibroDTO} from "./libro.dto";

@Controller('libros')
export class LibrosController {
    libros: LibroDTO[] = [];

    @Get()
    getAllLibros(): LibroDTO[] {
        return this.libros;
    }

    @Get(':id')
    getLibroById(@Param('id') id: string): LibroDTO {
        const libro =this.libros.find(libro => libro.id === id);
        return libro;
    }   

    @Post()
    newLibro(@Body() libro: LibroDTO): LibroDTO {
        const newLibro = new LibroDTO(libro.id, libro.titulo, libro.autor, libro.genero, libro.fecha, libro.paginas);
        this.libros = [...this.libros, newLibro];
        return libro;
    }

    @Put(':id')
    updateLibro(@Param('id') id: string, @Body() libro: LibroDTO): LibroDTO {
        this.libros = this.libros.filter(libro => libro.id !== id);
        this.libros = [...this.libros, this.newLibro(libro)];
        return libro;
    }

    @Delete(':id')
    deleteLibro(@Param('id') id: string): void {
        this.libros = this.libros.filter(libro => libro.id !== id);
    }
}