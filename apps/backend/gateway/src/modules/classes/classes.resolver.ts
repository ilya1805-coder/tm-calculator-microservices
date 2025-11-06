import { Query, Resolver } from '@nestjs/graphql';
import { ClassesService } from './classes.service';
import { Class } from './models/class.model';

@Resolver(() => Class)
export class ClassesResolver {
  constructor(private readonly classesService: ClassesService) {}

  @Query(() => [Class])
  classes(): Class[] {
    return this.classesService.findAll();
  }
}
