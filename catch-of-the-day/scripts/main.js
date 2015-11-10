var React = require('react');
var ReactDOM = require('react-dom');

/*
  StorePicker
    This will let us make <StorePicker/>
*/
var StorePicker = React.createClass({
  render : function(){
    // Old version
    // return React.createElement('p', {className: 'testing'}, 'content ');
    var name = "wes";
    // JSX syntax
    return (
      <form className="store-selector">
        {/* Always return a single element with stuff inside of it
          Comments within curly braces
        */}
        <h2>Please Enter a Store {name}</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" value="Submit" />
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
