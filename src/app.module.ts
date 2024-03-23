import { Module } from '@nestjs/common';
//import { ConfigModule } from '@nestjs/config';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { LibroModule } from './libros/libro.module';

@Module({
  imports: [
    LibroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
