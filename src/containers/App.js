import React, { Component } from 'react';

import './App.css';

import Authors from '../components/Authors'

class App extends Component {

  constructor() {
    super()
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    this.getAuthors()
  }

  getAuthors = () => {
    fetch('/authors')
      .then(res => res.json())
      .then(data => {
        this.setState({authors: data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return <Authors authors={this.state.authors} />;
  }
  
}

export default App;
