# Job Cruizer - The Quasar-Firestore demo!

## Introduction
The purpose of this project is to provide a simple backend-less example app, featuring
the following cutting edge technologies:
- Google's NoSQL cloud database [Firestore](https://firebase.google.com/docs/firestore)
- The multi platform, Vue.js-based app framework [Quasar](https://quasar-framework.org/)

With this example I'd like to explore the synergy of both technologies and provide simple
boilerplate code to kickstart new projects.

Any pull requests to improve the quality of this example are welcome!

## How to run
Make sure you've installed an up-to-date version of yarn.
```
$ yarn global add vue-cli
$ yarn
$ quasar dev

```
After you see
```
 DONE  Compiled successfully in Xms
```
you can open the app [in your browser](http://localhost:8080).

The app will connect and subscribe to an existing Firestore instance,
which was provisioned to back this example.

## Acknowledgements
This project was scaffolded with `quasar init`. Most of the changes applied are either
inspired by or taken from [this great article](https://medium.com/vue-mastery/full-stack-vue-js-with-firestore-62e2fe2ec1f3).

## To do
Re-write the app in TypeScript.
