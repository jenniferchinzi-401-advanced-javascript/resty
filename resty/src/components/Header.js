// Add a menu bar to the header
//    Link labeled “Home” that links to ‘/’ and shows the search form/results page
//    Link labeled “History” that links to ‘/history’ and loads the history page
//    Link labeled “Help” that links to ‘/help’ and loads the about us page

import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss'

function Header() {

  return(
    <header className="App-header">
      <h1>RESTy</h1>

      <nav>
        <ul>
          <li>
            <NavLink data-testid="homelink" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink data-testid="classiclink" to="/history">History</NavLink>
          </li>
          <li>
            <NavLink data-testid="renderlink" to="/help">Help</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )

}

export default Header;