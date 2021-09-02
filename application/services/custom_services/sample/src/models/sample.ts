
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const sampleSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: String,
   Email: String
})

const sampleModel = mongoose.model('sample', sampleSchema, 'sample');
export default sampleModel;
