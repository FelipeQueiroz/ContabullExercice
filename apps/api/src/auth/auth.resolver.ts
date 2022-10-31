import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from 'src/user/user.model';
import { AuthModel } from './auth.model';
import { AuthService } from './auth.service';

@Resolver(() => AuthModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => AuthModel)
  async login(
    @Args('password') password: string,
    @Args('email') email: string,
  ): Promise<{ access_token: string }> {
    return this.authService.login({
      email,
      password,
    });
  }

  @Query((returns) => UserModel)
  async me(@Args('access_token') access_token: string): Promise<UserModel> {
    return this.authService.verify(access_token);
  }
}
