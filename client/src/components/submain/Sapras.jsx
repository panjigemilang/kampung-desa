import React from 'react'

export default function Sapras() {
    return (
        <React.Fragment>
        <div id="tentangkami-saranaPrasarana">
        <section className="home" id="header1-1">
            <div className="layer">

                <div className="container text-content" id="text-caption-saranaPrasarana">

                    <h2>Sarana dan Prasarana</h2>
                </div>
            </div>
        </section>
        </div>

        <div className="container" id="utama">
        <div id="kami" className="container pb-2 kampungan">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <div className="bgg-sosbud card">
                        </div>


                        <img className="img-ttgkm" src={require("../../img/peta-sp-lp.jpg")} />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-lp" onClick={`document.getElementById('peta-sp-lp').src=${require('../../img/peta-sp-lp.jpg')}`}>Peta Sarana Prasarana Parkir</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p>Aspek sarana prasarana terdiri dari persebaran sarana, persebaran sarana lingkungan,persebaran sarana sanitasi dan sampah, persebaran ruang terbuka, persebaran fasilitas jalan, dan lokasi parkir.</p>
                        
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-lp" className="linkpeta" onClick={`document.getElementById('peta-sp-lp').src=${require('../../img/peta-sp-lp.jpg')}`}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>

                                        <a href="#peta-sp-lp" className="linkpeta">
                                            <span className="fa-li">
                                                <p style={{width:" 1.5rem",height:" 1.5rem", background:" rgb(18, 12, 168)",color:" white"}}>P</p>
                                            </span>On Street
                                        </a>
                                    </li>
                                    <li style={{marginBottom:" 0.5rem"}}>

                                        <a href="#peta-sp-lp" className="linkpeta" >
                                            <span className="fa-li">
                                                <p style={{width:" 1.5rem",height:" 1.5rem", background:" rgb(160, 207, 91)",color:" white"}}>P</p>
                                            </span>Off Street
                                        </a>
                                    </li>

                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-lp" className="linkpeta" onClick={`document.getElementById('peta-sp').src=${require('../../img/peta-sp.jpg')}`}>
                                           <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-lp" className="linkpeta" >
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp-lp" className="linkpeta" >
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem",  borderTop:"3px dashed #000000"}}/></span>Rel Kereta Api
                                        </a></li>

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
                
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Lokasi Parkir</h4>
                        <hr/>
                        <canvas id="chartparkir"></canvas>
                        <br />

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Lokasi Parkir</h4>
                        <hr/>
                        <div id="slideshow1" className="slideshow-container">

                            <div className="picture">
                                <div className="numbertext">1 / 3</div>
                                <img src={require("../../img/peta-sp-lp1.jpg")} style={{width:"100%"}}/>
                                <div className="text">Lokasi Parkir</div>
                            </div>

                            <div className="picture">
                                <div className="numbertext">2 / 3</div>
                                <img src={require("../../img/peta-sp-lp2.jpg")} style={{width:"100%"}}/>
                                <div className="text">Lokasi Parkir</div>
                            </div>

                            <div className="picture">
                                <div className="numbertext">3 / 3</div>
                                <img src={require("../../img/peta-sp-lp3.jpg")} style={{width:"100%"}}/>
                                <div className="text">Lokasi Parkir</div>
                            </div>

                            <a className="prev" onClick="plusSlides(-1,slideshow1)">&#10094</a>
                            <a className="next" onClick="plusSlides(1, slideshow1)">&#10095</a>


                            <div style={{textAlign:"center"}}>
                                <span className="dot" onClick="currentSlide(1, slideshow1)"></span>
                                <span className="dot" onClick="currentSlide(2, slideshow1)"></span>
                                <span className="dot" onClick="currentSlide(3, slideshow1)"></span>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                <div className="text-white" style={{background :" #764719"}}>
                    <div className="card-body">
                        <span style={{listStyleType:"none",textAlign:" justify"}}>Terdapat 2 parkir on street dan 2 parkir off street. Lokasi Parkir on street berada pada Jl. J.A. Suprapto dan JI. Wahidin Dalam, dan lokasi_ parkir off street berada di RTH RT 06.
                        </span>
                    </div>
                </div>
                <br />
            </div>
        </div>
        <br />

        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Sanitasi Sampah</h4>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <div className="bgg-sosbud card">
                        </div>


                        <img className="img-ttgkm" src={require("../../img/peta-sp-ss.jpg")} id="peta-sp-ss" />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-ss" onClick={`document.getElementById('peta-sp-ss').src=${require('../../img/peta-sp-ss.jpg')}`}>Peta Sanitasi Sampah</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-ss" className="linkpeta" onClick={`document.getElementById('peta-sp-lp').src=${require('../../img/peta-sp-lp.jpg')}`}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>

                                        <a href="#peta-sp-ss" className="linkpeta">
                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/mckumum.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/> MCK
                                            </span>
                                        </a>
                                    </li>
                                    <li style={{marginBottom:" 0.5rem"}}>

                                        <a href="#peta-sp-ss" className="linkpeta">
                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/tps.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/> TPS
                                            </span>
                                        </a>
                                    </li>

                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-ss" className="linkpeta" onClick={`document.getElementById('peta-sp').src=${require('../../img/peta-sp.jpg')}`}>
                                           <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-ss" className="linkpeta" >
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp-ss" className="linkpeta" >
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem",  borderTop:"3px dashed #000000 "}}/></span>Rel Kereta Api
                                        </a></li>

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
                
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Chart Jumlah Sanitasi dan Sampah</h4>
                        <hr/>
                        <canvas id="chartsarana-sanitasi"></canvas>
                        <br />
                        <div className="text-white" style={{background :" #764719"}}>
                            <div className="card-body">
                                <span style={{listStyleType:"none",textAlign:" justify"}}>Terdapat 4 MCK umum yang tersebar di RT O1, RT O4, RT 02, dan RT 06. Sedangkan terdapat i tempat pembuangan sampah sementara di RT 06.
                                </span>
                            </div>
                            
                        </div>

                        
                       

                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Lokasi Sanitasi Sampah</h4>
                        <div className="row">
                            <div id="slideshow2" className="slideshow-container">

                                <div className="picture">
                                    <div className="numbertext">1 / 3</div>
                                    <img src={require("../../img/peta-sp-ss3.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">TPS</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">2 / 3</div>
                                    <img src={require("../../img/peta-sp-ss2.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">MCK Umum</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">3 / 3</div>
                                    <img src={require("../../img/peta-sp-ss1.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">MCK Umum</div>
                                </div>

                                <a className="prev" onClick="plusSlides(-1, this.parentNode)">&#10094</a>
                                <a className="next" onClick="plusSlides(1, this.parentNode)">&#10095</a>


                                <div style={{textAlign:"center"}}>
                                    <span className="dot" onClick="currentSlide(1, slideshow2)"></span>
                                    <span className="dot" onClick="currentSlide(2, slideshow2)"></span>
                                    <span className="dot" onClick="currentSlide(3, slideshow2)"></span>
                                </div>
                            </div>
                            <br/>
                            

                        </div>
                    </div>

                </div>

            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Fasilitas Jalan</h4>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <div className="bgg-sosbud card">
                        </div>


                        <img className="img-ttgkm" src={require("../../img/peta-sp-fj.jpg")} id="peta-sp-fj" />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-fj" onClick={`document.getElementById('peta-sp-fj').src=${require('../../img/peta-sp-fj.jpg')}`}>Peta Fasilitas Jalan</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp" className="linkpeta" onClick={`document.getElementById('peta-sp-lp').src=${require('../../img/peta-sp-lp.jpg')}`}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>

                                        <a href="#peta-sp" className="linkpeta" >
                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/signage.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/> Signage
                                            </span>
                                        </a>
                                    </li>
                                    <li style={{marginBottom:" 0.5rem"}}>

                                        <a href="#peta-sp" className="linkpeta" >
                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/landmark.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/> Landmark
                                            </span>
                                        </a>
                                    </li>

                                </ul>

                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp" className="linkpeta" onClick=   {`document.getElementById('peta-sp').src=${require('../../img/peta-sp.jpg')}`}>
                                           <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp" className="linkpeta" >
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp" className="linkpeta" >
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem",  borderTop:"3px dashed #000000 "}}/></span>Rel Kereta Api
                                        </a></li>

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Chart</h4>
                        <hr/>
                        <canvas id="chartsarana-fj-ringkasan"></canvas>
                        <br />



                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Lokasi Fasilitas Jalan</h4>
                        <hr />
                        <div className="row">
                            <div id="slideshow3" className="slideshow-container">

                                <div className="picture">
                                    <div className="numbertext">1 / 3</div>
                                    <img src={require("../../img/peta-sp-fj1.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text"></div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">2 / 3</div>
                                    <img src={require("../../img/peta-sp-fj2.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text"></div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">3 / 3</div>
                                    <img src={require("../../img/peta-sp-fj3.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text"></div>
                                </div>

                                <a className="prev" onClick="plusSlides(-1, this.parentNode)">&#10094</a>
                                <a className="next" onClick="plusSlides(1, this.parentNode)">&#10095</a>


                                <div style={{textAlign:"center"}}>
                                    <span className="dot" onClick="currentSlide(1, slideshow3)"></span>
                                    <span className="dot" onClick="currentSlide(2, slideshow3)"></span>
                                    <span className="dot" onClick="currentSlide(3, slideshow3)"></span>
                                </div>
                            </div>
                            <br/>
                            

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="text-white" style={{background :" #196176"}}>
                            <div className="card-body">
                                <span style={{listStyleType:"none",textAlign:" justify"}}>Persebaran fasilitas jalan di RW 01 terdapat 19 signage yang berfungsi sebagai penunjuk jalan dan 1 Landmark yang berfungsi sebagai penanda jalan.
                                </span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Sarana Lingkungan</h4>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <div className="bgg-sosbud card">
                        </div>


                        <img className="img-ttgkm" src={require("../../img/peta-sp-sl.jpg")} id="peta-sp-sl" />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-sl" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>Peta Sarana Lingkungan</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/banksampah.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Bank Sampah
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/biopori.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Biopori
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/kebunpembibitan.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Kebun Pembibitan
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/komposter.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Komposter
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/kranair.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Kran Air
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/pergola.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Pergola
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/sumurresapan.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Sumur Resapan
                                            </span>
                                        </a></li>


                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem",  borderTop:"3px dashed #000000 "}}/></span>Rel Kereta Api
                                        </a></li>

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Lokasi Sarana Lingkungan</h4>
                        <hr />
                        <div className="row">
                            <div id="slideshow4" className="slideshow-container">

                                <div className="picture">
                                    <div className="numbertext">1 / 5</div>
                                    <img src={require("../../img/peta-sp-sl1.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Kebun Bibit Desa</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">2 / 5</div>
                                    <img src={require("../../img/peta-sp-sl2.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Bank Sampah</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">3 / 5</div>
                                    <img src={require("../../img/peta-sp-sl3.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Pergola</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">4 / 5</div>
                                    <img src={require("../../img/peta-sp-sl4.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">PDAM</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">5 / 5</div>
                                    <img src={require("../../img/peta-sp-sl5.1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Biopori</div>
                                </div>

                                <a className="prev" onClick="plusSlides(-1, this.parentNode)">&#10094</a>
                                <a className="next" onClick="plusSlides(1, this.parentNode)">&#10095</a>


                                <div style={{textAlign:"center"}}>
                                    <span className="dot" onClick="currentSlide(1, slideshow4)"></span>
                                    <span className="dot" onClick="currentSlide(2, slideshow4)"></span>
                                    <span className="dot" onClick="currentSlide(3, slideshow4)"></span>
                                    <span className="dot" onClick="currentSlide(4, slideshow4)"></span>
                                    <span className="dot" onClick="currentSlide(5, slideshow4)"></span>
                                </div>
                            </div>
                            <br/>
                            

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Keterangan</h4>
                        <hr />
                        <div className="text-white" style={{background :" #196176"}}>
                            <div className="card-body">
                                <span style={{listStyleType:"none",textAlign:" justify"}}>Terdapat 5 kran air bersih, 1 bank sampah (BSM), 1 kebun pembibitan, 7 pergola, 3 sumur serapan, dan biopori yang tersebar marata dengan jumlah terbanyak tersebar di RT 04 sebesar 27 titik, serta komposter yang tersebar merata di RW 01.
                                </span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">

                    </div>
                </div>
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Sarana Kampung</h4>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <div className="bgg-sosbud card">
                        </div>


                        <img className="img-ttgkm" src={require("../../img/peta-sp-sk.jpg")} id="peta-sp-sk" />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-sk" onClick={`document.getElementById('peta-sp-sk').src=${require('../../img/peta-sp-sk.jpg')}`}>Peta Sarana Lingkungan</a></div>


                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/banksampah.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>Pelayanan Umum
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/kebunpembibitan.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Keamanan
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/industrikerajinan.jpg")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Industri Kerajinan
                                            </span>
                                        </a></li>


                                </ul>
                                <h6>Sarana</h6>
                                <ul className="fa-ul">
                                    <li>

                                        <a href="#peta-sb" className="linkpeta" onClick=   {`document.getElementById('peta-sb').src=${require('../../img/peta-sb-puas.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" rgb(111, 255, 99)"}}></p>
                                            </span>Peribadatan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick=   {`document.getElementById('peta-sb').src=${require('../../img/peta-sb-tidakpuas.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" #334ec1"}}></p>
                                            </span>Pemerintahan dan pelayanan Umum
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick=   {`document.getElementById('peta-sb').src=${require('../../img/peta-sb-tidakpuas.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" #691f1f"}}></p>
                                            </span>Pendidikan
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick=   {`document.getElementById('peta-sb').src=${require('../../img/peta-sb-tidakpuas.jpg')}`}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" red"}}></p>
                                            </span>Perdagangan dan Jasa
                                        </a></li>
                                </ul>

                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={`document.getElementById('peta-sp-sl').src=${require('../../img/peta-sp-sl.jpg')}`}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem",  borderTop:"3px dashed #000000 "}}/></span>Rel Kereta Api
                                        </a></li>

                                </ul>

                            </div>
                        </div>

                    </div>


                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4>Grafik</h4>
                        <hr/>
                        <canvas id="chartsarana-sk"></canvas>
                        <br />



                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Lokasi Sarana Kampung</h4>
                        <hr />
                        <div className="row">
                            <div id="slideshow5" className="slideshow-container">

                                <div className="picture">
                                    <div className="numbertext">1 / 5</div>
                                    <img src={require("../../img/peta-sp-sk1.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Balai RW dan Kantor</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">2 / 5</div>
                                    <img src={require("../../img/peta-sp-sk2.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Toko</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">3 / 5</div>
                                    <img src={require("../../img/peta-sp-sk3.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Musholla</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">4 / 5</div>
                                    <img src={require("../../img/peta-sp-sk4.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Pendidikan Formal</div>
                                </div>

                                <div className="picture">
                                    <div className="numbertext">5 / 5</div>
                                    <img src={require("../../img/peta-sp-sk5.jpg")} style={{width:"100%"}}/>
                                    <div className="text">Masjid</div>
                                </div>

                                <a className="prev" onClick="plusSlides(-1, this.parentNode)">&#10094</a>
                                <a className="next" onClick="plusSlides(1, this.parentNode)">&#10095</a>


                                <div style={{textAlign:"center"}}>
                                    <span className="dot" onClick="currentSlide(1, slideshow5)"></span>
                                    <span className="dot" onClick="currentSlide(2, slideshow5)"></span>
                                    <span className="dot" onClick="currentSlide(3, slideshow5)"></span>
                                    <span className="dot" onClick="currentSlide(4, slideshow5)"></span>
                                    <span className="dot" onClick="currentSlide(5, slideshow5)"></span>
                                </div>
                            </div>
                            <br/>
                            

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4>Keterangan</h4>
                        <hr />
                        <div className="text-white" style={{background :" #196176 ", height:" 260px"}}>
                            <div className="card-body">
                                <span style={{listStyleType:"none",textAlign:" justify"}}>
                                    <br />
                                    Terdapat 2 sarana pendikan formal, 4 sarana perdaga -ngan berupa toko, 3 sarana pelayanan umum berupa balai RW dan kantor, dan 5 sarana peribadatan masjid dan musholla.
                                </span>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    
    


    <br />
        </React.Fragment>
    )
}
