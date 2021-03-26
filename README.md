Class timetable
===

React Native Android app for CRUD operations with student timetables

## Setup

This project was bootstrapped with [React Native CLI](https://github.com/react-native-community/cli).

### Setting up Gradle variables for release build

1. Place the class-timetable-key.keystore file under the android/app directory in project folder
2. Edit the file android/gradle.properties, and add the following (replace ***** with the correct keystore password, alias and key password),

```
APP_UPLOAD_STORE_FILE=class-timetable-key.keystore
APP_UPLOAD_KEY_ALIAS=class-timetable-key-alias
APP_UPLOAD_STORE_PASSWORD=*****
APP_UPLOAD_KEY_PASSWORD=*****
```

## Available Scripts

### `npm run start`

Runs your app in development mode.

### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools.

### `npm run android:generate:aab`

Generating the release AAB. Gradle's bundleRelease will bundle all the JavaScript needed to run your app into the AAB (Android App Bundle).

### `npm run android:test`

Testing the release build of your app
