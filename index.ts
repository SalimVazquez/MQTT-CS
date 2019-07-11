import Server from './classes/server';
import {SERVER_PORT} from './global/environment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
import routerPerson from './controller/personController';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

// Rutas del servidor
// server.app.use('/',router);
server.app.use('/',routerPerson);

// Rutas API persona
// const app = express();

// app.get("/persons", person.allPersons);
// app.get("/persons/{id}", person.getPerson);
// app.post("/persons", person.addPerson);
// app.put("/person/{id}", person.updatePerson);
// app.delete("/person/{id}", person.deletePerson);

// Configuracion de cors
server.app.use(cors({origin:true, credentials:true}));

server.start(()=>{
    console.log(`Servidor activo en el puerto: ${SERVER_PORT}`);
})