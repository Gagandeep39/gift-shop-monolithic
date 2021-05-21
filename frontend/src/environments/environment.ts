// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  protocol: 'http://',
  applicationUrl: 'localhost:8085/gift-shop-api',
  // applicationUrl: 'localhost:1999',
  authService: '',
  productService: '',
  orderService: '',
  paymentService: '',
  cartService: '',
  mapQuestAPIKey: 'nXLMbpX6U0545mAaAJyeI2QQd1JYVqG4',
  mapQuestUrl: 'http://www.mapquestapi.com/directions/v2/route',
  publicStripeKey: 'pk_test_51I3zWOI8py6Rj5ufY6RnJ1zjPK930I2xwWW0XKPWFr6cp7mAvgM8q8aoAV5R0trqmGEEqSgrLY6xVhZRqTsgZJqE00zW2TqkZa',
  publicRazorpayKey: 'rzp_test_QHK5P7ne66SdWo',
  googleClientId: '120787335948-g4r6bof29ub3vaaaiu7pc01jd5dalooq.apps.googleusercontent.com',
  facebookClientId: '745534413011559',
  from: '400072',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
