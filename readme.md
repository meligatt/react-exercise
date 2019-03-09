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

- [x] install redux
  - add basic action + reducer to test implementation

- [X] React components:
  - search bar
  - form elements (search input, search button)
  - results list
  - list item

- [x] Accessibility Resources:
  - [x] tab focus with logical order: page is navigable via keyboard.
  - [x] aria-* HTML attributes: screen reader (voiceOver mac os) announce content.
  - [x] semantic HTML (use the correct html tags)
  
- [x] Implement Redux
  - Actions: async, sync.
  - Reducers

## Work in Progress:

- [ ] run jest: WIP
  - add unit test to components

- [ ] Add Styles: WIP
  - Add SASS mixins
  - Add SASS MAPS
  - Add responsive features


## post vs get 
- Is it possible to 'get' data using POST with json-server? #453: https://github.com/typicode/json-server/issues/453

## Resources:
- https://reactjs.org/docs/accessibility.html
- https://webaim.org/techniques/screenreader/
- check https://www.w3.org/TR/wai-aria-practices/#accordion (widgets)