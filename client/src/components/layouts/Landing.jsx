import React, { Component } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { getPosts, deletePost, deleteImage } from "../../actions/postActions"
import Swiper from "react-id-swiper"
import Spinner from "../commons/Spinner"
import ReactHtmlParser from "react-html-parser"

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
})

function CarouselItem(props) {
  const { post, auth } = props
  const baseURL = "http://localhost:5000/image/"
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
    <div className="swiper-slide">
      <div className="card">
        <img
          className="gambar-kartu"
          src={baseURL + post.foto}
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
          <h5 className="card-title berita">
            {post.judul.length > 40
              ? post.judul.substring(0, 40) + " ..."
              : post.judul}
          </h5>
          <p className="card-text">
            {post.deskripsi.length > 200
              ? ReactHtmlParser(post.deskripsi.substring(0, 200) + " ... ")
              : ReactHtmlParser(post.deskripsi)}
          </p>
          <a href={`/post/${post._id}`} className="btn btn-primary">
            Baca Selengkapnya&nbsp;
            <i className="fas fa-long-arrow-alt-right" />
          </a>
        </div>
      </div>
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
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
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
          {/* Section HOME */}
          <div id="tentangkami">
            <section className="home" id="header1-1">
              <div className="layer">
                <div className="container text-content" id="text-caption">
                  <h4>Selamat Datang di</h4>

                  <h2>Kampung Cerdas Bersahaja</h2>
                  <p>
                    Kerjasama Tim Pengabdian Jurusan PWK FT-UB dengan Tim
                    Pemetaan Masyarakat RW 01 kelurahan Rampal Celaket Kota
                    Malang
                  </p>
                  <div className="button">
                    <a className="btn btn-md btn-info display-4" href="/berita">
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* MAIN: Card Section */}
          <section id="utama">
            <div className="container" id="semi-landing">
              <div>
                <a href="/tentang-kami" className="headerlink">
                  <h4 id="judul">Tentang kami</h4>
                </a>
              </div>
              <div className="row justify-content-center">
                <div className="box-item col-md-4">
                  <i className="fas fa-home fa-3x align-center" />
                  <hr />
                  <h4>Welcome</h4>
                  <p>
                    &nbsp;Pertumbuhan penduduk kota yang semakin meningkat juga
                    menimbulkan masalah-masalah lingkungan fisik, sosial,
                    ekonomi dan juga budaya...
                  </p>
                  <a href="#" id="more">
                    Lihat Selengkapnya&nbsp;
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
                <div className="box-item col-md-4">
                  <i className="fas fa-book fa-3x" />
                  <hr />
                  <h4>Visi dan Misi</h4>
                  <p>
                    &nbsp;Kampung Cerdas Bersahaja mempunyai misi diantaranya
                    menyediakan data, informasi dan doumentasi yang akurat untuk
                    meningkatkan kualitas pengambilan keputusan...
                  </p>
                  <a href="#" id="more">
                    Lihat Selengkapnya&nbsp;
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
                <div className="box-item col-md-4">
                  <i className="fas fa-phone-square fa-3x" />
                  <hr />
                  <h4>Kontak</h4>
                  <p>
                    &nbsp;Kenali kami lebih dekat untuk mengetahui program
                    kerjasama dengan berbagai pihak
                  </p>
                  <a href="#" id="more">
                    Lihat Selengkapnya&nbsp;
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
            <div id="kami" className="container pb-0 kampung">
              <div className="container">
                <h4 id="judul">Kampung Cerdas Bersahaja</h4>
                <hr className="style1" style={{ clear: "both" }} />
                <br style={{ clear: "both" }} />
              </div>

              <div className="container">
                <div className="container">
                  <div className="row pb-2">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="card bg-dark text-white">
                        <a href="/tentang-kami" id="ttgkm">
                          <img
                            className="card-img card-img-maincustom"
                            src={require("../../img/homee.jpg")}
                            alt="card image"
                          />
                          <div className="card-img-overlay ovl">
                            <i className="fas fa-home fa-3x konten" />
                            <h4 className="card-title">About</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="card bg-dark text-white">
                        <a href="/sosbud" id="ttgkm">
                          <img
                            className="card-img card-img-maincustom"
                            src={require("../../img/sb.jpg")}
                            alt="card image"
                          />
                          <div className="card-img-overlay ovl">
                            <i className="fas fa-theater-masks fa-3x konten" />
                            <h4 className="card-title">Sosial Budaya</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="card bg-dark text-white">
                        <a href="/ekonomi" id="ttgkm">
                          <img
                            className="card-img card-img-maincustom"
                            src={require("../../img/ekonomi.jpg")}
                            alt="card image"
                          />
                          <div className="card-img-overlay ovl">
                            <i className="fas fa-coins fa-3x konten" />
                            <h4 className="card-title">Ekonomi</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="card bg-dark text-white">
                        <a href="/sarana-prasarana" id="ttgkm">
                          <img
                            className="card-img card-img-maincustom"
                            src={require("../../img/sp.jpg")}
                            alt="card image"
                          />
                          <div className="card-img-overlay ovl">
                            <i className="fas fa-hammer fa-3x konten" />
                            <h4 className="card-title">Sarana dan Prasarana</h4>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Berita: Section */}
            <div className="container kampung" id="beritasect">
              <div className="container">
                <div className="beritaid">
                  <h4 id="judul">Berita</h4>
                  <hr className="style1" style={{ clear: "both" }} />
                  <br style={{ clear: "both" }} />
                </div>
              </div>
              <div className="container">
                <div className="container pt-0 pb-0">
                  <div className="row pb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      {Object.keys(posts.posts).length > 0 ? (
                        <NewsItem
                          post={posts}
                          auth={auth}
                          deletePost={deletePost}
                          deleteImage={deleteImage}
                        />
                      ) : (
                        <div className="container">
                          <h3 style={{ marginTop: "1rem" }}>
                            Tidak ada berita untuk saat ini. Terus nantikan
                            berita dari kami!
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BUTTON GO UP: back to the top */}
          <button
            onClick={() => this.topFunction()}
            id="myBtn"
            title="Go to top"
          >
            <i className="fas fa-angle-up" />
          </button>
          <br />
        </div>
      )
    }

    return <React.Fragment>{content}</React.Fragment>
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
