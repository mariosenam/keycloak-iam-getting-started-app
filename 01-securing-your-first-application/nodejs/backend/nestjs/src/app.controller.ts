import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  AuthGuard,
  RoleGuard,
  RoleMatchingMode,
  Roles
} from 'nest-keycloak-connect';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/secured')
  @UseGuards(AuthGuard, RoleGuard)
  @Roles({ roles: ['realm:myrole'], mode: RoleMatchingMode.ANY })
  getSecured(): string {
    return 'Hello secured api';
  }
}
