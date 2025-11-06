import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [ClassesResolver, ClassesService],
})
export class ClassesModule {}
