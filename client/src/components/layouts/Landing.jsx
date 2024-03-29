import React, { Component } from "react"
import { connect } from "react-redux"
import { PropTypes } from "prop-types"
import { getPosts, deletePost, deleteImage } from "../../actions/postActions"
import Swiper from "react-id-swiper"
import { Link } from "react-router-dom"
import Spinner from "../commons/Spinner"
import ReactHtmlParser from "react-html-parser"

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts
})

function CarouselItem(props) {
  const { post, auth } = props
  const baseURL = "https://api-kampungdesa.herokuapp.com/image/"
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
      <div className="card kartu">
        <div className="img-box">
          <a href={`/post/${post._id}`} role="button">
            <img
              className="gambar-kartu"
              src={baseURL + post.foto}
              alt="Card_image.jpg"
            />
            <div className="text-content-container">
              <div className="content-text">
                <h1 className="font-weight-bolder">Baca Selengkapnya</h1>
              </div>
            </div>
          </a>
        </div>
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
          <a href={`/post/${post._id}`} role="button">
            <h5 className="card-title berita">
              {post.judul.length > 40
                ? post.judul.substring(0, 40) + " ..."
                : post.judul}
            </h5>
          </a>
          <p className="card-text">
            {post.deskripsi.length > 200
              ? ReactHtmlParser(post.deskripsi.substring(0, 200) + " ... ")
              : ReactHtmlParser(post.deskripsi)}
          </p>
        </div>
      </div>
    </div>
  )
}

function NewsItem(props) {
  const size = window.innerWidth <= 375 ? 1 : 3

  const { posts } = props.post
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: size,
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
  constructor() {
    super()
    this.state = {
      scroll: document.body.scrollTop,
      size: window.innerWidth,
      slidesPerView: 0
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/")
    }
    this.props.getPosts()
  }

  hrefClick(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    })
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
                <div
                  className="container text-content landing-title"
                  id="text-caption"
                >
                  <h4>Selamat Datang di</h4>
                  <h2>Kampung Cerdas Bersahaja</h2>
                  <p>
                    Kerjasama Tim Pengabdian Jurusan PWK FT-UB dengan Tim
                    Masyarakat RW 01 kelurahan Rampal Celaket Kota Malang
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
                  <Link to="/tentang-kami" id="more">
                    Lihat Selengkapnya&nbsp;
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
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
                  <Link to="/tentang-kami" id="more">
                    Lihat Selengkapnya&nbsp;
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
                <div className="box-item col-md-4">
                  <i className="fas fa-phone-square fa-3x" />
                  <hr />
                  <h4>Kontak</h4>
                  <p>
                    &nbsp;Kenali kami lebih dekat untuk mengetahui program
                    kerjasama dengan berbagai pihak
                  </p>
                  <a
                    href="#footer"
                    id="more"
                    onClick={e => this.hrefClick("footer")}
                  >
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

              <div className="row pb-2">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="card bg-dark text-white">
                    <a href="/tentang-kami" id="ttgkm">
                      <img
                        className="card-img card-img-maincustom"
                        src={require("../../img/highcompress-homee.jpg")}
                        alt="card_image.jpg"
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
                        src={require("../../img/highcompress-sb.jpg")}
                        alt="card_image.jpg"
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
                        src={require("../../img/highcompress-ekonomi.jpg")}
                        alt="card_image.jpg"
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
                        src={require("../../img/highcompress-sp.jpg")}
                        alt="card_image.jpg"
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

            {/* Berita: Section */}
            <div className="container kampung" id="beritasect">
              <div className="container">
                <div className="beritaid">
                  <h4 id="judul">Berita</h4>
                  <hr className="style1" style={{ clear: "both" }} />
                  <br style={{ clear: "both" }} />
                </div>
              </div>
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
                        Tidak ada berita untuk saat ini. Terus nantikan berita
                        dari kami!
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <br />

            <div className="container pb-5 kampung">
              <div className="lokasiId">
                <h4 id="judul">Lokasi Kami</h4>
                <hr className="style1" style={{ clear: "both" }} />
                <br style={{ clear: "both" }} />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7902.655780332684!2d112.62988467262423!3d-7.965026301689798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6283249b9833f%3A0xe54379f3aa952716!2sRampal+Celaket%2C+Kec.+Klojen%2C+Kota+Malang%2C+Jawa+Timur!5e0!3m2!1sid!2sid!4v1565933211141!5m2!1sid!2sid"
                width="100%"
                height="500rem"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>
          </section>

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
