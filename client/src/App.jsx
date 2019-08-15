import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Layouts
import Navbar from "./components/layouts/Navbar"
import Landing from "./components/layouts/Landing"
import Footer from "./components/layouts/Footer"
import "./App.css"

// Redux setup
import { Provider } from "react-redux"
import store from "./store"
import setAuthToken from "./utils/setAuthToken"
import { setCurrentUser, logout } from "./actions/authActions"
import jwt_decode from "jwt-decode"

// Components
import PrivateRoute from "./components/commons/PrivateRoute"
import Login from "./components/auth/Login"
import AddPost from "./components/posts/AddPost"
import NotFound from "./components/errors/NotFound"
import Post from "./components/posts/Post"

if (localStorage.jwtToken) {
  // set token to authorization
  setAuthToken(localStorage.jwtToken)

  // get user data and decode token
  const decoded = jwt_decode(localStorage.jwtToken)
  // set current user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logout())
    // redirect to login
    window.location.href = "/login"
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/post/:post_id" component={Post} />
          <Switch>
            <PrivateRoute exact path="/post-berita" component={AddPost} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
