import { Libro } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LibroService {
  constructor(private prisma: PrismaService) {}

  async getAllLibros(): Promise<Libro[]> {
    return this.prisma.libro.findMany();
  }

  async getLibroById(id: number): Promise<Libro> {
    return this.prisma.libro.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createLibro(data: Libro): Promise<Libro> {
    const fecha = new Date(data.fecha);
    return this.prisma.libro.create({
      data: {
        ...data,
        fecha,  // Usa el objeto Date para 'fecha'
      },
    });
  }

  async updateLibro(id: number, data: Libro): Promise<Libro> {
    return this.prisma.libro.update({
      where: {
        id: id,
      },
      data,
    });
  }

  async deleteLibro(id: number): Promise<Libro> {
    return this.prisma.libro.delete({
      where: {
        id: id,
      },
    });
  }
}