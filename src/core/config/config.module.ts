import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({})
export class ConfigModule {
    protected enableLog:boolean = true;
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
            providers:[configProviders],
            exports:[configProviders]
        };
    }
}
