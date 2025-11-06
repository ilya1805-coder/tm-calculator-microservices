import { Controller, Get } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { Class } from './interfaces/class.interface';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get()
  async getAll(): Promise<Class[]> {
    return this.classesService.findAll();
  }
}
