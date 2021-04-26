# Technical Challenge

Para arrancar el proyecto se deberá:

- Desde una terminal ingresar a la carpeta backend y ejecutar:
 ```sh
$  npm i
```
luego de haber terminado la instalación de módulos, ejecutar 
```sh
$ npm run dev
```
- Desde otra terminal  ingresar a la carpeta client y ejecutar:
 ```sh
$  npm i
```
luego de haber terminado la instalación de módulos, ejecutar 
```sh
$ npm start
```

Para realizar el test del cronómetro, desde una terminal ingresar a la carpeta client y ejecutar:

```sh
$ npm run test
```

Para crear los contenedores docker, ingresar desde dos terminales distintas a la carpeta backend y client respectivamente, y ejecutar en cada una:

```sh
$ docker-compose build
```
luego:

```sh
$ docker-compose up
```

Cuando se quiera iniciar el backend desde localhost no olvidar cambiar en src/database/database.js el host a: localhost (predeterminado)
Cuando se quiera construir los contenedores docker del backend  cambiar host a: postgres

