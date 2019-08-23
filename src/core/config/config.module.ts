import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
// import { ConfigModule as NestConfigModule} from 'nestjs-config';
// import * as path from 'path';

@Module({
  // imports: [
  //   ConfigService
  // ],
  // exports: [
  //   ConfigService
  // ]
})
export class ConfigModule {
  // static forRoot(appService){
  //   console.log(appService);
  //   return this;
  // }
}
