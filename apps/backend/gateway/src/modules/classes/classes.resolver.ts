import { Query, Resolver } from '@nestjs/graphql';
import { ClassesService } from './classes.service';
import { Class } from './models/class.model';
import { Observable } from 'rxjs';

@Resolver(() => Class)
export class ClassesResolver {
  constructor(private readonly classesService: ClassesService) {}

  @Query(() => [Class])
  classes(): Observable<Class[]> {
    return this.classesService.findAll();
  }
}
