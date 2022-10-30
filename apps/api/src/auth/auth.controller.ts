import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserModel } from 'src/user/user.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Req() req: Request): Promise<{ access_token: string }> {
    return this.authService.login(req.user as UserModel);
  }
}
