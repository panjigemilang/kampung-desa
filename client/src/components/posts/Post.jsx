import React, { Component, useEffect } from "react"
import { connect } from "react-redux"
import { getPost } from "../../actions/postActions"
import Spinner from "../commons/Spinner"

const mapStateToProps = state => ({
  post: state.posts
})

function Post(props) {
  useEffect(() => {
    const getPost = async () => {
      await props.getPost(props.match.params.post_id)
    }

    getPost()
  }, [])

  const { post, loading } = props.post

  let postContent

  if (loading) {
    postContent = <Spinner />
  } else {
    postContent = (
      <div className="container post">
        <div className="card" style={{ width: "400px" }}>
          <img
            className="card-img-top gambar-kartu"
            src={`http://localhost:5000/image/${post.foto}`}
            alt="Card image"
          />
          <div className="card-body">
            <h4 className="card-title">{post.judul}</h4>
            <p className="card-text">{post.deskripsi}</p>
          </div>
        </div>
      </div>
    )
  }

  return <React.Fragment>{postContent}</React.Fragment>
}

export default connect(
  mapStateToProps,
  { getPost }
)(Post)
