import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Layouts
import Navbar from "./components/layouts/Navbar"
import Landing from "./components/layouts/Landing"
import Footer from "./components/layouts/Footer"
import "./css/App.css"
import "./css/fixed.css"
import "./css/style.css"
import "./css/postingBerita.css"

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
import About from "./components/main/About"
import Ekonomi from "./components/submain/Ekonomi"
import Posts from "./components/posts/Posts"
import Sosbud from "./components/submain/Sosbud"
import Sapras from "./components/submain/Sapras"
import isEmpty from "./validations/is-empty"

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
  const [scroll, setScroll] = React.useState(window.pageYOffset)

  React.useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.scrollY)
      },
      true
    )

    return () =>
      window.removeEventListener(
        "scroll",
        () => {
          setScroll(window.scrollY)
        },
        true
      )
  }, [])

  const upBtn = document.getElementById("myBtn")

  const backTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  if (scroll > 200 && !isEmpty(upBtn)) {
    upBtn.style.opacity = "1"
  } else if (scroll < 200 && !isEmpty(upBtn)) {
    upBtn.style.opacity = "0"
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="tentangkami">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/post/:post_id" component={Post} />
          <Route exact path="/tentang-kami" component={About} />
          <Route exact path="/ekonomi" component={Ekonomi} />
          <Route exact path="/sosbud" component={Sosbud} />
          <Route exact path="/sarana-prasarana" component={Sapras} />
          <Route exact path="/berita" component={Posts} />
          <Route exact path="/not-found" component={NotFound} />
          <Switch>
            <PrivateRoute exact path="/post-berita" component={AddPost} />
          </Switch>
          <Footer />
          <button onClick={e => backTop(e)} id="myBtn" title="Go to top">
            <i className="fas fa-angle-up"></i>
          </button>
        </div>
      </Router>
    </Provider>
  )
}

export default App
