# Titulo

Practica MQTT-CS

## Comenzando 🚀

Para descargar una copia del proyecto necesitas tener instalado git en tu equipo lo puedes descargar en la siguiente liga:
https://git-scm.com/downloads

despues de haber instalado git en tu ordenador, abres una terminal de comandos
navegas hacia la direccion donde quieres que se guarde el proyecto y escribes el siguiente codigo:

```
git clone https://github.com/SalimVazquez/MQTT-CS.git
```

Listo

### Instalación 🔧

A continuacion los pasos para instalar el proyecto en tu ordenador

Abrir la terminal de comandos y navegar hacia la ruta raíz del proyecto

Escribir el siguiente comando

```
npm install
```
Tenemos que hacer el siguiente comando para compilar el código JS, antes de levantar el servidor.
```
tsc -w
```

### Pre-requisitos 📋
Tener instalado MongoDB en el ordenador
```
https://www.mongodb.com/download-center/community
Version: 3.4.21
Package: ZIP
```

Modificar variables de entorno
```
Variables de entorno
  ->Path
    ->nueva
      ->C:\Program Files\MongoDB\Server\3.4\bin
```

Levantar servicio de MongoDB en una terminal
```
mongod
```
Manejador o "interfaz de MongoDB para crear la DB
```
mongo
```
"Crearla"
```
use nombreDB
```
Generar un registro para completar la creación
```
db.namedb.insert({ person: "The Tea Party", asn: "nasof" })
Ejemplo:
db.persons.insert({ name: "example", lastName: "example" })
```
Listo.

### Ejecutando ⚙️
Abrimos 3 terminales de su preferencia, direccionadas en el proyecto.
En la primer terminal, Esto levantara el servidor de MongoDB
y esperara una conexión en el puerto 27017
````
mongod
````
En la segunda terminal, esto verificara los errores posibles en el código.
```
tsc -w
```
En la tercer terminal, esto levantara el servicio de Node, y hara la conexión y todo lo necesario.
```
nodemon dist
```
Ahora ya tienes un clon del proyecto en tu ordenador.
Puedes testear en PostMan.
