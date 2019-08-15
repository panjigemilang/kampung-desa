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
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h1>Coba Login</h1>
            <form onSubmit={e => this.onAxiosSubmit(e)}>
              <TextFieldGroup
                name="username"
                className="form-control"
                placeHolder="username"
                value={this.state.username}
                onChange={e => this.onChange(e)}
                errors={errors.username}
              />

              <TextFieldGroup
                name="password"
                type="password"
                className="form-control"
                placeHolder="password"
                value={this.state.password}
                onChange={e => this.onChange(e)}
                errors={errors.password}
              />

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { loginuser }
)(Login)
