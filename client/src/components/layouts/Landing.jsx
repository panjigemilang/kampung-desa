import React, { Component } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { getPosts, deletePost, deleteImage } from "../../actions/postActions"
import Swiper from "react-id-swiper"
import Spinner from "../commons/Spinner"

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
})

function CarouselItem(props) {
  const { post, auth } = props
  const onClickDelete = (filename, post_id) => {
    if (
      window.confirm(
        "Anda yakin untuk menghapus postingan? Hal ini bersifat permanent."
      )
    ) {
      props.deletePost(post_id)
      props.deleteImage(filename)
      document.location.reload(true)
    }
  }

  return (
    <div className="swiper-slide gambar-kartu">
      <div className="card">
        <img
          className="card-img-top gambar-kartu"
          src={`http://localhost:5000/image/${post.foto}`}
          alt="Card image"
        />
        {auth.isAuthenticated ? (
          <button
            type="button"
            className="btn btn-sm btn-danger float-right"
            onClick={() => onClickDelete(post.foto, post._id)}
          >
            &times;
          </button>
        ) : null}

        <div className="caption">
          <h5 className="card-title berita" id="berita-header">
            {post.judul}
          </h5>
          <p className="card-text">
            {post.deskripsi.length > 40
              ? post.deskripsi.substring(0, 200) + " ... "
              : post.deskripsi}
          </p>
          <a href={`/post/${post._id}`} className="btn btn-primary">
            Baca Selengkapnya
            <i className="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
      {/* <div className="caption">
        <h1>{post.judul}</h1>
        <p>
          {post.deskripsi.length > 40
            ? post.deskripsi.substring(0, 200) + " ... "
            : post.deskripsi}
        </p>
        <a href={`/post/${post._id}`} className="btn btn-primary">
          Read More
        </a>
      </div> */}
    </div>
  )
}

function NewsItem(props) {
  const { posts } = props.post
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    keyboard: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination"
    }
  }

  let content = posts.map(item => (
    <CarouselItem
      key={item._id}
      post={item}
      auth={props.auth}
      deletePost={props.deletePost}
      deleteImage={props.deleteImage}
    />
  ))

  return (
    // Swiper
    <Swiper {...params}>{content}</Swiper>
  )
}

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/")
    }
    this.props.getPosts()
  }

  render() {
    const { posts, auth, deleteImage, deletePost } = this.props
    let loading = posts.loading
    let content

    if (loading) {
      content = <Spinner />
    } else {
      content = (
        <div className="wrapper">
          <div className="row">
            <div className="container">
              <br />
              <br />
              <br />
              <br />
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="kotak-konten">
                  <h1 className="display-4 tengah">Selamat Datang</h1>
                  <p>
                    &nbsp; Program Aplikasi website buatan mahasiswa Informatika
                    UB 2016, klasifikasi kinerja pegawai menggunakan metode
                    <strong>Simple Additive Weighting </strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                {Object.keys(posts.posts).length > 0 ? (
                  <NewsItem
                    post={posts}
                    auth={auth}
                    deletePost={deletePost}
                    deleteImage={deleteImage}
                  />
                ) : null}
              </div>
              <br />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        {content} <br />
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { getPosts, deletePost, deleteImage }
)(Landing)
