# Quiz-app on React
## This app is all about the quizes, you may create your own or pass others.
### Check how it works here https://quizonreact.web.app/ or read the details below ↓
![list](https://user-images.githubusercontent.com/77164933/126002735-59ad52d7-34a6-4c81-8d5d-7f2cdb15aae2.png)
## You can sign up / sign in to create own quizes

### Open menu at the top-left of the screen and choose login/register
``` You can sign in if you already signed up here or with Google/Github```
![auth](https://user-images.githubusercontent.com/77164933/126002806-6f2be935-a3fa-42b0-b3c2-4a951bc5f37e.png)
### Type your email and password and tap "sign up" if you are new here
![reg](https://user-images.githubusercontent.com/77164933/126002845-8c1f35a0-8ec8-426a-a2c1-044d836cb05c.png)

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

Everything is ready to go, if you want to add your Firebase app authorization, just do a few steps to turn it on (Email/Password, Google, Github)
1) <h3>Go to Authentication tab</h3>
![auth](https://user-images.githubusercontent.com/77164933/125080359-63aafd80-e0cd-11eb-9512-07a8f12f293d.png)
<!-- * <h3>Repeat after me:</h3><br> -->
* <h4>Email/Password</h4>
![authCheckboxes](https://user-images.githubusercontent.com/77164933/125080542-981eb980-e0cd-11eb-8216-aa17f912603d.png)
* <h4>Google</h4>
![google](https://user-images.githubusercontent.com/77164933/126041765-64194377-ba1a-4406-851c-465d3ed5f01f.png)
- [Get Cliend ID and Client secret](https://console.cloud.google.com/apis/credentials/)
![googleAuth](https://user-images.githubusercontent.com/77164933/126042688-d8d46252-a557-448e-b3b8-32f1b383f923.png)
* <h4>Github</h4>
![github](https://user-images.githubusercontent.com/77164933/126041798-8b1e083d-7368-4820-ae37-17e560c49960.png)
To add the Client ID and Client Secret:<br>
[Register your app](https://github.com/settings/applications/new): as a developer application on GitHub and get your app's OAuth 2.0 Client ID and Client Secret.
Make sure your Firebase OAuth redirect URI (e.g. my-app-12345.firebaseapp.com/__/auth/handler) is set as your Authorization callback URL in your app's settings page on your GitHub app's config. <br>Then in your github app's settings:
* Copy and paste client ID
* Generate Client secret and paste 
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
