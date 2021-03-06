"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const environment_1 = require("./global/environment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const personController_1 = __importDefault(require("./controller/personController"));
const server = server_1.default.instance;
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// Rutas del servidor
server.app.use('/', router_1.default);
server.app.use('/api', personController_1.default);
// Rutas API persona
// const app = express();
// app.get("/persons", person.allPersons);
// app.get("/persons/{id}", person.getPerson);
// app.post("/persons", person.addPerson);
// app.put("/person/{id}", person.updatePerson);
// app.delete("/person/{id}", person.deletePerson);
// Configuracion de cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.start(() => {
    console.log(`Servidor activo en el puerto: ${environment_1.SERVER_PORT}`);
});
