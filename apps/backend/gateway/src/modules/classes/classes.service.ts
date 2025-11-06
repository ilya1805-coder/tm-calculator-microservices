import { Inject, Injectable } from '@nestjs/common';
import { Class } from './models/class.model';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class ClassesService {
  constructor(@Inject('CLASSES_SERVICE') private client: ClientProxy) {}

  findAll(): Observable<Class[]> {
    const pattern = { cmd: 'getAll' };
    return this.client.send(pattern, []);
  }
}
