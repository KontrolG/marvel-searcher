# Marvel Search

Buscador de personajes de Marvel realizado en ReactJS, utilizando Styled-components, Context API y Hooks junto a Sass.

[Demostración en vivo
](https://marvel-searcher-reactjs.herokuapp.com/)

## Instalación

Clona este repositorio:

    $ git clone https://github.com/KontrolG/marvel-searcher.git
    $ cd marvel-searcher

Instala las dependencias:

    $ npm install

## Configuración

Crea un archivo con el nombre “.env” en el directorio raíz y añade tus llaves de la [API de Marvel](https://developer.marvel.com/account) de la siguiente manera:

    REACT_APP_MARVEL_API_BASE_URL=https://gateway.marvel.com/v1/public

    REACT_APP_MARVEL_API_PUBLIC_KEY=%TU_LLAVE_PÚBLICA%
    REACT_APP_MARVEL_API_PRIVATE_KEY=%TU_LLAVE_PRIVADA%

Ahora puedes correr la aplicación ejecutando:

    npm start
