# Teamlist Demo App 
## For Web, iPhone, Android users (Ionic 2, Node.js, Heroku) 
This is a basic Ionic 2 and Node.js Heroku Starter application for demonstration of how to build and run an Ionic 2 app for web, iOS, and Android users at the Ionic Vancouver meetup in April 2017.  This repo includes Node.js server components and Ionic 2 app components. 

# Project Structure 

This app was started off using the Ionic 2.3 tabs starter. The repo layout includes both the server and client app components in a single repo for demo purposes. The top-level folder includes Node.js server components, and Ionic app components are contained in /ionic.  

## Step-by-Step Instructions

### Setup Heroku App  
```sh
$ git clone https://github.com/thmclellan/teamlist
$ cd teamlist 
$ npm install 
$ heroku create 
```
- Take note of the new server name e.g. https://NAME.herokuapp.com 

### Build Ionic App for new Heroku server 
```sh
$ cd ionic
$ npm install 
```
- Update the serverURL on line 15 of ionic/src/services/task/task.service.ts 
  serverURL: any = 'https://lit-cove-42863.herokuapp.com';

- Rebuild the app 
```sh
$ ionic build --release --prod 
```
- Copy the newly built app from /ionic/www to /www 
```sh
$ cd .. 
cp -rf ionic/www ./
```

### Deploy to Heroku 
```sh
$ git push heroku master 
```

### Test the app 
```sh
$ heroku open 
$ cd ionic 
$ ionic platforms add android 
$ ionic run android
$ ionic platforms add ios
$ ionic run ios 
```

## Running the Ionic App  
```sh
$ cd ionic
$ npm install 
$ ionic serve 
```

## Try the Demo 
Visit https://teamlistchat.herokuapp.com

# Heroku Node.js Server Operations
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

Ionic 2 App Development Resources: 

- [Installing Ionic](https://ionicframework.com/docs/intro/installation/)
- [Ionic Tutorial](https://ionicframework.com/docs/intro/tutorial/) 
- [Ionic Component & API Docs](https://ionicframework.com/docs/components/#overview)
- [Josh Morony Tutorials](https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/)

The server components of this app started as a barebones Node.js app using [Express 4](http://expressjs.com/).  This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article.

Additional support resources for Node.js on Heroku: 

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

Created by Tom McLellan at [GrowthClick](http://www.growthclick.com) for [Ionic Vancouver](https://www.meetup.com/ion-van/)
