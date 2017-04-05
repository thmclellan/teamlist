# teamlist
This is a basic Ionic 2 and Node.js Heroku Starter application for demonstration of how to build and run an Ionic 2 app for web, iOS, and Android users at the Ionic Vancouver meetup in April 2017.  This repo includes Node.js server components and Ionic 2 app components. 


## Node.js on Heroku 

A barebones Node.js app using [Express 4](http://expressjs.com/).This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

# Ionic App Setup 

## Starting a new app 
ionic start app tabs --v2
ionic serve 

## Building on iOS and Android 
ionic build ios  
ionic run android 
ionic build ios --release --prod 
ionic build android --release --prod 

## Building for Web delivery 
ionic build --release --prod 
Copy the ./ionic/www folder to ./www for delivery through Heroku 
Test with Chrome Incognito to avoid caching 

# Server Operations
## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

Additional support resources for Ionic: 

- [Installing Ionic] (https://ionicframework.com/docs/intro/installation/)
- [Ionic Tutorial] (https://ionicframework.com/docs/intro/tutorial/) 
- [Ionic Component & API Docs] (https://ionicframework.com/docs/components/#overview)
- [Josh Morony Tutorials] (https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/)

Additional support resources for Node.js on Heroku: 

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
