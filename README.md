# Setup
1. clone the repo

        git clone https://github.com/narueon/vedantu-github.git

2. install the dependencies 

        npm install 
        (or)
        yarn 

3. Run the project

        npm run start
        or
        yarn start

### `npm run build`

Builds the app for production to the `build` folder.<br>

# NOTES
1. Different styling methods are used (inline as well as css-in-js).
2. API calls are handled in 2 different ways
    * Call API IN action creator (redux-thunk middleware)

            refer src/actions/repo-action.js
    * fetch data from api THEN call action creator and pass the fetched data

            refer src/components/Profile.js

3. Used ionicons v2 for icons.