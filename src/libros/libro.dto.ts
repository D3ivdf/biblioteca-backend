import { ApiProperty } from "@nestjs/swagger";

export class LibroDTO {
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly titulo: string;

    @ApiProperty()
    readonly autor: string;

    @ApiProperty()
    readonly genero: string;

    @ApiProperty()
    readonly fecha: string;

    @ApiProperty()
    readonly paginas: number;

    constructor(id: string, titulo: string, autor: string, genero: string, fecha: string, paginas: number) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.fecha = fecha;
        this.paginas = paginas;
    }
}