import { render } from '@testing-library/react';
import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

// Render the App component on the page
ReactDOM.render(<App />, document.getElementById('root'));