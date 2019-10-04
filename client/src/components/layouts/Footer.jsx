import React from "react"

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row align-center justify-content-center pt-2">
          <div className="col-lg-2 col-md-6 col-sm-6 col-xl-2 ftr">
            <img
              src="/logo-ub-min.png"
              alt="logo_UB.png"
              style={{ width: "40%" }}
            />
            &nbsp;
            <img
              src="/Logo_Kota_Malang_color.png"
              alt="logo_Malang.png"
              style={{ width: "35%", marginLeft: "10px" }}
            />
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xl-2 ftr">
            <h6 className="headerfooter">Tentang Kami</h6>
            <div className="footerttgkm">
              <ul className="fa-ul">
                <li>
                  <a href="/tentang-kami" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-book" />
                    </span>
                    Visi dan Misi
                  </a>
                </li>
                <li>
                  <a href="/sosbud" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-theater-masks" />
                    </span>
                    Sosbud
                  </a>
                </li>
                <li>
                  <a href="/ekonomi" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-coins " />
                    </span>
                    Ekonomi
                  </a>
                </li>
                <li>
                  <a href="/sarana-prasarana" className="linkfooter">
                    <span className="fa-li">
                      <i className="fas fa-hammer" />
                    </span>
                    Sapras
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xl-2 ftr">
            <a className="linkfooter" href="#berita">
              <h6>Berita</h6>
            </a>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xl-2 ftr">
            <a className="linkfooter" href="#pengumuman">
              <h6>Pengumuman</h6>
            </a>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xl-2 ftr">
            <a className="linkfooter" href="#pengaduan">
              <h6>Layanan Pengaduan</h6>
            </a>
          </div>
          <div className="col-lg-2 col-xl-2col-lg-2 col-md-6 col-sm-6 col-xl-2 ftr">
            <h6 className="headerfooter">Kontak Kami</h6>
            <div>
              <ul className="fa-ul" id="footerUl">
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
