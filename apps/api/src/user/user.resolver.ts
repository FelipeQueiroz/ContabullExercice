import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation((returns) => UserModel)
  async createUser(
    @Args('password') password: string,
    @Args('email') email: string,
    @Args('name', { nullable: true }) name: string,
    @Args('birthDay', { nullable: true }) birthDay: string,
    @Args('city', { nullable: true }) city: string,
    @Args('favPet', { nullable: true }) favPet: string,
    @Args('favTech', { nullable: true }) favTech: string,
    @Args('married', { nullable: true }) married: boolean,
  ): Promise<UserModel> {
    return this.userService.createUser({
      email,
      password,
      name,
      birthDay,
      city,
      favPet,
      favTech,
      married,
    });
  }

  @Mutation((returns) => UserModel)
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @Args('password', { nullable: true }) password: string,
    @Args('oldEmail') oldEmail: string,
    @Args('newEmail', { nullable: true }) newEmail: string,
    @Args('name', { nullable: true }) name: string,
    @Args('birthDay', { nullable: true }) birthDay: string,
    @Args('city', { nullable: true }) city: string,
    @Args('favPet', { nullable: true }) favPet: string,
    @Args('favTech', { nullable: true }) favTech: string,
    @Args('married', { nullable: true }) married: boolean,
  ): Promise<UserModel> {
    return this.userService.updateUser({
      data: {
        email: newEmail,
        password,
        name,
        birthDay,
        city,
        favPet,
        favTech,
        married,
      },
      where: {
        email: oldEmail,
      },
    });
  }
}
