# Task
1. Write a short description explaining to another developer how you would approach building the product search below.
2. Create a simple product search page like the one below using whatever language/tech you feel is best and fetching the content from our API.

API used: [Attraction Tickets API](https://global.atdtravel.com/api/products?geo=en)

# Deployment
The task has been deployed using Netlify.

Deployed URL: [AT Code Test](https://at-codetest.netlify.app/)

# Frameworks and Libraries Used
* React - project boostrapped with [Create React App](https://github.com/facebook/create-react-app)
* [Axios](https://axios-http.com/docs/intro) - a promise-based HTTP Client
* [Tailwind](https://tailwindcss.com/docs/guides/create-react-app) - a CSS framework

# Description of Task Approach
1. The first thing I would do is test the API using a software such as Insomnia to ensure I get the desired successful return. This also gives the opportunity to try different query parameters which can be used at a later stage to add more features to the product search.
2. The language and frameworks to be used should be decided based on the knowledge and experience of the developer. I chose to use React.js as my framework and Axios as my promise-based HTTP Client. I also chose to use Tailwind as my CSS framework due to its flexibility and my familiarity with it.
3. The next stage would be to set up the React app using `npx create-react-app my-app`.
4. I would then install the frameworks using `npm i tailwindcss` and `npm i axios`.
5. When launching the app, the first thing I would do is set up any installed dependencies and check that they work. For Tailwind the steps followed can be seen here. [Install Tailwind CSS with Create React App - Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)
6. I would then check that Tailwind works by adding a JSX fragment in `App.js`  with some tailwind class names such as `<h1 className='text-red-500'>Hello World!</h1>` and running the app using `npm start`.
7. In `App.js` I’d send a query to the API using the below function to ensure the requests work:
```
function getSearchResults() {
  return axios.get('https://global.atdtravel.com/api/products?geo=en')
}
```
7. Once ensured that that works I’d refactor the request into an `api.js` file.
8. The next stage would be to set up the React hook to send the request to the back end. I used the following code snippet: 
```
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSearchResults(searchValue)
        console.log(data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [searchValue])
```
9. For this I’d set the searchValue to `&title=disney` to ensure that a request with a parameter would return the desired results
10. Next step would be to set up the search field and button. I opted to use a form with the `<input>` and `<button>` tags so that the user could trigger the `onSubmit` both by clicking the button or pressing the enter key. Doing this would send the request to the backend.
11. I would also set up a React variable called ‘searchValue’ which would change to whatever the user is typing in the `<input>` tag using `onChange` and `e.target.value`  to set the value as what the user is typing in. This is then used in the `useEffect` React hook in the code snippet above.
12. Next would be displaying the results. I used conditional formatting to only display this section when the `searchResults` variable had data stored in it  and I used the `<table>` tag to display the results in a table. I also chose to map through the results and set up a separate component, `ResultsDisplay` for each result: 
```
{searchResults.map(result =>
                    <ResultsDisplay key={result.id} {...result} />
                  )}
```
13. Once this is done then the main task is completed.

# Additional Features
* Change language from English to German. I did this by setting up two buttons and set the value of one to `en` and the other to `de-de`. Clicking either would set the `language` variable to the value and this is now added as a parameter to the request sent to the API as seen here:
```
export function getSearchResults(language, searchValue) {
  return axios.get(`${baseUrl + language}&title=${searchValue}`)
}
```
* Ability to load more results by changing the ‘limit’ parameter of the API using the below code snippet:
```
  const loadMore = () => {
    setSearchValue(`${input}&limit=${resultsNumber + 10}`)
    setResultsNumber(resultsNumber + 10)
  }
click (load 10 more)
```
I also used the `total_count` key from the results returned and conditional formatting to remove the button for loading more results when all possible results are displayed using this code snippet:
```
{totalResults !== searchResults.length && !isLoadingMore &&
                <button className='mt-3 font-light bg-button-yellow hover:bg-button-yellow-hover  text-white py-2 px-4 ml-4 rounded uppercase w-36 h-10' onClick={loadMore}>Load More</button>
              }
```
* Created an `Error` component which is displayed when the `isError` variable is set to true which happens when the search doesn’t return any results.
* Created a `Loading` component and this is displayed when the `isLoading` boolean variable is set as true. This happens when the `searchValue` is set but the `searchResults` haven’t been returned yet and there is no error like so `/const/ isLoading = searchValue && !searchResults && !isError`
* I also used Tailwind’s media query classes to create a mobile responsive result.

# General Notes
* When testing the API I noticed that it has a limitation of either being able to search for a single word only or a string of words with an exact match. I used `encodeURI` for the latter in order to be able to send a successful request to the API.
* On Saturday the API appeared to be down as it wasn’t returning any results so I used that opportunity to create some error handling.

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