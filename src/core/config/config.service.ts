import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };
    private configFolder: Array<string>;
    configs:[];
    constructor(appConfig: any) {
        const envPath = `${appConfig.getAppPath()}${path.sep}.env`;
        this.envConfig =  dotenv.parse(envPath);
        this.configFolder = [appConfig.getConfigPath()];
        this.configs = [];
        this.scan();
    }
    add(folder: string) {
        this.configFolder.push(folder);
    }
    async loadConfigFile(filePath:string,key:string){
        this.configs[key] = await import(filePath);
        console.log(this.configs)
    }
    get(key: string,defaultValue?:any): any {
        let [file,name] = key.split('.');
        console.log(file,name);
    }
    async scan(){
        this.configFolder.forEach( (folder)=>{
            console.log(folder);
             fs.readdir(folder, (errors, files) => {
                files.forEach(file=>{
                    if(file.endsWith('config.js')){
                         this.loadConfigFile([folder,file].join(path.sep),file.replace('.config.js',''));       
                    }
                })
            })
        })
    }
}
