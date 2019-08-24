import React from "react"

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row align-center justify-content-center">
          <div className="col-lg-2 col-md-6  col-sm-6 col-xl-2 ftr">
            <img
              src={require("../../img/LETS DEV.png")}
              alt="logo.png"
              style={{ width: "70%" }}
            />
          </div>
          <div className="col-lg-2 col-md-6  col-sm-6 col-xl-2 ftr">
            <h6 className="headerfooter">Tentang Kami</h6>
            <div className="footerttgkm">
              <ul className="fa-ul">
                <li>
                  <a href="#semi-landing" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-book" />
                    </span>
                    Visi dan Misi
                  </a>
                </li>
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-theater-masks" />
                    </span>
                    Sosial Budaya
                  </a>
                </li>
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-coins " />
                    </span>
                    Ekonomi
                  </a>
                </li>
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-hammer" />
                    </span>
                    Sarana dan Prasarana
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6  col-sm-6 col-xl-2 ftr">
            <a className="linkfooter" href="#berita">
              <h6>Berita</h6>
            </a>
          </div>
          <div className="col-lg-2 col-md-6  col-sm-6 col-xl-2 ftr">
            <a className="linkfooter" href="#pengumuman">
              <h6>Pengumuman</h6>
            </a>
          </div>
          <div className="col-lg-2 col-md-6  col-sm-6 col-xl-2 ftr">
            <a className="linkfooter" href="#pengaduan">
              <h6>Layanan Pengaduan</h6>
            </a>
          </div>
          <div className="col-lg-2 col-xl-2col-lg-2 col-md-6  col-sm-6 col-xl-2 ftr">
            <h6 className="headerfooter">Kontak Kami</h6>
            <div>
              <ul className="fa-ul">
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fab fa-facebook-square" />
                    </span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fab fa-twitter" />
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fab fa-instagram " />
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#visimisi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fab fa-youtube" />
                    </span>
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
