import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { AuthModel } from './auth.model';
import { jwtSecret } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string): Promise<UserModel | null> {
    const user = this.userService.user({ email: email });

    if (!user) {
      return null;
    }

    const passwordIsValid = password === (await user).password;
    return passwordIsValid ? user : null;
  }

  async login(
    user: Pick<UserModel, 'password' | 'email'>,
  ): Promise<{ access_token: string }> {
    const payload = {
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verify(token: string): Promise<UserModel> {
    const decoded = this.jwtService.verify(token, { secret: jwtSecret });

    const user = this.userService.user({ email: decoded.email });
    if (!user) {
      throw new Error('Unable to get the user form decoded token');
    }

    return user;
  }
}
