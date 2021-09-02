import { Request, Response } from 'express';
import {sampleDao} from '../dao/sampleDao';
import { CustomLogger } from '../config/Logger'
let sample = new sampleDao();

export class sampleService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into sampleService.ts: GpCreate')
     const  sampleData = req.body;
     sample.GpCreate(sampleData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from sampleService.ts: GpCreate')
         callback(response);
         });
    }


}