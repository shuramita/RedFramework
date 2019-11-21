import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';

export const databaseProviders = [
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
  },
];
@Injectable()
export class DatabaseProvider {}
