import * as mongoose from 'mongoose';
import sampleModel from '../models/sample';
import { CustomLogger } from '../config/Logger'


export class sampleDao {
    private sample = sampleModel;
    constructor() { }
public GpCreate(sampleData, callback){
new CustomLogger().showLogger('info', 'Enter into sampleDao.ts: GpCreate')
let temp = new sampleModel(sampleData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from sampleDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}