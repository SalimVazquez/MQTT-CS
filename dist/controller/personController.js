"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Person_1 = __importDefault(require("../Person"));
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const routerPerson = express_1.Router();
routerPerson.get('/persons', (req, res) => {
    persons: Person_1.default.find({}, (err, persons) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                mensaje: 'GET ALL listo',
                persons,
            });
        }
    });
});
routerPerson.get('/person-id/:id', urlencodedParser, (req, res) => {
    console.log(req.params.id);
    persons: Person_1.default.findById({ _id: req.params.id }, (err, persons) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                mensaje: 'GET listo',
                persons,
            });
        }
    });
});
routerPerson.get('/person-name/:name', urlencodedParser, (req, res) => {
    console.log(req.params.name);
    persons: Person_1.default.find({ name: req.params.name }, (err, persons) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                mensaje: "Get: " + `${req.params.name}`,
                persons,
            });
        }
    });
});
routerPerson.get('/person-ap_p/:lastName_P', urlencodedParser, (req, res) => {
    console.log(req.params.lastName_P);
    persons: Person_1.default.find({ lastName_P: req.params.lastName_P }, (err, persons) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                mensaje: "Get: " + `${req.params.lastName_P}`,
                persons,
            });
        }
    });
});
routerPerson.get('/person-ap_m/:lastName_M', urlencodedParser, (req, res) => {
    console.log(req.params.lastName_M);
    persons: Person_1.default.find({ lastName_M: req.params.lastName_M }, (err, persons) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({
                mensaje: "Get: " + `${req.params.lastName_M}`,
                persons,
            });
        }
    });
});
routerPerson.post('/person-post', urlencodedParser, (req, res) => {
    console.log(req.body);
    var person = new Person_1.default(req.body);
    person.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(person);
        }
    });
});
routerPerson.delete('/person/:id', urlencodedParser, (req, res) => {
    person: Person_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Persona eliminada exitosamente!");
        }
    });
});
routerPerson.put('/person/:id', (req, res) => {
    person: Person_1.default.findByIdAndUpdate(req.params.id, req.body, (err, person) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Campos actualizados");
        }
    });
});
exports.default = routerPerson;
