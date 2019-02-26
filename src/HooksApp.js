import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';

export default function HooksApp(props) {

  const [fieldname, setFieldname] = useState('Initial text');

  function updateLabel(e) {
    setFieldname(e.target.value);
  }

  return (
    <div className="App">
      <header className="HooksApp-header">
        <h3>Simple App to try out how can we manipulate a component´s state with hooks!</h3>

        <Field
          fieldname={fieldname}
          onChangeFallback={updateLabel}
        />

      </header>
    </div>
  );
}
