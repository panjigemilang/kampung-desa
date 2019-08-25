import React from 'react'
import Chart from "chart.js"
import Swiper from "react-id-swiper"

export default function Sapras() {
    React.useEffect(() => {
        // Chart Parkir
        let ctx = document.getElementById('chartparkir').getContext('2d');
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ['On Street', 'Off Street'],
                datasets: [{
                    label: 'On Street',
                    backgroundColor: 'rgb(250, 151, 99)',
                    borderColor: 'rgb(250, 151, 99)',
                    data: [2, 0]
                }, {
                    label: 'Off Street',
                    backgroundColor: 'rgb(243, 255, 99)',
                    borderColor: 'rgb(243, 255, 99)',
                    data: [0, 2]
                }]
            }
        });

        // Chart Sanitasi
        ctx = document.getElementById('chartsarana-sanitasi').getContext('2d');
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ['MCK UMUM', 'TPS'],
                datasets: [{
                    label: 'MCK UMUM',
                    backgroundColor: 'rgb(99, 128, 250)',
                    data: [4, 0]
                }, {
                    label: 'TPS',
                    backgroundColor: 'rgb(255, 147, 99)',
                    data: [0, 1]
                }]
            }
        });

        // Chart FJ ringkasan
        ctx = document.getElementById("chartsarana-fj-ringkasan").getContext("2d");
        let data = {
            labels: ['Landmark', 'Signage'],
            datasets: [{
                //                label: "Penjualan Barang",
                data: [1, 19],
                backgroundColor: [
                    '#E88752',
                    '#6676AE',
                    '#F07124',
                    '#CBE0E3',
                    '#979193'
                ]
            }]
        };

        new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {}
        });

        // Plugin Register
        Chart.plugins.register({
            afterDatasetsDraw: function(chartInstance, easing) {
                // To only draw at the end of animation, check for easing === 1
                let ctx = chartInstance.chart.ctx;
                chartInstance.data.datasets.forEach(function(dataset, i) {
                    let meta = chartInstance.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function(element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = '#ffffff';
                            let fontSize = 16;
                            let fontStyle = 'normal';
                            let fontFamily = 'lato';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            // Just naively convert to string for now
                            let dataString = dataset.data[index].toString();
                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            let padding = 5;
                            let position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        });

        // Chart SK
        ctx = document.getElementById('chartsarana-sk').getContext('2d');
        new Chart(ctx, {
            // The type of chart we want to create
            type: 'horizontalBar',

            // The data for our dataset
            data: {
                labels: ['Perdagangan dan Jasa', 'Pendidikan', 'Pemerintahan dan Pelayanan Umum', 'Peribadatan'],
                datasets: [{
                    label: 'Sarana Kampung',
                    backgroundColor: 'rgb(252, 222, 60)',
                    borderColor: 'rgb(252, 222, 60,0.7)',
                    data: [4.5, 2, 3, 5, 0]
                }]
            }
        });
    }, [])

    const setOnClick = (e, id) => {

    }

    const params = {
        grabCursor: true,
        keyboard: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }

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
                        <img className="img-ttgkm" src={require("../../img/peta-sp-lp.jpg")} />
                        
                        <div className="button-sosbud-map">
                            <a className="btn btn-md btn-info display-4" href="#peta-sp-lp" onClick={(e) => setOnClick(e, "peta-sp-lp")}>Peta Sarana Prasarana Parkir</a>
                            </div>

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
                                        <a href="#peta-sp-lp" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-lp")}>

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
                                        <a href="#peta-sp-lp" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp")}>
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

                        {/* Swiper Parkir */}
                        <Swiper {...params}>
                            <div>
                                <img src={require("../../img/peta-sp-lp1.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                                <img src={require("../../img/peta-sp-lp2.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                                <img src={require("../../img/peta-sp-lp3.jpg")} style={{width:"100%"}}/>
                            </div>
                        </Swiper>
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
                        <img className="img-ttgkm" src={require("../../img/peta-sp-ss.jpg")} id="peta-sp-ss" />                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-ss" onClick={(e) => setOnClick(e, "peta-sp-ss")}>Peta Sanitasi Sampah</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-ss" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-lp")}>
                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a>
                                    </li>
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
                                        <a href="#peta-sp-ss" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp")}>
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
                                        </a>
                                    </li>
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
                        {/* Swiper Parkir */}
                        <Swiper {...params}>
                            <div>
                                <img src={require("../../img/peta-sp-ss3.1.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                                <img src={require("../../img/peta-sp-ss2.1.jpg")} style={{width:"100%"}}/></div>
                            <div>
                                <img src={require("../../img/peta-sp-ss1.1.jpg")} style={{width:"100%"}}/></div>
                        </Swiper>
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
                        <img className="img-ttgkm" src={require("../../img/peta-sp-fj.jpg")} id="peta-sp-fj" />
                    
                        <div className="button-sosbud-map">
                            <a className="btn btn-md btn-info display-4" href="#peta-sp-fj" onClick={(e) => setOnClick(e, "peta-sp-fj")}>Peta Fasilitas Jalan</a>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-lp")}>
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
                                        <a href="#peta-sp" className="linkpeta" onClick=   {(e) => setOnClick(e, "peta-sp")}>
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
                        {/* Swiper Fasi jalan */}
                        <Swiper {...params}>
                            <div>
                                <img src={require("../../img/peta-sp-fj1.1.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                                <img src={require("../../img/peta-sp-fj2.1.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                                <img src={require("../../img/peta-sp-fj3.1.jpg")} style={{width:"100%"}}/>
                            </div>
                        </Swiper>
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
                        <img className="img-ttgkm" src={require("../../img/peta-sp-sl.jpg")} id="peta-sp-sl" />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-sl" onClick={(e) => setOnClick(e, "peta-sp-sl")}>Peta Sarana Lingkungan</a></div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/banksampah.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Bank Sampah
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/biopori.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Biopori
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/kebunpembibitan.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Kebun Pembibitan
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/komposter.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Komposter
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/kranair.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Kran Air
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/pergola.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Pergola
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
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
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
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
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
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
                        
                        {/* Swiper Sarana Lingkungan */}
                        <Swiper {...params}>
                            <div>
                            <img src={require("../../img/peta-sp-sl1.1.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                            <img src={require("../../img/peta-sp-sl2.1.jpg")} style={{width:"100%"}}/></div>
                            <div>
                            <img src={require("../../img/peta-sp-sl3.1.jpg")} style={{width:"100%"}}/></div>
                            <div>
                            <img src={require("../../img/peta-sp-sl4.1.jpg")} style={{width:"100%"}}/></div>
                            <div>
                            <img src={require("../../img/peta-sp-sl5.1.jpg")} style={{width:"100%"}}/></div>
                        </Swiper>
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
            </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
            <h4 id="judul-home">Sarana Kampung</h4>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-ttgkm" src={require("../../img/peta-sp-sk.jpg")} id="peta-sp-sk" />
                        
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-sp-sk" onClick={(e) => setOnClick(e, "peta-sp-sk")}>Peta Sarana Lingkungan</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign:" left"}}>Keterangan</h4>
                        <hr/>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>

                                            <span className="fa-li" style={{display: "inline", width:" 100%", textAlign: "left"}}>
                                                <img src={require("../../img/sosbud-batas-rt.JPG")} style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a></li>
                                </ul>
                                <h6>Toponimi</h6>
                                <ul className="fa-ul">
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/banksampah.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>Pelayanan Umum
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li" style={{marginLeft:" -0.15rem"}}>
                                                <img src={require("../../img/kebunpembibitan.JPG")} style={{width:"1.5rem", height:" 1.5rem"}}/>
                                            </span>
                                            <span style={{marginLeft:" -0.69rem"}}>
                                                Keamanan
                                            </span>
                                        </a></li>
                                    <li style={{marginBottom:" 0.5rem"}}>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
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

                                        <a href="#peta-sb" className="linkpeta" onClick=   {(e) => setOnClick(e, "peta-sp-sb")}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" rgb(111, 255, 99)"}}></p>
                                            </span>Peribadatan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick=   {(e) => setOnClick(e, "peta-sp-sb")}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" #334ec1"}}></p>
                                            </span>Pemerintahan dan pelayanan Umum
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick=   {(e) => setOnClick(e, "peta-sp-sb")}>
                                            <span className="fa-li">
                                                <p style={{width:" 1.8rem",height:" 1rem", background:" #691f1f"}}></p>
                                            </span>Pendidikan
                                        </a></li>
                                    <li>
                                        <a href="#peta-sb" className="linkpeta" onClick=   {(e) => setOnClick(e, "peta-sp-sb")}>
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
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#5da2ff"}}/></span>Drainase
                                        </a>
                                    </li>
                                </ul>
                                <h6>Jaringan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both",width:" 1.8rem", borderColor: "#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-sp-sl" className="linkpeta" onClick={(e) => setOnClick(e, "peta-sp-sl")}>
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
                            
                        {/* Swiper Sarana Kampung */}
                        <Swiper {...params}>
                            <div>
                            <img src={require("../../img/peta-sp-sk1.jpg")} style={{width:"100%"}}/>
                            </div>
                            <div>
                            <img src={require("../../img/peta-sp-sk2.jpg")} style={{width:"100%"}}/></div>
                            <div>
                            <img src={require("../../img/peta-sp-sk3.jpg")} style={{width:"100%"}}/></div>
                            <div>
                            <img src={require("../../img/peta-sp-sk4.jpg")} style={{width:"100%"}}/></div>
                            <div>
                            <img src={require("../../img/peta-sp-sk5.jpg")} style={{width:"100%"}}/></div>
                        </Swiper>                            
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
            </div>
        </div>
    </div>

    <br />        
    <br />
        </React.Fragment>
    )
}
