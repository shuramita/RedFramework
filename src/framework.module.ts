import { Module } from '@nestjs/common';
// import { DatabaseModule } from './core/database/database.module';
// import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from './core/config/config.module';
// import { LogModule } from './core/log/log.module';
// import { MailModule } from './core/mail/mail.module';
// import { RoutingModule } from './core/routing/routing.module';
// import { ValidationModule } from './core/validation/validation.module';
// import { TemplateModule } from './modules/template/template.module';
// import { ContractModule } from './modules/contract/contract.module';
// import { SigningModule } from './modules/signing/signing.module';
// import { CollaborationModule } from './modules/collaboration/collaboration.module';
// import { CacheModule } from './core/cache/cache.module';
// import { FilesystemModule } from './core/filesystem/filesystem.module';
import { ConfigService } from './core/config/config.service';

import { DynamicModule } from '@nestjs/common';
import { DatabaseModule } from './core/database/database.module';


@Module({
    
})
export class FrameworkModule {
    static boot(appService: any){
        console.log(appService.getAppPath());
        return [
            FrameworkModule.loadConfiguration(appService),
            FrameworkModule.loadDatabase()
        ];
    }
    static loadConfiguration(appService: any): DynamicModule{
        console.log('FrameworkModule::loadConfiguration',appService.getAppPath());
        return ConfigModule.forRoot(appService);        
    }
    static loadDatabase(){
        return DatabaseModule;
    }
}
