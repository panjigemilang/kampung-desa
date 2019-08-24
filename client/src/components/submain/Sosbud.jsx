import React from "react"

export default function Sosbud() {
  return (
    <React.Fragment>
      <div id="tentangkami-sosbud">
      <section className="home" id="header1-1">
            <div className="layer">

                <div className="container text-content" id="text-caption-sosbud">

                    <h2>Sosial Budaya</h2>
                </div>
            </div>
        </section>

        <div className="container" id="utama">
        <div id="kami" className="container pb-2 kampungan">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb.jpg" )} id="peta-sb" />

                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb.jpg')}`}>Peta Sosial Budaya</a></div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p>Aset sosial-budaya masyarakat meliputi pelayanan fasilitas sosial seperti kesehatan dan pendidikan. Selain itu juga menyangkut keterlibatan warga dalam kegiatan kegiatan sosial dan budaya seperti program kesehatan BPJS, pemberantasan buta huruf, program kebutuhan khusus, pemberantasan kemiskinan, posyandu, keamanan, dan gotong royong. Pendataan aset sosial-budaya juga mencakup kemungkinan pengembangan informasi dan pengetahuan.</p>
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Tingkat Kepuasan Fasilitas Kesehatan</h6>
                                <ul className="fa-ul">
                                    <li>

                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb-puas.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "rgb(111, 255, 99)"}}></p>
                                            </span>Puas
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb-tidakpuas.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height: "1rem" ,background: "red"}}></p>
                                            </span>Tidak Puas
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb-nodata.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/nodata.JPG")} style={{width:"1.8rem", height: "1.1rem", marginBottom: "1rem"}} />
                                            </span>
                                            No Data
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both", width: "1.8rem", borderColor: "#5da2ff}}"}} /></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb-nodata.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both", width: "1.8rem", borderColor: "#000000"}} /></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb-rel.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both", width: "1.8rem", borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick={`document.getElementById('peta-sb').src=${require('../../img/peta-sb.jpg')}`}>

                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height: "1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Tingkat Kepuasan Fasilitas Kesehatan</h4>
                        <hr />
                        <canvas id="chartsosbud"></canvas>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" id="alasan">
                        <h4>
                            Tanggapan MengenaiKepuasan Fasilitas Kesehatan
                        </h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row justify-content-center">
                                    <div className="box-item col-md-12 tujuan-left">
                                        <h6>Puas</h6>
                                        
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Pelayanannya baik dan ramah
                                            </li>
                                            <li>Harganya terjangkau
                                            </li>
                                            <li>memiliki BPJS / tunjangan lainnya
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="box-item col-lg-12 col-md-4 tujuan-right">
                                        <h6>Tidak Puas</h6>
                                        
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Pelayanannya baik dan ramah
                                            </li>
                                            <li>Harganya terjangkau
                                            </li>
                                            <li>memiliki BPJS / tunjangan lainnya
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Keikutsertaan dalam BPJS</h4>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb-bpjs.jpg")} id="peta-sb-bpjs" />

                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-bpjs" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>Peta BPJS</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Tingkat Keikutsertaan Program BPJS</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#E4E4AE"}}></p>
                                            </span>Nol
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#BD5E55"}}></p>
                                            </span>Mengikuti
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#a0e6b8"}}></p>
                                            </span>Tidak Mengikuti
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both", width: "1.8rem", borderColor: "#5da2ff}}"}} /></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both", width: "1.8rem", borderColor: "#000000}}"}} /></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both", width:" 1.8rem", borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-bpjs" className="linkpeta" onClick={`document.getElementById('peta-sb-bpjs').src=${require('../../img/peta-sb-bpjs.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width: "2rem", height: "1.2rem"}} /> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Grafik Keikutsertaan dalam BPJS</h4>
                        <canvas id="chartsosbud-bpjs"></canvas>
                        <hr />
                        <h4 style={{textAlign:" center"}}>Ringkasan Peserta BPJS</h4>
                        <hr />
                        <canvas id="chartsosbud-bpjs-ringkasan"></canvas>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" id="alasan">
                        <h4>
                            Pendapat tentang BPJS
                        </h4>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="text-white" style={{background :"#494e83"}}>
                                    <div className="card-body">
                                        <h6>Mengikuti :</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Membantu masyarakat dalam mengakases kesehatan
                                            </li>
                                            <li>Melayani dengan baik
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className=" text-white tidakpuas" style={{background :" rgb(255, 135, 99)"}}>
                                    <div className="card-body">
                                        <h6>Tidak Mengikuti</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Tidak semua rumah sakit dapat melayani pengguna BPJS
                                            </li>
                                            <li>Tidak semua obat bisa diakses oleh BPJS
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className=" text-white tidakpuas" style={{background :" rgb(121, 121, 121)"}}>
                                    <div className="card-body">
                                        <h6>Saran Kepada BPJS</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Pelayanan ke semua masyarkat harus sama
                                            </li>
                                            <li>Tidak sulit dalam mengakses obat-obatan
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Sumber Pembiayaan Pendidikan</h4>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb-spp.jpg")} id="peta-sb-spp" />

                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-spp" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>Peta Pendidikan</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6> Sumber Pembiayaan Pendidikan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#E4E4AE"}}></p>
                                            </span>Nol
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#BD5E55"}}></p>
                                            </span>Surat Menyurat
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#a0e6b8"}}></p>
                                            </span>Tidak Mengikuti
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #5da2ff"}} /></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem",  borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-spp" className="linkpeta" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}} /> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Grafik Sumber Biaya Pendidikan</h4>
                        <canvas id="chartsosbud-spp"></canvas>
                        <hr />

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Ringkasan Sumber Biaya Pendidikan</h4>
                        <hr />
                        <canvas id="chartsosbud-spp-ringkasan"></canvas>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" id="alasan">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="text-white" style={{background :"#494e83"}}>
                                    <div className="card-body">
                                        <h6>Saran untuk pembiayaan pendidikan:</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Tepat sasaran
                                            </li>
                                            <li>Permudah urusan surat-menyurat
                                            </li>
                                            <li>
                                                Perketat, tingkatkan, dan konsekuen dalam memberikan bantuan
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Program Pendidikan Khusus</h4>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <img className="img-ttgkm" src={require("../../img/peta-sb-ppp.jpg")} id="peta-sb-ppp"/>

                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-ppp" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>Peta Pendidikan Khusus</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6> Tingkat Kepentingan Program Pendidikan Khusus</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-ppp" className="linkpeta" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#554452"}}></p>
                                            </span>Terus Dilaksanakan Karena ada Masyarakat yang Membutuhkan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-ppp" className="linkpeta" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#A5443D"}}></p>
                                            </span>Sosialisasi ke Semua Masyarakat
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-ppp" className="linkpeta" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-ppp" className="linkpeta" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-ppp" className="linkpeta" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem",  borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-ppp" className="linkpeta" onClick={`document.getElementById('peta-sb-ppp').src=${require('../../img/peta-sb-ppp.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Grafik Tingkat Kepentingan Program Pendidikan Khusus</h4>
                        <canvas id="chartsosbud-ppp"></canvas>
                        <hr />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Chart Hasil Kuesioner tentang Program Pendidikan Khusus</h4>
                        <canvas id="chartsosbud-ppp-ringkasan"></canvas>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Program Buta Huruf</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb-buta.jpg")} id="peta-sb-buta" />

                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-spp" onClick={`document.getElementById('peta-sb-spp').src=${require('../../img/peta-sb-spp.jpg')}`}>Peta Buta Huruf</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan </h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Keikutsertaan Program Buta Huruf</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#A1CAE0"}}></p>
                                            </span>Nol
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#ffba8a"}}></p>
                                            </span>Ada
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#8EB971"}}></p>
                                            </span>Tidak Ada
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem",  borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-buta" className="linkpeta" onClick={`document.getElementById('peta-sb-buta').src=${require('../../img/peta-sb-buta.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Grafik Tingkat Keikutsertaan dalam Program</h4>
                        <canvas id="chartsosbud-buta"></canvas>
                        <hr />

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <h4 style={{textAlign:" center"}}>Ringkasan terhadap program Buta Huruf</h4>
                        <hr />
                        <canvas id="chartsosbud-buta-ringkasan"></canvas>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12" id="alasan">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="text-white" style={{background :"#1d6c7b"}}>
                                    <div className="card-body">
                                        <h6>Saran terhadap adanya Program ini:</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Terus Dilaksanakan, karena terdapat masyarakat yang memerlukan
                                            </li>
                                            <li>Sosialisasi yang lebih giat kepada Masyarakat tentang Program ini
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Kepentingan Pengembangan Informasi dan Pengetahuan</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb-kpip.jpg")} id="peta-sb-kpip" />
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-kpip" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>Peta Pengembangan Informasi</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <h4 style={{textAlign:" left"}}>Keterangan </h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Tingkat Kepentingan Pengembangan Informasi dan Pengetahuan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#92c856"}}></p>
                                            </span>-
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#dd5443"}}></p>
                                            </span>Taman Bacaan
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#e37b46"}}></p>
                                            </span>Internet
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#686ea9"}}></p>
                                            </span>Taman Bacaan, Internet
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem",  borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kpip" className="linkpeta" onClick={`document.getElementById('peta-sb-kpip').src=${require('../../img/peta-sb-kpip.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Grafik Tingkat Kepentingan Pengembangan Informasi dan Pengetahuan </h4>
                        <canvas id="chartsosbud-kpip"></canvas>
                        <hr/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" center"}}>Pengembangan Informasi dan Pengetahuan</h4>
                        <hr/>
                        <canvas id="chartsosbud-kpip-ringkasan"></canvas>
                        <hr/>
                    </div>

                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Keikutsertaan Masyarakat Terhadap Keamanan</h4>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb-kmtk.jpg")} id="peta-sb-kmtk" />

                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-kmtk" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>Peta Keamanan</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan </h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jenis Keikutsertaan Masyarakat Terhadap Keamanan Kampung</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/nodata.JPG")} style={{width:"1,8rem",height: "1.1rem", marginBottom: "1rem"}} />
                                            </span>
                                            No Data
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#E1E3BA"}}></p>
                                            </span>Ikut Jaga/ Ronda
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#D2ABC7"}}></p>
                                            </span>Iuran
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#C6B7D4"}}></p>
                                            </span>Lain-lain
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem",  borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmtk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmtk').src=${require('../../img/peta-sb-kmtk.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                            <h5 style={{textAlign:" center"}}>Presentase Keikutsertaan Masyarakat (%)</h5>
                            <hr/>
                            <canvas id="chartsosbud-kmtk-ringkasan"></canvas>
                        </div>

                    </div>


                </div>
                <hr/>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                    </div>

                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Keterlibatan Masyarakat Dalam Koperasi</h4>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sb-kmk.jpg")} id="peta-sb-kmk" />
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sb-kmk" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>Peta Koperasi</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Keikutsertaan Masyarakat dalam Kelembagaan Koperasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/nodata.JPG")} style={{width:"1,8rem", height: "1.1rem", marginBottom: "1rem"}}/>
                                            </span>
                                            No Data
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#f2aaa3"}}></p>
                                            </span>Mengikuti
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem", height:" 1rem", background: "#a0e6b8"}}></p>
                                            </span>Tidak Mengikuti
                                        </a></li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem", borderColor:" #000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear: "both",width:" 1.8rem",  borderTop:"3px dashed #000000"}} /></span>Rel Kereta Api
                                        </a></li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sb-kmk" className="linkpeta" onClick={`document.getElementById('peta-sb-kmk').src=${require('../../img/peta-sb-kmk.jpg')}`}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                            </div>
                            <h4 style={{textAlign:" center"}}>Ringkasan Jumlah Masyarakat (%)</h4>
                            <hr/>
                            <canvas id="chartsosbud-kmk-ringkasan"></canvas>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" id="alasan">
                        <h4>
                            Pendapat tentang Koperasi:
                        </h4>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="text-white" style={{background :"#49834b"}}>
                                    <div className="card-body">
                                        <h6>Kepuasan Terhadap Kinerja Koperasi:</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Penyampaian dari pengurus sesuai
                                            </li>
                                            <li>Mudah dalam proses peminjaman
                                            </li>
                                            <li>Membantu meringankan masyarakat
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className=" text-white tidakpuas" style={{background :" rgb(54, 113, 124)"}}>
                                    <div className="card-body" style={{height: "14.5rem",  marginBottom: "-2.5rem"}}>
                                        <h6>Ketidakpuasan Terhadap Kinerja Koperasi:</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Visi dan Misi belum Jelas
                                            </li>
                                            <li>Hanya orang tertentu yang bisa menjadi anggota
                                            </li>
                                            <li>Sulit dalam proses peminjaman
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <br />
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className=" text-white tidakpuas" style={{background :" rgb(123, 50, 50)"}}>
                                    <div className="card-body">
                                        <h6>Tidak Bergabung dalam Koperasi:</h6>
                                        <ul style={{listStyleType:"circle"}}>
                                            <li>Masih mengikuti koperasi di tempat tinggal yang lama
                                            </li>
                                            <li>Sibuk Kerja
                                            </li>
                                            <li>Visi dan Misi belum jelas
                                            </li>
                                            <li>Tidak berminat
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
    </div>
          </div>
    </React.Fragment>
  )
}
