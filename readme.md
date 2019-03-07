# to start:
-  to install json-server: `yarn global add json-server`
-  to start json-server:  
  - from root folder: `cd data`
  - `json-server db.json`

- to install dependencies: run `yarn`
-  to start webpack-dev-server: `yarn start`
- go to `http://localhost:8080/`


# to-do:

Backend:
- [ ] Use postman to get data from API endpoints
- [ ] spin up a JSON Server (https://github.com/typicode/json-server) with responses from API for:
  - POST request
  - GET request

Client: single page application
- [ ] app will have 3 views
  - search view with no results (empty state)
  - search view results 
  - list item view

- [ ] install redux
  - add basic action + reducer to test implementation

- [ ] run jest
  - add unit test to components

- [ ] React components:
https://overreacted.io/how-are-function-components-different-from-classes/
  - search bar
  - form elements (search input, search button)
  - results list
  - list item

- Accessibility (https://reactjs.org/docs/accessibility.html)
  - AIM 
  - https://webaim.org/techniques/screenreader/
  - https://accessibility.18f.gov/
  - https://bitsofco.de/the-accessibility-cheatsheet/
  - https://styleguide.mailchimp.com/web-elements/#header-3-headings-and-subheadings
  - semantic HTML (use the correct html tags)
  - check https://www.w3.org/TR/wai-aria-practices/#accordion for recommendation on a11y for widgets
  - check the examples provided by w3c-wai before coding https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
  - tab focus with logical order.
  - aria-* HTML attributes

- [ ] Implement Redux
Actions:
- action 1
- action 2

Reducers:
- reducer 1
- reducer 2

