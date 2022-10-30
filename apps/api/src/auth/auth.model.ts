import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class AuthModel {
  @Field()
  access_token: string;
}

@InputType()
export class LoginUserInput {
  @Field(() => String, { description: 'email of the user' })
  email: string;
  @Field(() => String, { description: 'password of the user' })
  password: string;
}
