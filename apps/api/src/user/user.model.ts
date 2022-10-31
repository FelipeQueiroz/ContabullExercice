import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  favPet?: string;

  @Field({ nullable: true })
  favTech?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  city?: string;

  @Field({ nullable: true })
  married?: boolean;

  @Field({ nullable: true })
  birthDay?: string;
}
