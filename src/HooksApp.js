import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Field from './components/field';

export default function HooksApp(props) {
  const [name, setName] = useState('Walter');
  const [surname, setSurname] = useState('White');

  function updateName(e) {
    setName(e.target.value);
  }

  function updateSurname(e) {
    setSurname(e.target.value);
  }

  return (
    <div className="App">
      <header className="HooksApp-header">
        <h3>Simple App to try out how can we manipulate a component´s state with hooks!</h3>

        <Field
          onChangeFallback={updateName}
          placeholder="name"
        />
        <Field
          onChangeFallback={updateSurname}
          placeholder="surname"
        />
        <label className="fancylabel">{name + ' ' + surname}</label>

      </header>
    </div>
  );
}
