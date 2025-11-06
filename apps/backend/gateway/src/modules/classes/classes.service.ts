import { Injectable } from '@nestjs/common';
import { Class } from './interfaces/class.interface';

@Injectable()
export class ClassesService {
  findAll(): Class[] {
    //TODO replace with real data
    return [
      {
        classId: 1,
        description: 'dsad',
      },
      {
        classId: 2,
        description: 'dadsad',
      },
    ];
  }
}
