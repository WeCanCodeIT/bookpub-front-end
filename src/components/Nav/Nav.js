import React from 'react'

import './Nav.css'

export default ({ updateCurrentLocation }) => (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item"><a onClick={() => updateCurrentLocation('authors')}>Authors</a></li>
            <li className="nav__item"><a onClick={() => updateCurrentLocation('greeting')}>Greeting</a></li>
            <li className="nav__item"><a onClick={() => updateCurrentLocation('book')}>Book</a></li>
        </ul>
    </nav>
)