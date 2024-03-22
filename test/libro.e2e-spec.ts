import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LibroDTO } from 'src/libros/libro.dto';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { LibrosController } from '../src/libros/libros.controller';
import { LibrosModule } from '../src/libros/libros.module';
import { before } from 'node:test';
import exp from 'node:constants';
import e from 'express';

describe('LibrosController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule, LibrosModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it('libros Crud', async()=>{
        const server = request(app.getHttpServer());
        
        const currentGetAll = await server.get('/libros').expect(200);
        const currentLibros = currentGetAll.body.length;

        const newLibro: LibroDTO = {
            titulo: 'libro1' // Added the missing 'name' property
            ,
            id: '',
            autor: '',
            genero: '',
            fecha: '',
            paginas: 0
        }
        const newRequest = await server.post('/libros').type('form')
        .send(newLibro).expect(201);
        expect(newRequest.body.titulo).toBe(newLibro.titulo);
        expect(newRequest.body.id).toBe(''+(currentLibros));
        const postNewrequest = await server.get('/libros').expect(200);
        const postNewLibros = postNewrequest.body.length;
        expect(postNewLibros).toBe(currentLibros+1);

        const id = newRequest.body.id;
        const getNewRequest = await server.get(`/libros/${id}`).expect(200);
        expect(getNewRequest.body.id).toBe(id);

        const updateLibro: LibroDTO = {
            id: id,
            titulo: 'libro2',
            autor: 'autor2',
            genero: 'genero2',
            fecha: 'fecha2',
            paginas: 2
        }
        const updateRequest = await server.put(`/libros/${updateLibro.id}`)
        .expect(200).type('form').send(updateLibro);
        expect(updateRequest.body.titulo).toEqual(updateLibro.titulo);

        await server.delete(`/libros/${updateLibro.id}`).expect(200);

        
        const postDeleteAllRequest = await server.get('/libros').expect(200);
        const postDeleteSize = postDeleteAllRequest.body.length;
        expect(postDeleteSize).toBe(currentLibros);
    });

}); // 1