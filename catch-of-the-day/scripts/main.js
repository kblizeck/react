var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');
/*
  App
*/
var App = React.createClass({

  render : function() {

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Nom Nom Shrimp" num="5000"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }

});

/*
  Header
*/
var Header = React.createClass({

  render : function(){
    console.log(this.props);
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

/*
  Order
*/
var Order = React.createClass({

  render : function(){
    return (
      <p>Order</p>
    )
  }
});

/*
  Inventory
*/
var Inventory = React.createClass({
  render : function(){
    return (
      <p>Inventory</p>
    )
  }
});

/*
  StorePicker
    This will let us make <StorePicker/>
*/
var StorePicker = React.createClass({
  goToStore: function(e){
    e.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    console.log(storeId);
    // transition from <StorePicker/> to <App/>
  },
  // what HTML do you want me to display?
  render : function(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* this is how you do a comment */}
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit"/>
      </form>
    )
  }

});

/*
  Not Found
*/
var NotFound = React.createClass({
  render : function(){
    return (
      <h1>404 Not Found</h1>
    )
  }
});

/*
  Routes
*/
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));
