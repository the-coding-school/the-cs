## Getting Set Up

## Installing the project
1. If you don't have `yarn` installed yet, install it from [here](https://yarnpkg.com/en/).
2. `git clone https://github.com/the-coding-school/the-cs.git`
3. `cd the-cs`
4. `yarn` -- Installs all project dependencies
5. `yarn start` -- Starts development server

## Configuring your development environment
1. Set up [ESLint](https://eslint.org/) in your text editor to show linting errors
  * Atom: `apm install atom-ide-diagnostics linter-eslint`
  * Sublime: Not sure but shouldn't be too hard to figure out via Google. :)
2. Set up [Flow](https://flow.org/en/) in your text editor to show static typechecking errors
  * Atom: `apm install ide-flowtype`
  * Sublime: Same as above.

---

## Development

### Completing tasks
1. `git checkout master && git pull`
2. From the assigned issue, create a branch with the naming convention of: `IS-<ISSUE_NUMBER>`. E.g. for Issue #2, you will create a branch called `IS-2`. If an issue does not exist for the change you're about to make, create the issue first.
3. Make your local changes and push: `git push origin IS-<ISSUE_NUMBER>`.
4. Go to [the repo](https://www.github.com/the-codinig-school/the-cs) and make a pull request for your branch, notifying the appropriate person for a review.
6. If PR is approved, **squash merge** to master. If changes are requested, fix the issue and notify the reviewer.
  - It's really important that you perform a **squash merge** (which combines all your branch's commits into a single commit) and not a regular merge (which doesn't).
7. Once you merge your PR, **delete your branch** so it doesn't take up unnecessary space in the repository.

## Deployment

* There is also a `deploy` script in the project `package.json` that automatically deploys the contents of `/build` to the S3 bucket `s3://the-cs.org`
* Deploying with this method requires the following:
 * [s3cmd](http://s3tools.org/) must be installed on your machine
 * You must have configured s3cmd to your machine by running `s3cmd --configure` and adding the AWS access key & token
  * The access key and token can be found on the AWS console.

### Depolyment Procedure
1. **Thoroughly** test the `master` branch by making sure all pages load and render correctly.
2. `git checkout production`
3. `git merge master`
4. `yarn deploy`
5. `git checkout master`

*We do this so that we have one branch, `production`, which represents a clear timeline of the published site's contents*

---

## External Services Used

### Amazon Web Services (AWS)
* AWS is used to host the domain `the-cs.org` as well as the static webpage served from S3. Lisa has access to the AWS account and can grant access permissions to others at her discretion.

### Google Analytics
* Google Analytics is used to track website usage statistics. Lisa has access to the Analytics account and can grant access permissions to others at her discretion.

### Formspree
* Formspree is used as the form submission platform (mainly on the Get Involved page). This has no account information to worry about. When a form is submitted, it is sent directly to the email specified in the `<form>` element declaration.

### Paypal
* Paypal is used as the donation payment service. It is referenced in `src/views/DonationsPanel/DonationButton.js` in which the `value` property of the `<input name='hosted_button_id'>` refers to which donation endpoint to redirect to. Lisa has access to the TCS Paypal account and can grant access permissions to others at her discretion.

---

## Project Details

### Hierarchy

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
  scss/
  views/
  index.js
  routes.js

```

The main React Component that gets rendered into the DOM, `<Router>` is in `src/index.js`. This conditionally renders the appropriate Page component depending on whether the client is viewing the homepage or one of the tabs.

The project consists of ReactJS components separated into three levels:
#### Components
Generic, reusable React components.

#### Views
Use the smaller components to create specific views that appear on pages. Unlike components, views are generally not used in more than one place.

#### Pages
The actual pages that are shown on the website; each of these is passed into its own `Router` component in `src/routes.js`

---

## Styles & Style Guide
The stylesheets for this project are in SCSS and are all located alongside the respective React components. SCSS is a powerful CSS pre-compiler that allows you to write CSS with nesting, variables, mixins, and more. Learn more about it [here](http://sass-lang.com/).

We don't have an actual style guide since we just use ESLint and extend `eslint-config-airbnb` and let the inline linting errors guide our style. However, here are a few guidelines that aren't included in the linting.
* Use hyphen-case for classnames, e.g. `my-styled-component`
* Prefer `%` and `px` units over `rem`, `em`, `vw`, and `vh`. The latter 4 are almost never what you really want.
* Nest your SCSS so namespacing isn't an issue. For an elaborate example of what this looks like, take a look at `views/Testimonials/Testimonials.scss`.

---

## Miscellaneous Notes

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
