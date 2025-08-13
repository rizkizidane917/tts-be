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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const conversion_service_1 = require("./conversion.service");
const ConversionDto_1 = require("./dto/ConversionDto");
let ConversionController = class ConversionController {
    constructor(conversionService) {
        this.conversionService = conversionService;
    }
    create(req, dto) {
        return this.conversionService.create(req.user.sub, dto);
    }
    findAllByUser(req) {
        return this.conversionService.findAllByUser(req.user.sub);
    }
    delete(req, id) {
        return this.conversionService.deleteById(req.user.sub, id);
    }
};
exports.ConversionController = ConversionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ConversionDto_1.ConversionDto]),
    __metadata("design:returntype", void 0)
], ConversionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConversionController.prototype, "findAllByUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ConversionController.prototype, "delete", null);
exports.ConversionController = ConversionController = __decorate([
    (0, common_1.Controller)('conversion'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [conversion_service_1.ConversionService])
], ConversionController);
//# sourceMappingURL=conversion.controller.js.map