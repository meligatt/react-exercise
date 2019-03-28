# to start:
- to install json-server: `yarn global add json-server`
- to start json-server: from root folder: `cd data` and run `json-server db.json`
- to install dependencies: run `yarn`
- to start webpack-dev-server: `yarn start`
- go to `http://localhost:8080/` and search by `melbourne`. For now there is only one city in the api.

## To do:
API (mocked for demo purposes):
- [x] Use postman to get data from API endpoints
- [x] spin up a JSON Server (https://github.com/typicode/json-server) with responses from API for:
  - POST request
  - GET request

Client: application with react routes.
- [x] app will have 3 views
  - search view with no results: when hit `http://localhost:8080/`
  - search view results: show a list of property results.
  - list item view: when clicking on an item of the results, or when hit directly in the url: `http://localhost:8080/:query` ie. `http://localhost:8080/86m8km`

- [X] React components:
  - search bar
  - form elements (search input, search button)
  - results list
  - list item
  - nav
  - footer

- [x] Accessibility Resources:
  - [x] tab focus with logical order: page is navigable via keyboard.
  - [x] aria-* HTML attributes: screen reader (voiceOver mac os) announce content.
  - [x] semantic HTML (use the correct html tags)
  
- [x] Implement Redux
  - Actions: async, sync.
  - Reducers

- [x] Add Styles:
  - Add SASS mixins: WIP
  - Add SASS MAPS
  - Add responsive features


## Work in Progress!!:

- [ ] run jest: WIP
  - add unit test to components
  - Examples of test that I have written in other projects
  
  - hotels project test 2018:
  1. testing callbacks: https://github.com/meligatt/hotels-projects-2018/blob/master/public/javascripts/components/FilterBar/__tests__/index.js
  2. https://github.com/meligatt/hotels-projects-2018/blob/master/public/javascripts/components/HotelList/__tests__/index.js
  
  - surveys project tests 2018:
  1. https://github.com/meligatt/surveys-project-2018/tree/master/src/lib/requests
  2. https://github.com/meligatt/surveys-project-2018/tree/master/src/lib/helpers
  3. https://github.com/meligatt/surveys-project-2018/blob/master/src/components/survey-results/__tests__/index.js
  
  - Side project 2019:
  1. https://github.com/cfranklin11/tipresias/blob/master/frontend/src/services/fetchPredictions/__tests__/index.js
  2. https://github.com/cfranklin11/tipresias/blob/master/frontend/src/components/Select/__tests__/index.js
  3. https://github.com/cfranklin11/tipresias/blob/master/frontend/src/components/BarChart/__tests__/index.js


- [ ] optimize image loading: WIP

- [ ] Add debounce techniques to avoid several clicks on sort toggle button.
- [ ] add sort mode when success data
- [ ] add redux logger


## post vs get 
- Is it possible to 'get' data using POST with json-server? #453: https://github.com/typicode/json-server/issues/453

## Resources:

- https://reactjs.org/docs/accessibility.html
- https://webaim.org/techniques/screenreader/
- check https://www.w3.org/TR/wai-aria-practices/#accordion (widgets)
- https://css-tricks.com/debouncing-throttling-explained-examples/
- https://lodash.com/docs/4.17.11#debounce