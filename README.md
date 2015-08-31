## Upcoming Recipes Clone

[http://ba-upcoming.herokuapp.com/](http://ba-upcoming.herokuapp.com/)

### Overview

This project was a clone of the blue apron upcoming menu using Backbone.js and responsive design. The core logic for the app is in ```app.MenuView``` where all events are triggered with nested sub views for rendering individual data elements using ```Backbone.viewmaster```. The subviews are responsible for rendering the recipes and the plan/week filtering.

The main data components are collections of ```app.Recipe``` and ```app.Date``` models along with global variables for the current plan ```this.plan``` and the current week ```this.week``` selected by the user. The goal of the app is to only hit the API once on page load and re render the view for a selected week and plan on selection asynchronously. 

### To Run

```
npm start 
```

