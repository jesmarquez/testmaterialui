import React from 'react'

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="light-blue darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Jobby</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Dashboard</a></li>
            <li><a href="badges.html">Agenda</a></li>
            <li><a href="collapsible.html">Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
