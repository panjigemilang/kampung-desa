import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { logout } from "../../actions/authActions"

const mapStateToProps = state => ({
  auth: state.auth
})

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      navbarToggle: true
    }
  }

  toggleSlideMenu() {
    this.setState({
      navbarToggle: !this.state.navbarToggle
    })

    if (this.state.navbarToggle) {
      this.openSLideMenu()
    } else {
      this.closeSlideMenu()
    }
  }

  openSLideMenu() {
    document.getElementById("side-menu").style.width = "250px"
    document.querySelector("#side-menu a").style.opacity = 1
  }

  closeSlideMenu() {
    document.getElementById("side-menu").style.width = "0"
    document.querySelector("#side-menu a").style.opacity = 0
  }

  onLogoutClick(e) {
    this.toggleSlideMenu()
    this.props.logout()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const guestLink = (
      <React.Fragment>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link " to="/tentang-kami">
              <strong>Tentang Kami</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/berita">
              <strong>Berita</strong>
            </Link>
          </li>
          <li className="nav-item auth">
            <Link className="nav-link " to="/login">
              <strong>Login</strong>
            </Link>
          </li>
        </ul>
      </React.Fragment>
    )

    const authLink = (
      <React.Fragment>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link " to="/tentang-kami">
              <strong>Tentang Kami</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/berita">
              <strong>Berita</strong>
            </Link>
          </li>
          <li className="nav-item nav-text-color">
            <a href="/post-berita" className="nav-link">
              <strong>Posting</strong>
            </a>
          </li>
          <li className="nav-item nav-text-color">
            <a
              href="/login"
              onClick={e => this.onLogoutClick(e)}
              className="nav-link"
            >
              <strong>Logout</strong>
            </a>
          </li>
        </ul>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark"
          id="nav-bg"
        >
          <Link className="navbar-brand" to="/">
            <img src="/logo-ub-min.png" alt="logo_UB.png" />
            &nbsp;&nbsp;
            <img src="/Logo_Kota_Malang_color.png" alt="logo_Malang.png" />
          </Link>
          {/* INI TOMBOL COLLAPSE */}
          <button
            className="open-slide ml-auto"
            type="button"
            onClick={() => this.toggleSlideMenu()}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {isAuthenticated ? authLink : guestLink}
        </nav>

        {/* INI SIDE MENU */}
        <div id="side-menu" className="side-nav">
          <button
            type="button"
            className="btn-close"
            onClick={() => this.toggleSlideMenu()}
          >
            &times;
          </button>

          {isAuthenticated ? (
            <React.Fragment>
              <Link
                to="/tentang-kami"
                className="nav-link"
                onClick={() => this.toggleSlideMenu()}
              >
                <strong>Tentang Kami</strong>
              </Link>
              <Link
                to="/berita"
                className="nav-link"
                onClick={() => this.toggleSlideMenu()}
              >
                <strong>berita</strong>
              </Link>
              <Link
                to="/post-berita"
                className="nav-link"
                onClick={() => this.toggleSlideMenu()}
              >
                <strong>Posting</strong>
              </Link>
              <a
                href="/login"
                onClick={e => this.onLogoutClick(e)}
                className="nav-link"
              >
                <strong>Logout</strong>
              </a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link
                to="/tentang-kami"
                className="nav-link"
                onClick={() => this.toggleSlideMenu()}
              >
                <strong>Tentang Kami</strong>
              </Link>
              <Link
                to="/berita"
                className="nav-link"
                onClick={() => this.toggleSlideMenu()}
              >
                <strong>berita</strong>
              </Link>
              <Link
                className="nav-link"
                to="/login"
                onClick={() => this.toggleSlideMenu()}
              >
                <strong>Login</strong>
              </Link>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)
