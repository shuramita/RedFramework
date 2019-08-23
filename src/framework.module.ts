import { Module } from '@nestjs/common';
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
import { ConfigService } from './core/config/config.service';

import { DynamicModule } from '@nestjs/common';


@Module({
    
})
export class FrameworkModule {
    static forRoot(appService: any) {
            
    }
    static boot(appService: any){
        // console.log(appService.getAppPath());
        return FrameworkModule.loadConfiguration(appService);
        // return this;
        // return [
        //     FrameworkModule.loadConfiguration(appService)
        // ];
    }
    static loadConfiguration(appService: any){
        const configProviders = {
            provider: ConfigService,
            useFactory: async (appService)=>{
                return new ConfigService(appService);        
            }
        };
        return {
            module: ConfigModule,
            providers:[configProviders]
        };
        
    }
    static loadDatabase(){

    }
}
