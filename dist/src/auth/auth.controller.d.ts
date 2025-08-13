import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto, res: Response): Promise<{
        message: string;
        user: {
            sub: string;
            email: string;
        };
        access_token: string;
    }>;
    logout(req: any, res: Response): Promise<{
        message: string;
    }>;
    getProfile(req: any): {
        sub: any;
        email: any;
    };
}
