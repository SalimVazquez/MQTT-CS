import Server from './classes/server';
import {SERVER_PORT} from './global/environment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

// Rutas del servidor
server.app.use('/',router);

// Configuracion de cors
server.app.use(cors({origin:true, credentials:true}));

server.start(()=>{
    console.log(`Servidor activo en el puerto: ${SERVER_PORT}`);
})