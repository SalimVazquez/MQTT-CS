import { Router, Request, Response } from "express";
import Person from '../Person';
import router from "../routes/router";
var bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const routerPerson = Router();

routerPerson.get('/persons', (req:Request, res:Response) => {
  persons: Person.find({},(err: any, persons: any) => {
    if(err) {
      res.send(err);
    } else{
      res.json({
        persons,
      });
    }
  });
});

routerPerson.get('/person/:id', urlencodedParser, (req:Request, res:Response) => {
  res.json({
    ok: true,
    mensaje: 'GET listo',
    persons : Person.findById(req.params.id,(err: any, persons: any) => {
      if(err) {
        res.send(err);
      } else{
        res.send(persons);
      }
    }),
  });
});


routerPerson.post('/person-post', urlencodedParser, (req: Request, res: Response) => {
  console.log(req.body);
  var person = new Person(req.body);
  person.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(person);
    }
  });
});

routerPerson.delete('/person/:id', urlencodedParser, (req:Request, res:Response) => {
  person: Person.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Persona eliminada exitosamente!");
    }
  });
});

routerPerson.put('/person/:id', (req:Request, res:Response) => {
  person : Person.findByIdAndUpdate(req.params.id,req.body,(err: any, person: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Campos actualizados");
    }
  });
});
export default routerPerson;