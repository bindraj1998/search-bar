# MovieSearcher

A movie search web application made using React and Redux. The application uses OMDb's API RESTful web service to obtain movie information.
 <!-- hello -->
## Demo

![demo](https://github.com/codewithsrobins1/movie-search-redux/blob/master/moviesearcher.gif)

## Link to Live Site

https://movie-searcher-redux.netlify.app

## Objectives

* Practice using Redux in a React application
* Practice using React Bootstrap for React components

## Built With

* React
* Redux

## Dependencies

1.	React Router (https://reacttraining.com/react-router/) – Page Transitions for routing to keep UI in sync with URL
2.  Axios (https://github.com/axios/axios) -  Promise based HTTP client for the browser and node.js
3.  React Bootstrap (https://react-bootstrap.github.io/) - Build React Components
4.  Redux (https://redux.js.org/) - State management system
5.  Redux DevTools (https://github.com/zalmoxisus/redux-devtools-extension) - An awesome Google Chrome extension to help monitor state with Redux
6.  Redux Thunk (https://github.com/reduxjs/redux-thunk) - A middleware that extends the Redux store's abilities, and lets you write async logic that interacts with the store

## Getting Started

To get a local copy up and running follow these steps using your terminal.

### Installation

1. Clone the repo
```sh
git clone https://github.com/codewithsrobins1/movie-search-redux.git
```
2. Install NPM packages
```sh
npm install i

```
3. Start Client
```sh
npm start

```

## React Components
* App.js – Renders the application. Contains the various routes
*	Landing.js - Serves as the landing page for the application
*	Header.js - The navigation bar for all pages
* Movie.js - Component that shows all the movies after a search a complete and "More Details" is clicked
* MovieCard.js - Shows the movies that are searched. Contains the movie poster, movie year, and option for more details
* MoviesLists.js - Component that displays the MovieCard component in a grid
* SearchForm.js - Search component that user uses to search for a movie
* Spinner.js - Loading component that shows while a movie is being searched

## Component Tree

To help visualize the structure of the components, please reference the below structure,

- App.js
  - Header.js
  - Landing.js
    - Searchform.js
    - Spinner or MovieList
      - MovieCard
  - Movie.js

