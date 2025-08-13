import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        access_token: string;
        user: {
            sub: string;
            email: string;
        };
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    getUserWithToken(userId: string): Promise<{
        id: string;
        email: string;
        token: string;
    }>;
}
