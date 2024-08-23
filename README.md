# Trabajo Práctico N°1

## Repaso JavasScript: Array, API fetch, FileSystem

## Integrantes

- Aquino, Carla
- Bordet, Gastón
- Gauthier, Gustavo
- Romero, Belen
- Strugo, Florencia

## Descripción del Trabajo

### Ejercicio 1

En este trabajo práctico se implementan varias funciones para interactuar con una API de personajes de Game of Thrones, y se almacenan, filtran y modifican los datos de los personajes en un archivo JSON local.

### Funciones Implementadas

1. **findNedStark:** Recupera la información del personaje “Ned Stark”.
2. **getAllChars:** Recupera todos los personajes disponibles en la API.
3. **saveAllChars:** Persiste el resultado de `getAllChars` en un archivo JSON local.
4. **readJsonData:** Lee los datos del archivo JSON local.
5. **getStarksFamily:** Muestra por consola los personajes de la familia Stark.
6. **addChar:** Agrega un nuevo personaje random al archivo JSON.
7. **deleteCharsGreaterThan:** Elimina los personajes cuyo ID sea mayor a un valor específico y sobrescribe el archivo JSON.

### Ejercicio 2

En este ejercicio se utilizan las funciones fetch y async/await para interactuar con la FakeStore API, que proporciona datos ficticios sobre productos de una tienda en línea. Las funciones implementadas permiten recuperar, agregar, obtener por ID, y eliminar productos de la tienda.

### Funciones Implementadas

1. **recuperarTodos:** Recupera la información de todos los productos disponibles en la FakeStore API.
2. **recuperarLimitados:** Recupera la información de un número limitado de productos, según el valor pasado como parámetro.
3. **agregarProducto:** Agrega un nuevo producto ficticio a la tienda, enviando los datos a la API mediante una solicitud POST.
4. **retornarProductoPorId:** Retorna la información de un producto específico según su id, pasado como parámetro.
5. **eliminarProducto:** Elimina un producto de la tienda basado en su id, utilizando una solicitud DELETE.

### Instrucciones de Uso

1. Clonar el repositorio.
2. Navegar a la carpeta correspondiente desde la carpeta raiz:
   - Para el **Ejercicio 1**, ve a la carpeta `ejercicio1` y ejecuta el archivo `index.js`:
     ```bash
     cd ejercicio1
     node index.js
     ```
   - Para el **Ejercicio 2**, ve a la carpeta `ejercicio2` y ejecuta el archivo `index.js`:
     ```bash
     cd ejercicio2
     node index.js
     ```
