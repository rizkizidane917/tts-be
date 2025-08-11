import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(dto.email, dto.password);

    // Set token in HttpOnly cookie
    res.cookie('jwt', result.access_token, {
      httpOnly: true,
      secure: false, // change to true in production with HTTPS
      sameSite: 'lax',
    });

    // Return user data and token (optional - for localStorage)
    return {
      message: 'Login successful',
      user: result.user,
      access_token: result.access_token,
      // Uncomment if you want to include token in response for localStorage
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() req, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(req.user.sub);

    // Clear cookie
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'lax',
    });

    return { message: 'Logout successful' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req) {
    return {
      sub: req.user.sub,
      email: req.user.email,
      // token: req.user.token
    };
  }
}
