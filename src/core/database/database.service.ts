import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DatabaseService {
    constructor(@Inject('CONNECTION') connection: Sequelize){
        console.log('DatabaseService::constructor');    
    }
}
