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
    res.json({
        ok: true,
        mensaje: 'GET listo',
        persons: Person_1.default.find({}, (err, persons) => {
            if (err) {
                res.send("Error");
            }
            else {
                res.send(persons);
            }
        })
    });
});
routerPerson.get('/person/:id', urlencodedParser, (req, res) => {
    res.json({
        ok: true,
        mensaje: 'GET listo',
        persons: Person_1.default.findById(req.params.id, (err, persons) => {
            if (err) {
                res.send("Error");
            }
            else {
                res.send(persons);
            }
        }),
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
