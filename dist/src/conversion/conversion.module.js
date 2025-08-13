"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionModule = void 0;
const common_1 = require("@nestjs/common");
const conversion_controller_1 = require("./conversion.controller");
const conversion_service_1 = require("./conversion.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ConversionModule = class ConversionModule {
};
exports.ConversionModule = ConversionModule;
exports.ConversionModule = ConversionModule = __decorate([
    (0, common_1.Module)({
        controllers: [conversion_controller_1.ConversionController],
        providers: [conversion_service_1.ConversionService, prisma_service_1.PrismaService],
    })
], ConversionModule);
//# sourceMappingURL=conversion.module.js.map