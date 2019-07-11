"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mongoose from "mongoose";
const mongoose_1 = __importDefault(require("mongoose"));
// mongoose.createConnection('mongodb://127.0.0.1:27017/Person', {useNewUrlParser: true }) .
// catch(error => (error));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/', { dbName: 'Person', useNewUrlParser: true })
    .then(() => {
    console.log('Connection to MongoDB is successful!');
})
    .catch((err) => console.error(err));
exports.PersonSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    lastName_P: { type: String, required: true },
    lastName_M: { type: String, required: true },
});
const Person = mongoose_1.default.model("Person", exports.PersonSchema);
exports.default = Person;
