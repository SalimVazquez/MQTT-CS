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
        mensaje: 'GET ALL listo',
        persons,
      });
    }
  });
});

routerPerson.get('/person-id/:id', urlencodedParser, (req:Request, res:Response) => {
  console.log(req.params.id);
  persons : Person.findById({_id:req.params.id},(err: any, persons: any) => {
    if(err) {
      res.send(err);
    } else{
      res.json({
        mensaje: 'GET listo',
        persons,
      });
    }
  });
});

routerPerson.get('/person-name/:name', urlencodedParser, (req:Request, res:Response) => {
  console.log(req.params.name);
  persons : Person.find({name:req.params.name},(err: any, persons: any) => {
    if(err) {
      res.send(err);
    } else{
      res.json({
        mensaje: "Get: "+`${req.params.name}`,
        persons,
      });
    }
  });
});

routerPerson.get('/person-ap_p/:lastName_P', urlencodedParser, (req:Request, res:Response) => {
  console.log(req.params.lastName_P);
  persons : Person.find({lastName_P:req.params.lastName_P},(err: any, persons: any) => {
    if(err) {
      res.send(err);
    } else{
      res.json({
        mensaje: "Get: "+`${req.params.lastName_P}`,
        persons,
      });
    }
  });
});

routerPerson.get('/person-ap_m/:lastName_M', urlencodedParser, (req:Request, res:Response) => {
  console.log(req.params.lastName_M);
  persons : Person.find({lastName_M:req.params.lastName_M},(err: any, persons: any) => {
    if(err) {
      res.send(err);
    } else{
      res.json({
        mensaje: "Get: "+`${req.params.lastName_M}`,
        persons,
      });
    }
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