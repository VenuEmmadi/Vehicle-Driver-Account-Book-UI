// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  'stage': {
    DOMAIN: 'https://example.com',
    
     API_URL: 'https://localhost:5001/',
     API_V_URL: 'https://localhost:5002/',
     API_D_URL: 'https://localhost:5003/',
     API_B_URL: 'https://localhost:5004/',
    // API_URL: 'https://authorizationapi20220715105841.azurewebsites.net/',
    // API_V_URL: 'https://vehicleapi20220715195318.azurewebsites.net/',
    // API_D_URL: 'https://driverapi20220715202256.azurewebsites.net/',
    // API_B_URL: 'https://bookingapi20220716115905.azurewebsites.net/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
