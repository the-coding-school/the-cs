This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) but has been ejected, which means there is full access to the project configuration (such as Webpack, Babel, etc.)

This was done primarily in order to implement SCSS and React Router but confers various other customizability benefits as well.

## Getting Set Up
1. If you don't have `yarn` installed yet, install it from [here](https://yarnpkg.com/en/).
2. Navigate to the project folder and run `yarn` to install all project dependencies.

**To run locally for development**:
`yarn start`

**To run tests**
`yarn flow` will run [Flow](https://flow.org/), an awesome static type checker that makes team-scale JavaScript development much easier. Note that static typechecking requires that you annotate types for your variables, components, etc. Learn more about how to do this in the [docs](https://flow.org/en/docs) for Flow.

**To complete issues assigned to you**
1. `git checkout master && git pull`
2. From the assigned issue, create a branch with the naming convention of: `IS-<ISSUE_NUMBER>`. E.g. for Issue #2, you will create a branch called `IS-2`. If an issue does not exist for the change you're about to make, create the issue first.
3. Make your local changes and push: `git push origin IS-<ISSUE_NUMBER>`.
4. Go to [the repo](https://www.github.com/the-codinig-school/the-cs) and make a pull request for your branch.
5. Wait for approval on your pull request.
6. If it's approved, merge to master. If changes are requested, fix the issue and notify the reviewer.

**To deploy to the published site**:
1. *Thoroughly* test the `master` branch
2. `git checkout production && git merge master`
3. `yarn deploy`
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

We can also use this feature in our `.scss` files by prepending a tilde. For example, we replace
```scss
@import '../../../scss/Variables'
```
with
```scss
@import '~scss/Variables'
```
