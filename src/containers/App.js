import React, { Component } from 'react';

import api from '../utils/api'

import './App.css';

import Header from '../components/Header/Header'
import Authors from '../components/Authors'
import Greeting from '../components/Greeting'
import Book from '../components/Book'

class App extends Component {

  constructor() {
    super()
    this.state = {
      authors: [],
      currentLocation: 'authors'
    }
  }

  componentDidMount() {
    this.getAuthors()
  }

  getAuthors = () => {
    api.getRequest('/authors', authors => {
      this.setState({ authors })
    })
  }

  updateCurrentLocation = (location) => {
    this.setState({ currentLocation: location })
  }

  render() {
    return (
      <div>
        <Header updateCurrentLocation={this.updateCurrentLocation} />
        {this.state.currentLocation === 'authors' && <Authors authors={this.state.authors} />}
        {this.state.currentLocation === 'greeting' && <Greeting/>}
        {this.state.currentLocation === 'book' && <Book/>}
      </div>
    );
  }
  
}

export default App;
