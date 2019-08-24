import React, { Component } from "react"
import { connect } from "react-redux"
import { loginuser } from "../../actions/authActions"
import TextFieldGroup from "../commons/TextFieldGroup"

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
  }

  // logged in and error handling
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/")
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  // handle if user logged in yet try to direct to auth pages
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/")
    }
  }

  onAxiosSubmit = e => {
    e.preventDefault()

    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.loginuser(userData)
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { errors } = this.props

    return (
      <div id="tentangkami-login" className="layer">
        {/* <div className="layer"> */}

        <br />
        <br />
        <br />
        <br />

        <section className="home-login" id="header1-1">
          <br />
          <div className="container text-content">
            <h3 className="text-center">Admin</h3>
            <h1 className="display-4 text-center">Kampung Cerdas Bersahaja</h1>
            <h2 className="text-center">Sign In</h2>

            <br />

            <form id="login" onSubmit={e => this.onAxiosSubmit(e)}>
              <div className="form-group">
                <label htmlFor="username">
                  <strong>Username</strong>
                </label>
                <TextFieldGroup
                  name="username"
                  className="form-control"
                  placeHolder="Masukkan username"
                  value={this.state.username}
                  onChange={e => this.onChange(e)}
                  errors={errors.username}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <TextFieldGroup
                  name="password"
                  type="password"
                  className="form-control"
                  placeHolder="Masukkan password"
                  value={this.state.password}
                  onChange={e => this.onChange(e)}
                  errors={errors.password}
                />
              </div>

              <div className="login-submit">
                <button type="submit" className="btn btn-primary">
                  Masuk
                </button>
              </div>
            </form>

            <br />
            <br />
          </div>
        </section>
        {/* </div> */}
        <br />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { loginuser }
)(Login)
