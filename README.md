# Quiz-app on React
## This app is all about the quizes, you may create your own or pass others.
### Check how it works here https://quizonreact.web.app/ or read the details below ↓
![mainPage](https://user-images.githubusercontent.com/77164933/124355548-5b107e00-dc1a-11eb-9d5d-1ceb8dcd09d4.png)
## You can sign up / sign in to create own quizes

### Open menu at the top-left of the screen
![sidebar](https://user-images.githubusercontent.com/77164933/124355560-6f547b00-dc1a-11eb-8ea2-b381ee4177a3.png)
### Type your email and password and tap "sign up" or "sign in" if you already had an account  
![auth](https://user-images.githubusercontent.com/77164933/124355638-e12cc480-dc1a-11eb-8e85-feb1c209a03f.png)

## Try it now https://quizonreact.web.app/

### How to add the Web SDKs to your app
Have a glance at the docs here:
https://firebase.google.com/docs/web/learn-more?authuser=1#modular-version

1) Go to your Firebase Project settings
2) In "SDK setup and configuration" choose "CDN" option
![setup](https://user-images.githubusercontent.com/77164933/125078964-c4393b00-e0cb-11eb-8c8e-69f241edd403.png)
3) Copy your own values to the environmental variables in file .env.dist

### Variables
Quotes don't matter, just put your values ↓
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```
### How to turn on Authentication
You can check the Firebase docs:
https://firebase.google.com/docs/auth/web/start

Everything is ready to go, just do a few steps:
1) Turn on Social Login
![auth](https://user-images.githubusercontent.com/77164933/125080359-63aafd80-e0cd-11eb-9512-07a8f12f293d.png)
2) Allow to signup and keep Email link disabled
![authCheckboxes](https://user-images.githubusercontent.com/77164933/125080542-981eb980-e0cd-11eb-8216-aa17f912603d.png)


### Available Scripts

#### `npm start`

Runs the app in the development mode.

#### `npm run build`

Builds the app for production to the `build` folder.

#### `npm run lint:fix`

Fixes lint issues.

#### `npm run prepare`

Prepares Husky config installing.

#### `npm run deploy`

Builds the app for production and deploys on Firebase
