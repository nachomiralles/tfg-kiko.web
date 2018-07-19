// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB-gJ5VGAhRqW0JXl3ZZxs69b9aY6cTYWs',
    authDomain: 'tfg-kiko-web.firebaseapp.com',
    databaseURL: 'https://tfg-kiko-web.firebaseio.com',
    projectId: 'tfg-kiko-web',
    storageBucket: 'tfg-kiko-web.appspot.com',
    messagingSenderId: '804739006001'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
