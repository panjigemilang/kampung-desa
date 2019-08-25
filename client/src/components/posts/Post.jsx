import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  getPost,
  getPosts,
  deleteImage,
  deletePost
} from "../../actions/postActions"
import { PropTypes } from "prop-types"
import ReactHtmlParser from "react-html-parser"
import Spinner from "../commons/Spinner"

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
})

function Post(props) {
  useEffect(() => {
    const getPost = async () => await props.getPost(props.match.params.post_id)
    const getPosts = async () => await props.getPosts()

    getPost()
    getPosts()
  }, [])

  const { auth, deleteImage, deletePost } = props
  const { post } = props.posts
  const { posts, loading } = props.posts
  const maxPosts = 8
  const baseURL = "https://api-kampungdesa.herokuapp.com/image/"

  let postContent
  let postsContent = []

  const onClickDelete = (filename, post_id) => {
    if (
      window.confirm(
        "Anda yakin untuk menghapus postingan? Hal ini bersifat permanent."
      )
    ) {
      deletePost(post_id)
      deleteImage(filename)
      props.history.push("/berita")
    }
  }

  const onShareClick = (e, post_id) => {
    navigator.clipboard
      .writeText(`${window.location.origin}/post/${post_id}`)
      .then(() => document.execCommand("copy"))

    e.preventDefault()
    alert("Link copied!")
  }

  // Check if posts > maxPosts as Berita lainnya
  if (posts.length > maxPosts) {
    postsContent = posts.slice(0, maxPosts - 1)
  } else {
    postsContent = posts
  }

  // Content
  if (loading) {
    postContent = <Spinner />
  } else {
    postContent = (
      <div className="wrapper-post">
        <div id="tentangkami">
          <section className="home" id="header1-1">
            <div className="layer">
              <div className="container text-content" id="text-caption">
                <h1 className="display-4 text-center">{post.judul}</h1>
              </div>
            </div>
          </section>
        </div>

        <section id="utama">
          <div id="kami" className="container pb-0 kampung">
            <div className="row pb-2">
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                {/* DROPDOWN */}
                {auth.isAuthenticated ? (
                  <div
                    className="row"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="times">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                  </div>
                ) : null}

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    className="dropdown-item"
                    onClick={() => onClickDelete(post.foto, post._id)}
                    style={{ cursor: "pointer", zIndex: "99" }}
                  >
                    Delete Post
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={e => onShareClick(e, post._id)}
                    style={{ cursor: "pointer" }}
                  >
                    Share Post
                  </button>
                </div>

                <br />

                <div className="card bg-dark text-white">
                  <img
                    className="card-img"
                    src={baseURL + post.foto}
                    alt="card image"
                    style={{
                      height: "90vh",
                      objectFit: "cover",
                      objectPosition: "center"
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="container">
                  <h4>
                    <i>Berita Lainnya</i>
                  </h4>
                  <hr
                    className="style1"
                    style={{ clear: "both", float: "none" }}
                  />
                  {postsContent.map(item => (
                    <React.Fragment key={item._id}>
                      <a
                        href={`/post/${item._id}`}
                        className="btn"
                        role="button"
                      >
                        <h4>
                          {item.judul.length > 30
                            ? item.judul.substring(0, 30) + " ... "
                            : item.judul}
                        </h4>
                      </a>
                      <hr />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p className="text-justify deskripsi">
                  {ReactHtmlParser(post.deskripsi)}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return postContent
}

Post.propTypes = {
  auth: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { getPost, getPosts, deleteImage, deletePost }
)(Post)
