import { Module } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Module({
  imports:[],
  providers: [
    // {
    //   provide: 'SEQUELIZE',
    //   useFactory: async (config: ConfigService) => {
    //     console.log('databaseProviders:', config);
    //     // const sequelize = new Sequelize({
    //     //   dialect: 'mssql',
    //     //   host: 'localhost',
    //     //   port: 3306,
    //     //   username: 'root',
    //     //   password: 'password',
    //     //   database: 'nest',
    //     // });
    //     // await sequelize.sync();
    //     // return sequelize;
    //   },
    //   inject:[ConfigService]
    // }
  ],
  exports: [],
  
})
export class DatabaseModule {}