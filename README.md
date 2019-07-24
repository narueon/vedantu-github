## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.<br>

# NOTES
1. Different styling methods are used (inline as well as css-in-js).
2. API calls are handled in 2 different ways
    * Call API IN action creator (redux thunk middleware)

            refer src/actions/repo-action.js
    * fetch data from api THEN call action creator and pass the fetched data

            refer src/components/Profile.js

3. Used ionicons v2 for icons.