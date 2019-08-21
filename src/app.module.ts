import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from './core/config/config.module';
import { LogModule } from './core/log/log.module';
import { MailModule } from './core/mail/mail.module';
import { RoutingModule } from './core/routing/routing.module';
import { ValidationModule } from './core/validation/validation.module';
import { TemplateModule } from './modules/template/template.module';
import { ContractModule } from './modules/contract/contract.module';
import { SigningModule } from './modules/signing/signing.module';
import { CollaborationModule } from './modules/collaboration/collaboration.module';
import { CacheModule } from './core/cache/cache.module';
import { FilesystemModule } from './core/filesystem/filesystem.module';

@Module({
  imports: [TemplateModule, ContractModule, CollaborationModule, AuthModule, DatabaseModule, ConfigModule, LogModule, MailModule, RoutingModule, ValidationModule, SigningModule, CacheModule, FilesystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
