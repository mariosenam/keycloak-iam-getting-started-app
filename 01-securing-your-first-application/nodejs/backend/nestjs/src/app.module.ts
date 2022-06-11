import { Module } from '@nestjs/common';
import {
  KeycloakConnectModule,
  PolicyEnforcementMode,
  TokenValidation
} from 'nest-keycloak-connect';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    KeycloakConnectModule.register(`./keycloak.json`, {
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule {}
