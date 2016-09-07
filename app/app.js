import React from 'react';
import ReactDOM from 'react-dom';
import MainSearch from './src/mainSearch';

class App extends React.Component {
  render () {
    return <MainSearch/>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
