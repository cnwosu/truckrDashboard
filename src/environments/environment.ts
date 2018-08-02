// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare function require(name: string);
// const config = require('../../config/config.json');

export const environment = {
  production: false
  // apiKey: config.apiKey,
  // authDomain: config.authDomain,
  // databaseURL: config.databaseURL,
  // storageBucket: config.storageBucket,
  // messagingSenderId: config.messagingSenderId,
  // projectId: config.projectId,
  // corporateSiteUrl: 'http://localhost:4200'
};

export const firebaseConfig = {
  apiKey: 'AIzaSyBt_vL5iC2hLK9Ss5kc8Uqh9wZyN8rwOrg',
  authDomain: 'truckrtech.firebaseapp.com',
  databaseURL: 'https://truckrtech.firebaseio.com',
  projectId: 'truckrtech',
  storageBucket: 'truckrtech.appspot.com',
  messagingSenderId: '713985223854'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
