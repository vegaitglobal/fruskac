# Docs

## Migration to the new version of React Native & fixing build errors in previous version

> The Fruškać app is now upgraded to the latest version of React Native 0.56

> It does BUILD - however there are some errors with Mapbox

Initial version of the app wasn't working (failed to build). So we did the following:

- Upgrade to React Native 0.56
- Upgraded to Babel 7.0.0
- Resolve conflicts with unsupported packages

> error might happen with `react-native-auto-height-image`, file:`autoHeightImageWithErrorFallback.js`, on line `24:19` once you `npm install`

## Starting guide

- `npm install`
- `npm audit fix` - fixes problems with old packages
- `cd ios && pod install` - installs native packages for iOS (didn't test on Android)
- `react-native link` - links native packages with react-native
- `react-native run-ios` (be sure to have Metro bundler ready before starting the application, do so with `npm start` or `yarn start`)

## Mapbox errors onLoad

Once you open the app, it starts to download offline map of Fruska Gora, during that process the application fails with error:
_undefined is not an object (evaluation 'MapboxGL.UserTrackingModes')_

### Useful links:

https://github.com/mapbox/react-native-mapbox-gl/blob/master/README.md#installation-guides

https://github.com/mapbox/react-native-mapbox-gl/issues/843

https://github.com/mapbox/react-native-mapbox-gl/issues/803
