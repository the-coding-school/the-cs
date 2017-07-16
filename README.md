This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) but has been ejected, which means there is full access to the project configuration (such as Webpack, Babel, etc.)

This was done primarily in order to implement SCSS and React Router but confers various other customizability benefits as well.

## Getting Set Up

First, `cd` to project folder and run `npm install` to get all project dependencies.

**To run locally for development**:
`npm run start`

**To deploy to the published site**:
1. *Thoroughly* test the `master` branch
2. `git checkout production && git merge master`
3. `npm run deploy`
4. `git checkout master`

*We do this so that we have one branch, `production`, which represents a clear timeline of the published site's contents*

---

## Project Hierarchy

```
config/
public/
scripts/
src/
  components/
    Button/
    FontAwesomeLink/
    HoverCard/
    HoverCardTitledText/
    HoverFadeContent/
    HoverFadeImage/
    IconPanel/
    PageHeader/
    SectionHeader/
    SlickPanel/
    TextBlock/
    TitledContent/
    TitledParagraphs/
  css/
  fonts/
  js/
  pages/
    AboutPage/
    DonatePage/
    GetInvolvedPage/
    HomePage/
    OurFootprintPage/
    OurProgramsPage/
    TeamPage/
  scss/
  views/
  index.js
  routes.js

```

The main React Component that gets rendered into the DOM, `<Router>` is in `src/index.js`. This conditionally renders the appropriate Page component depending on whether the client is viewing the homepage or one of the tabs.

The project consists of ReactJS components separated into three levels:
#### 1. Components
Generic, reusable React components.

#### 2. Views
Use the smaller components to create specific views that appear on pages. Unlike components, views are generally not used in more than one place.

#### 3. Pages
The actual pages that are shown on the website; each of these is passed into its own `Router` component in `src/routes.js`

### Styles
The stylesheets for this project are in SCSS and are all located alongside the respective React components.

## Notes
webpack's root-resolver allows us to set `/src/` as the root, so in order to `import` JS modules, we simply need to define the path relative to `src`.

For example, we can replace ugly imports like:
```js
import SectionHeader from '../../../components/'
```
with
```js
import SectionHeader from 'components'
```
