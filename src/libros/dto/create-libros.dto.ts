import { Length, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLibrosDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    titulo: string;
    @IsNotEmpty()
    autor: string;
    @IsNotEmpty()
    genero: string;
    @IsNotEmpty()
    fecha: string;
    @IsNumber()
    paginas: number;
}