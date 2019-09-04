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
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon
} from "react-share"
import Moment from "react-moment"
import styled from "styled-components"
import Spinner from "../commons/Spinner"

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
})

const BeritaLain = styled.a`
  color: inherit;
  text-decoration: none;
`

const DisplayInline = styled.div`
  display: inline-block;
  margin-left: 15px;
  text-align: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    color: black;
  }
`
const DivRight = styled.div`
  float: right;
`

const Hr = styled.hr`
  display: none;
  width: 90% !important;

  @media screen and (max-width: 576px) {
    display: block;
  }
`

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
  const maxPosts = 7
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

  console.log("ini ape gayn", window.location)

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
                <div className="row">
                  <div
                    className="col-lg-2"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {/* DROPDOWN */}
                    {auth.isAuthenticated ? (
                      <React.Fragment>
                        <div className="times" style={{ float: "left" }}>
                          <span className="dot" />
                          <span className="dot" />
                          <span className="dot" />
                        </div>
                        {/* DropDown Menu */}
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
                      </React.Fragment>
                    ) : null}
                  </div>
                  <div className="col-lg-10">
                    <DivRight>
                      Share this news
                      <DisplayInline>
                        <FacebookShareButton url={window.location.href}>
                          <FacebookIcon size={32} round={true}></FacebookIcon>
                        </FacebookShareButton>
                      </DisplayInline>
                      <DisplayInline>
                        <WhatsappShareButton url={window.location.href}>
                          <WhatsappIcon size={32} round={true}></WhatsappIcon>
                        </WhatsappShareButton>
                      </DisplayInline>
                      <DisplayInline>
                        <LineShareButton url={window.location.href}>
                          <LineIcon size={32} round={true}></LineIcon>
                        </LineShareButton>
                      </DisplayInline>
                    </DivRight>
                  </div>
                </div>

                <div className="row">
                  <i className="far fa-clock"></i>
                  <small className="text-muted">
                    &nbsp; Posted : &nbsp;<Moment fromNow>{post.date}</Moment>
                  </small>
                </div>

                <br />

                <div
                  className="bg-dark text-white"
                  style={{ borderRadius: "15px" }}
                >
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
              <div className="col-lg-4 col-md-3 col-sm-4 col-xs-12 beritalain">
                <div className="container">
                  <h4>
                    <i className="font-weight-bolder">Berita Lainnya</i>
                  </h4>
                  <hr
                    className="style1"
                    style={{ clear: "both", float: "none" }}
                  />
                  {postsContent.map(item => (
                    <React.Fragment key={item._id}>
                      <BeritaLain href={`/post/${item._id}`} role="button">
                        {post.judul != item.judul ? (
                          <React.Fragment>
                            <h4>
                              {item.judul.length > 30
                                ? item.judul.substring(0, 30) + " ... "
                                : item.judul}
                            </h4>
                            <hr />
                          </React.Fragment>
                        ) : null}
                      </BeritaLain>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="col-lg-12 col-md-9 col-sm-8 col-xs-12">
                <p className="text-justify deskripsi">
                  {ReactHtmlParser(post.deskripsi)}
                </p>
              </div>

              <Hr></Hr>

              <div className="col-lg-4 col-md-3 col-sm-2 col-xs-12 beritalainsmall">
                <div className="container">
                  <h4>
                    <i className="font-weight-bolder">Berita Lainnya</i>
                  </h4>
                  <hr
                    className="style1"
                    style={{ clear: "both", float: "none" }}
                  />
                  {postsContent.map(item => (
                    <React.Fragment key={item._id}>
                      <BeritaLain href={`/post/${item._id}`} role="button">
                        {post.judul != item.judul ? (
                          <React.Fragment>
                            <h4>
                              {item.judul.length > 30
                                ? item.judul.substring(0, 30) + " ... "
                                : item.judul}
                            </h4>
                            <hr />
                          </React.Fragment>
                        ) : null}
                      </BeritaLain>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="row"> */}

            {/* </div> */}
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
