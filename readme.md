**Purpose**

This app helps you to keep in touch with friends.
Organize them in lists, keep to-do items, write notes about them when you talk to them, and recall those notes when you talk with them again.

**Visit the website**

Visit http://srm2.herokuapp.com to use the app.

**How it works?**

The root of the app is app.js.
That file serves index.html, in the public folder.

**This app uses the following technologies**

Overall:
* Front end: React
* Back end: Node
* Server: Express
* Database: Firebase
* Managing state: Redux
* Version control: Git
* Deployment: Heroku

Styles:
* Bootstrap
* Custom CSS and SaaS in the style of Google's Material Design

Analytics:
* Amplitude
* Quantcast Measure
* Google Analytics
* All through Google tag manager

Other technologies:
* Tooltip: React-tooltip
* Time objects: moment
* Unique identifiers: uuid
* User onboarding modals: Appcues (turned off)
* Contact form: Formspree

File transformations:
* Webpack
* Babel

Key features:
* Search that is instantly responsive, shows the truncated section of notes found, and puts the search term in bold face.
* Location filters with checkboxes and scrollable area inside the modal.
* Appcues-style welcome guide when you first join with intelligent modals.
* Basic CRUD for major objects.
* Cascade CRUD.  For example, certain objects are deleted in the database when their parents are deleted.
* Responsive, mobile-friendly CSS.
* Ordering friends within lists.
* Feature flags.
