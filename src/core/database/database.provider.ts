import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (config: ConfigService) => {
      console.log('databaseProviders:',config);
      // const sequelize = new Sequelize({
      //   dialect: 'mssql',
      //   host: 'localhost',
      //   port: 3306,
      //   username: 'root',
      //   password: 'password',
      //   database: 'nest',
      // });
      // await sequelize.sync();
      // return sequelize;
    },
  },
];
@Injectable()
export class DatabaseProvider {}
