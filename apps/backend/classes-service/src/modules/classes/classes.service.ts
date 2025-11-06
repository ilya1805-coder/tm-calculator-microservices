import { Injectable } from '@nestjs/common';
import { Class } from './interfaces/class.interface';

@Injectable()
export class ClassesService {
  getAll(): Class[] {
    return [
      {
        classId: 1,
        description: '111111',
      },
      {
        classId: 2,
        description: '222222',
      },
      {
        classId: 3,
        description: '333333',
      },
    ];
  }
}
