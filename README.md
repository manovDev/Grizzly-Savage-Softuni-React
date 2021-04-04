
# Grizzly-Savage-Softuni

### Deployed app url - [here](https://grizzly-savage.web.app/)

## Table of Contents
- [Description](#getting-started)
- [Project Architecture - Basic Overview (important directories)](#running-the-app)
- [Tools Required](#tools-required)
- [Running the App](#running-the-app)
- [Authors](#authors)

## Description

Grizzly Savage is eCommerce website / brand where you can find the best hiking/camping equipment. (SoftUni React project)
The users can can search products by name, product id and filter by category and brand.
If the user is logged in, he can place orders and view them and their details.
There is also profile page where he can edit some of his account information.

The admin users have access to the dashboard where they can create, edit and delete products, orders, categories, brands and more...

## Project Architecture - Basic Overview (important directories)

```
  client
  ├── build
  ├── piblic
  ├── src
  │       ├── actions
  │       ├── components
  │       ├── constants
  |       ├── contexts
  |       ├── hooks
  |       ├── reducers
  |       ├── services
  |       ├── App.js
  |       ├── App.css
  |       ├── env.js
  |       ├── firebase.js
  |       ├── index.css
  |       ├── index.js
  |       ├── store.js
  |       ├── firebase.json
  │
  server
  ├── src
  |       ├── config
  |       ├── controllers
  |       ├── middlewares
  |       ├── models
  |       ├── services
  |       ├── router.js
  |       ├── server.js
```

### Tools Required

All tools required go here. You would require the following tools to develop and run the project:

* A text editor or an IDE (like Visual Studio Code)

## Running the App

Steps and commands for running the app:

* Example steps:
  ```
  Open two terminals
  
    [Client]
      In the first terminal type `cd client`
      Run `npm install` to install client side dependencies
      After the installation is finished type `npm start`
      
    [Server]
      In the second terminal type `cd server`
      Run `npm install` to install server side dependencies
      After the installation is finished type `nodemon './src/server.js'`
  ```

## Authors

#### Ivo Manov
* [GitHub]

[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/manovDev/Grizzly-Savage-Softuni
[GitHub]: https://github.com/manovDev
