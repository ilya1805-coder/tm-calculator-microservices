import { Controller } from '@nestjs/common';
import { Class } from './interfaces/class.interface';
import { ClassesService } from './classes.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesSerice: ClassesService) {}

  @MessagePattern({ cmd: 'getAll' })
  getAll(): Class[] {
    return this.classesSerice.getAll();
  }
}
