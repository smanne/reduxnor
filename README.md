<img src="https://www.dropbox.com/s/w0kjalp73brkhqq/Screenshot%202016-06-08%2018.17.41.png?raw=1" width="250">

React Redux based blood donor application (Demo: http://reduxnor.herokuapp.com/)

A demo application on react js, with redux. I have used following technologies

* [React js](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux)
* [Babel](https://babeljs.io/)
* [express](http://expressjs.com/)
* [google-map-react](https://github.com/istarkov/google-map-react)
* [lodash](https://lodash.com/)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [react-helmet](https://github.com/nfl/react-helmet)
* [react-router](https://github.com/reactjs/react-router)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [webpack](https://webpack.github.io/)

API is developed using sails js and mongo (will open it soon). 

Its just 1.5days old project. Lot of things planned to add to it.

### Future plans:

1. Add unit tests, selenium testing.
2. Deploy it to continous integration ([codeship](https://codeship.com/) is my choice)
3. Create react native app. 

### Screenshots
<img src="https://www.dropbox.com/s/twn6zozgzw2ln6o/Screenshot%202016-06-08%2019.51.21.png?raw=1" width="250">
<img src="https://www.dropbox.com/s/cbkom9d8smzuuba/Screenshot%202016-06-08%2019.53.50.png?raw=1" width="250">

### Deploying on heroku
To deploy it on heroku, we need to set config ``` NPM_CONFIG_PRODUCTION = false. ``` So it will install dev dependencies (webpack).

### Deploying to docker
Dockerfile is already added to this project. To deploy it on docker.
 ```
docker build -t reduxnor .
docker run -d -p $PORT:$PORT reduxnor
 ```

