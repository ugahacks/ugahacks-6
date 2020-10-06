<p align="center">
  <img alt="UGAHacks 6" src="public/sixlogoreadme.png" width="80%"/>
</p>

---
## BASIC SCRIPTS

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## BUILDING AND DEPLOYING UGAHACKS

#### NOTE: you will need to run `npm i` in order to build local dependencies first (which is pulled from package-lock.json and package.json).

The branch `react-hacks` should maintain a copy of the most recent production build's source. All contributions should be branched from here and merged back in (via pull request).


In order to build the application, simply run 
### `npm run build` 
on the most up-to-date react-hacks branch. 

After a succcessful build, run 

### `npm run custom-deploy` 

and enter your valid github credentials to sign the build and push it to the production branch `react-hacks-build`.

It is **paramount** to use the above command (instead of `npm run deploy`) since the script is configured to publish to a branch we designate to GitHub to host the website.

If this is confusing, throw tomatos at Neal.

## Additional Resources:

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
