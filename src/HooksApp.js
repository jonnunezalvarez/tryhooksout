import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';

export default function HooksApp(props) {
  const name = useInputField('Walter');
  const surname = useInputField('White');

  // THIS IS A HOOK!
  function useInputField(initialValue) {
    const [value, setValue] = useState(initialValue);

    function update(e) {
      setValue(e.target.value);
    }

    return {
      value,
      onChange: update
    }
  }

  return (
    <div className="App">
      <header className="HooksApp-header">
        <h3>Simple App to try out how can we manipulate a component´s state with hooks!</h3>

        <Field {...name} />
        <Field {...surname} />
        
        <label className="fancylabel">{name.value + ' ' + surname.value}</label>

      </header>
    </div>
  );
}
