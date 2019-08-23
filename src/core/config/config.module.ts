import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';    
// import { ConfigModule as NestConfigModule} from 'nestjs-config';
// import * as path from 'path';
@Global()
@Module({})
export class ConfigModule {
    static forRoot(appService:any){
      console.log('ConfigModule::forRoot',appService.getAppPath());
        const configProviders = {
            provide: ConfigService,
            useFactory: async () => {
                console.log('useFactory', appService.getAppPath());
                return new ConfigService(appService);        
            }
        };
        return {
            module: ConfigModule,
            providers:[configProviders]
        };
    }
}
