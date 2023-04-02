import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Public } from '../auth/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}