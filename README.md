<h1 align="center">Welcome to feed-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## About the app

The application initially displays the posts and allows the user to access to the comments related to the selected post.

![posts-light](https://user-images.githubusercontent.com/67164680/129419773-a92da4e7-3531-4a11-b1da-21286f9ecaf5.png)

Additionally, redux was used to manage states, some components were tested and it is possible to make comments for each post by saving the information using redux.
As an extra, the dark-light theme option and the use of localstorage for data persistence also were added.

![posts-dark](https://user-images.githubusercontent.com/67164680/129420296-2c76546f-b4ba-4292-bdf1-a0ef3af2df61.png)

Initially, the application verifies the information in localstorage before get the posts data in order to preserve the status of the theme and comments that were added before. It was taken into account that another service will be updating the database, therefore, new requests will have to be made to keep the information updated.
While the information is being requested, the "loading ..." text is displayed.

Just click on the post to go to the comments section:

![comments-light](https://user-images.githubusercontent.com/67164680/129420476-47dc4b29-bc93-4ddc-8d4d-0753778bca9f.png)

Which also has its dark version:

![comments-dark](https://user-images.githubusercontent.com/67164680/129420557-e47c1315-d2d9-401a-9134-7bf77514a879.png)

It is possible to enter a new comment at the bottom of the comments section. In addition, a button at the right corner makes possible to return to the posts section, this action is achieved using the Route component from the react-router-dom library.
For styling, modules allows to split up the logical (js files) from styles (css files), automatically adding a unique identifier for each element.
For the stylized theme, the tailwindcss library was used as it makes it easy to implement theme selection throughout the application.

The following cases were taken into consideration,

given a wrong url the following message is displayed:

![cant-fetch](https://user-images.githubusercontent.com/67164680/129420954-acf0998f-3150-47af-8f3f-29505042235b.png)

When trying to access an undefined route, a Not found message is delivered.

![bad-route](https://user-images.githubusercontent.com/67164680/129421238-7f5183a9-8a28-4f4a-958d-32630da14243.png)

When trying to access an undefined post (in this case greater than 100), a No posts found message is delivered.

![not-found](https://user-images.githubusercontent.com/67164680/129421181-98bb7980-f0df-434d-8b96-7bd9fbe6d679.png)

All possible cases comes with their own respective dark-light theme option.
If the comments or post request fails, not found will be displayed.
A possible improvement is to discriminate which one was failure so that it is still possible to show at least the successful request.
Another possible improvement would be that if the request fails, it shows the data from localStorage, if there is some.
The application is made up of three main folders: Components, hooks and store. The components folder also includes the UI folder, where there are standard reusable components.

![folders](https://user-images.githubusercontent.com/67164680/129421417-0624cf3d-85ae-4010-a7b1-32adb92730ce.png)

Two custom hooks were created, one to make http requests (custom requests) and the other to modify the theme, enabling refactoring and delegating specific tasks outside the components.
The store folder contains the store management system (redux) which was used to centralize states, update and make them available through the components.
The App.js file makes the call to obtain the information and renders the components.
A possible improvement is to clean the App.js file, so that it only renders a single component (creating a Layout component for example) making it clear that this is its only function following the practice of making a component as specific and simple as possible.


## Author

👤 **Guido Stifani**

