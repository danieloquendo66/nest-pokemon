<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar el comando

```
yarn install
```

3.Tener el Nest CLI instalado

```
  npm i -g @nest/cli
```

4. Levantar la base de datos

```
dockerw-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env.**

6. Llenar las variables de entorno definidas en **.env.**

7. Ejeucutar la aplicación en dev:

```
yarn star:dev
```

8. Reconstruir la base de datos con la semilla

```
  http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- Nest
