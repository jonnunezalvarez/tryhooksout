import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldname: 'Initial text'
    };

    this.updateLabel = this.updateLabel.bind(this);
  }

  updateLabel(e) {
    this.setState({
      fieldname: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Simple App that is manipulating component´s state...</h3>

          <Field
            fieldname={this.state.fieldname}
            onChangeFallback={this.updateLabel}
          />

        </header>
      </div>
    );
  }
}

export default App;
