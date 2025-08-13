"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConversionService = class ConversionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        return this.prisma.conversion.create({
            data: {
                ...dto,
                userId,
            },
        });
    }
    async findAllByUser(userId) {
        return this.prisma.conversion.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async deleteById(userId, id) {
        const conversion = await this.prisma.conversion.findUnique({
            where: { id },
        });
        if (!conversion)
            throw new common_1.NotFoundException('Conversion not found');
        if (conversion.userId !== userId)
            throw new common_1.ForbiddenException('Not allowed');
        return this.prisma.conversion.delete({ where: { id } });
    }
};
exports.ConversionService = ConversionService;
exports.ConversionService = ConversionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConversionService);
//# sourceMappingURL=conversion.service.js.map