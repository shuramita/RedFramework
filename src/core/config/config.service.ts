import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConfigService {
    private readonly envConfig: any;
    private configFolder: Array<string>;
    configs:[];
    constructor(appService: any) {
        const envPath = `${appService.getSourcePath()}${path.sep}.env`;
        console.log('ConfigService constructor envPath',envPath);
        this.envConfig =  dotenv.config({ path:envPath}).parsed;
        console.log('Enviroment vars',this.envConfig);
        this.configFolder = [appService.getConfigPath()];
        this.configs = [];
        this.scan();
    }
    add(folder: string) {
        this.configFolder.push(folder);
    }
    async loadConfigFile(filePath:string,key:string){
        let {Config} = require(filePath);
        // console.log('loadConfigFile Config',new Config());
        this.configs[key] = new Config();
        console.log('loadConfigFile', this.configs)
    }
    get(key: string, defaultValue?:any): any {
        let [file,name] = key.split('.');
        if(this.configs[file] && this.configs[file][name]) {

            if(typeof this.configs[file][name] == 'string') return this.configs[file][name];

            if(typeof this.configs[file][name] == 'object') {
                if(this.configs[file][name].env && process.env[this.configs[file][name].env]) {
                    return process.env[this.configs[file][name].env];
                }else if(this.configs[file][name].default && !defaultValue) {
                    return this.configs[file][name].default
                }else if(defaultValue) {
                    return defaultValue;
                }
            }
        }
        return null;
    }
    async scan(){
        this.configFolder.forEach( (folder)=>{
            console.log('ConfigService::scan',folder);
            let files =  fs.readdirSync(folder);
            files.forEach(file=>{
                if(file.endsWith('config.js')){
                     this.loadConfigFile([folder,file].join(path.sep),file.replace('.config.js',''));       
                }
            })
        })
    }
}
