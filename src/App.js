import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Bart',
      surname: 'Simpson'
    };

    this.updateName = this.updateName.bind(this);
    this.updateSurname = this.updateSurname.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateSurname(e) {
    this.setState({
      surname: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Simple App that is manipulating component´s state...</h3>

          <Field
            onChange={this.updateName}
            placeholder="name"
          />
          <Field
            onChange={this.updateSurname}
            placeholder="surname"
          />
          <label className="fancylabel">{this.state.name + ' ' + this.state.surname}</label>

        </header>
      </div>
    );
  }
}

export default App;
