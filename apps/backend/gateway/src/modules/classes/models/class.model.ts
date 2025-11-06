import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Class {
  @Field(() => Int)
  classId: number;

  @Field()
  description: string;
}
