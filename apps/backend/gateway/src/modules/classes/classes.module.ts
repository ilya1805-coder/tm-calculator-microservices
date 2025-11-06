import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLASSES_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.CLASSES_SERVICE_NAME,
          port: process.env.CLASSES_SERVICE_PORT
            ? parseInt(process.env.CLASSES_SERVICE_PORT)
            : 3000,
        },
      },
    ]),
  ],
  controllers: [],
  providers: [ClassesResolver, ClassesService],
})
export class ClassesModule {}
