import React from "react"

export default function Ekonomi() {
  return (
    <React.Fragment>
      <div id="tentangkami">
        <section className="home" id="header1-1">
          <div className="layer">
            <div className="container text-content" id="text-caption">
              <h1 className="display-3 text-center">Ekonomi</h1>
            </div>
          </div>
        </section>
      </div>

      <section className="container" id="utama">
        <div id="kami" className="container pb-2 kampungan">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-e.jpg")} id="peta-e" />
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-e" onClick="document.getElementById('peta-e').src='img/peta-e.jpg'">Peta Ekonomi</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p>Aspek ekonomi membahas tentang jenis mata pencaharian utama, jenis mata pencaharian sampingan, dan keterlibatan masyarakat dalam kelembagaan koperasi.</p>
                        <h4 style={{textAlign: "left"}}>Keterangan</h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-puas.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#E0E1B6"}}></p>
                                            </span>Pedagang Makanan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-tidakpuas.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#A48046"}}></p>
                                            </span>Reparasi Alat Elektronik
                                        </a></li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-nodata.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#E4B2BE"}}></p>
                                            </span>Pedagang Warung Sembako
                                        </a></li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-nodata.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#D85248"}}></p>
                                            </span>Tukang Bangunan
                                        </a></li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-nodata.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#98C753"}}></p>
                                            </span>Penjahit
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e.jpg'">
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem",borderColor:"#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-nodata.jpg'">
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem",borderColor:"#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e-rel.jpg'">
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem", border-top:3px"dashed #000000 "}}></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick="document.getElementById('peta-e').src='img/peta-e.jpg'">

                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG" )}style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img id="pic-ekonomi" src={require("../../img/peta-e-mpm1.jpg")} />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img id="pic-ekonomi" src={require("../../img/peta-e-mpm2.jpg")} />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img id="pic-ekonomi" src={require("../../img/peta-e-mpm3.jpg")} />
                    </div>
                </div>
            </div>
        </div>
        <br />
        
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Jenis Mata Pencaharian Utama (%)</h4>
            
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">

                    <canvas id="chartekonomi"></canvas>

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="text-white" style={{background :"#7b4700"}}>
                        <div className="card-body">
                            <span>Terdapat <h5 style={{display: "inline"}}>28,7%</h5> masyarakat di Kelurahan RW 01 berprofesi sebagai karyawan swasta
                            </span>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
        <br />
        
        
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Mata Pencaharian Sampingan</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-e-mps.jpg" )}id="peta-e-mps">
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-e-spp" onClick="document.getElementById('peta-e-spp').src='img/peta-e-spp.jpg'">Peta Kerja Sampingan</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign: "left"}}>Keterangan </h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jenis Mata Pencaharian Sampingan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick="document.getElementById('peta-sb-kmk').src='img/peta-sb-kmk.jpg'">
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/nodata.JPG")} style={{width:"1.8rem", height:" 1.1rem", marginBottom: "1rem"}}/>
                                            </span>
                                            No Data
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick="document.getElementById('peta-sb-kmk').src='img/peta-sb-kmk.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#98C753"}}></p>
                                            </span>Punya
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick="document.getElementById('peta-sb-kmk').src='img/peta-sb-kmk.jpg'">
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#E3E057"}}></p>
                                            </span>Tidak Punya
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e-spp" className="linkpeta" onClick="document.getElementById('peta-e-spp').src='img/peta-e-spp.jpg'">
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem",borderColor:"#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e-spp" className="linkpeta" onClick="document.getElementById('peta-e-spp').src='img/peta-e-spp.jpg'">
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem",borderColor:"#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e-spp" className="linkpeta" onClick="document.getElementById('peta-e-spp').src='img/peta-e-spp.jpg'">
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem", border-top:3px"dashed #000000 "}}></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e-spp" className="linkpeta" onClick="document.getElementById('peta-e-spp').src='img/peta-e-spp.jpg'">
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG" )}style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Ringkasan dalam (%)</h4>
                        <hr />
                        <canvas id="chartekonomi-ringkasan"></canvas>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="text-white" style={{background :"#213e1b"}}>
                            <div className="card-body">
                                <span style={{listStyleType:"none", textAlign: "justify"}}>Sebesar <h5 style={{display: "inline"}}>39%</h5> masyarakat memiliki pekeriaan tetap dengan gaji UMR (PNS, TNI/POLRI, dan Karyawan Swasta), Sedangkan masih terdapat <h5 style={{display: "inline"}}>61%</h5> warga memiliki mata pencaharian utama dengan penghasilan fidak tetap. Hal ini membuat masyarakat memiliki mata pencaharian sampingan untuk tambahan penghasilan seperti usaha keluarga (kos-kosan), membuka kios dagangan, tukang parkir, ojek online, dan pasukan kuning.
                                </span>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}
