// import * as mongoose from "mongoose";
import mongoose from 'mongoose';

// mongoose.createConnection('mongodb://127.0.0.1:27017/Person', {useNewUrlParser: true }) .
// catch(error => (error));

mongoose.connect('mongodb://127.0.0.1:27017/', { dbName: 'Person', useNewUrlParser: true })
  .then( () => {
    console.log('Connection to MongoDB is successful!')
  })
  .catch( (err) => console.error(err));


export interface IPerson extends mongoose.Document {
  name: string;
  lastName_P: string;
  lastName_M: string;
}

export const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName_P: { type: String, required: true },
  lastName_M: { type: String, required: true },
});

const Person = mongoose.model<IPerson>("Person", PersonSchema);
export default Person;