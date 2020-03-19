import React from "react"
import PropTypes from "prop-types"

export default function Navbar({ icon, title }) {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  )
}

Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "X-GitHub Finder"
}

Navbar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
}
