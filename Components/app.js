import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var AppBar = require("./AppBar")
var Home = require("./Home")
var NotFound = require('./NotFound');
var page_1 = require('./page_1');

var routes = (
  <Route path='/' handler={AppBar}>
  	<Route name="page_1" path="pageOne" handler={page_1}/>
    <NotFoundRoute handler={NotFound} />
    <DefaultRoute  handler={Home}/>
  </Route>
	);

Router.run(routes, Router.HashLocation, function(Root) {
    ReactDOM.render(<Root />, document.getElementById('app'));
});



