import React from 'react'

import './Header.css'

import Nav from '../Nav/Nav'

export default ({ updateCurrentLocation }) => (
    <header className="header">
        <h1 className="header__title">Bookpub</h1>
        <Nav updateCurrentLocation={updateCurrentLocation} />
    </header>
)