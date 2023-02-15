# Task
The task is to create a simple product search page using whatever language/tech you feel is best and fetching the content from the API.

API used: [Attraction Tickets API](https://global.atdtravel.com/api/products?geo=en)

# Frameworks and Libraries Used
* React - project boostrapped with [Create React App](https://github.com/facebook/create-react-app)
* [Axios](https://axios-http.com/docs/intro) - a promise-based HTTP Client
* [Tailwind](https://tailwindcss.com/docs/guides/create-react-app) - a CSS framework

# Additional Features
* Change language from English to German by changing the 'geo' parameter in the API
* Loading more than 10 retults by altering the 'limit' paremeter in the API
* Loading feature for when the query hasn't returned yet
* Error handling for when the query has not returned any results

## Available Scripts

In the project directory, you can run:

### `npm i`
Start with this command to install all dependencies

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.