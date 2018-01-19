import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contact from './contact'

import DATA from './data.json'

class App extends Component {
	renderContactList() {
		return DATA.map((contact,i) => {
			console.log(contact)
			return <Contact key={i} contact={contact} />
		})
	}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sample Contact List</h1>
        </header>
				{this.renderContactList()}
      </div>
    );
  }
}

export default App;
