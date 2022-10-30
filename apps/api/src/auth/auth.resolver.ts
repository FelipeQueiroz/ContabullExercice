import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserModel } from 'src/user/user.model';
import { AuthModel } from './auth.model';
import { AuthService } from './auth.service';

@Resolver(() => AuthModel)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((returns) => AuthModel)
  async login(
    @Args('password') password: string,
    @Args('email') email: string,
  ): Promise<{ access_token: string }> {
    return this.authService.login({
      email,
      password,
    });
  }
}
