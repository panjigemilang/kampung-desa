import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { getPosts, deleteImage, deletePost } from "../../actions/postActions"
import { PropTypes } from "prop-types"
import Spinner from "../commons/Spinner"
import ReactHtmlParser from "react-html-parser"

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
})

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              role="button"
              tabIndex="0"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Post(props) {
  const { post, auth, deletePost, deleteImage } = props
  const baseURL = "https://api-kampungdesa.herokuapp.com/image/"

  const onClickDelete = async (filename, post_id) => {
    if (
      window.confirm(
        "Anda yakin untuk menghapus postingan? Hal ini bersifat permanent."
      )
    ) {
      await deletePost(post_id)
      await deleteImage(filename)

      document.location.reload(true)
    }
  }

  const onShareClick = (e, post_id) => {
    navigator.clipboard
      .writeText(`${window.location.origin}/post/${post_id}`)
      .then(() => document.execCommand("copy"))

    e.preventDefault()
    alert("Link copied!")
  }

  return (
    <React.Fragment>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="card bg-dark text-white">
          <a href={`/post/${post._id}`} id="ttgkm">
            <img
              className="card-img-news"
              src={baseURL + post.foto}
              alt="card_image.jpg"
            />
          </a>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <a href={`/post/${post._id}`} className="btn" role="button">
              <h5 style={{ textAlign: "justify" }}>
                {post.judul.length > 50
                  ? post.judul.substring(0, 50) + " ... "
                  : post.judul}
              </h5>
            </a>
            <hr />
          </div>
          {/* DROPDOWN */}
          {auth.isAuthenticated ? (
            <div
              className="col-lg-2 col-md-2 col-sm-2 col-xs-2"
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

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              className="dropdown-item"
              onClick={() => onClickDelete(post.foto, post._id)}
              style={{ cursor: "pointer" }}
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
        </div>
        <div className="row">
          <p className="text-justify deskripsi">
            {post.deskripsi.length > 300
              ? ReactHtmlParser(post.deskripsi.substring(0, 300) + " ... ")
              : ReactHtmlParser(post.deskripsi)}
          </p>
        </div>
      </div>
      <br />
    </React.Fragment>
  )
}

function Posts(props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    const getPosts = async () => props.getPosts()

    getPosts()
  }, [])

  const { posts, loading } = props.posts
  const { deletePost, deleteImage, auth } = props

  let content

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  if (loading) {
    content = <Spinner />
  } else {
    content = (
      <React.Fragment>
        <div id="tentangkami">
          <section className="home" id="header1-1">
            <div className="layer">
              <div className="container text-content" id="text-caption">
                <h1 className="text-center">Berita</h1>
              </div>
            </div>
          </section>
        </div>

        <section id="utama">
          <div id="kami" className="container pb-0 kampung">
            <div className="row pb-2">
              {Object.keys(posts).length > 0 ? (
                <React.Fragment>
                  {currentPosts.map(item => (
                    <Post
                      key={item._id}
                      auth={auth}
                      post={item}
                      deleteImage={deleteImage}
                      deletePost={deletePost}
                    />
                  ))}
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                  />
                </React.Fragment>
              ) : (
                <div className="container">
                  <h3 style={{ marginTop: "1rem" }}>
                    Tidak ada berita untuk saat ini. Terus nantikan berita dari
                    kami!
                  </h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }

  return content
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  { getPosts, deleteImage, deletePost }
)(Posts)
