import { Module, Inject } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Sequelize } from 'sequelize-typescript';

@Module({
})
export class DatabaseModule {

  static forRoot(){
    return {
      module: DatabaseModule,
      providers:[
        {
          provide: 'CONNECTION',
          useFactory: async (config: ConfigService) => {
            console.log('DatabaseModule databaseProviders: config.database.name', config.get('database.name'))
            const sequelize = new Sequelize(
              config.get('database.name'),
              config.get('database.user'),
              config.get('database.password'),{
              dialect: 'mssql',
              host: config.get('database.host'),
              dialectOptions: {
                options: {
                  encrypt: true,
                }
              }
            });
            await sequelize.sync();
            return sequelize;
          },
          inject:[ConfigService],
        }
      ]      
    }
  }
}
