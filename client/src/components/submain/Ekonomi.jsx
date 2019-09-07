import React from "react"
import Chart from "chart.js"

export default function Ekonomi() {
  // Import Image
  const petaE = require("../../img/peta-e.jpg")
  const petaEMPS = require("../../img/peta-e-mps.jpg")
  const petaEMPM = require("../../img/peta-e-mpm.jpg")

  const setOnClick = (e, type) => {
    e.preventDefault()

    switch (type.toLowerCase()) {
      case "peta-e":
        document.getElementById(type).src = petaE
        break;
      case "peta-e-mps":
        document.getElementById(type).src = petaEMPS
        break;
      default:
        window.alert("Gagal")
        break;
    }
  }

  React.useEffect(() => {

    // Chart Ekonomi
    let ctx = document.getElementById('chartekonomi').getContext('2d');
    new Chart(ctx, {
        responsive: true,
        aspectRatio: 2,
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['PNS', 'TNI-POLRI', 'Karyawan Swasta', 'Pedagang Warung Sembako', 'Pedagang Makanan', 'Pedagang Tanaman', 'Bimbingan Belajar', 'Katering', 'Reparasi Alat Elektronik', 'Penjahit', 'Tukang Bangunan', 'Asisten Rumah Tangga', 'Lain-lain', 'PNS dan lain-lain', 'Karyawan Swasta dan Lain-lain', 'Karyawan Swasta dan Pedagang Makanan', 'Penjahit dan Lain-lain', 'TNI-POLRI dan Katering', 'Pedagang Makanan dan Tukang Bangunan', 'Pedagang Warung Sembako dan Makanan', 'No Data'],
            datasets: [{
                label: 'Jenis Mata Pencaharian',
                backgroundColor: 'rgb(255, 200, 97)',
                borderColor: 'rgb(255, 200, 97)',
                data: [7.62, 2.64, 28.74, 7.92, 9.38, 0.29, 0.29, 0.88, 0.29, 1.76, 1.47, 0.59, 19.06, 0.59, 0.59, 0.29, 0.29, 0.29, 0.29, 0.29, 16.42]
            }]
        }
    });

    // Chart Ringkasan
    ctx = document.getElementById("chartekonomi-ringkasan").getContext("2d");
    let data = {
        labels: ['Pekerjaan Tetap (Gaji UMR)', 'Pekerjaan Tidak Tetap'],
        datasets: [{
            // label: "Penjualan Barang",
            data: [39, 61],
            backgroundColor: [
                '#29d05c',
                '#2a6e54',
                '#F07124',
                '#CBE0E3',
                '#979193'
            ]
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: data
    });

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
                        let fontSize = 11;
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
                        ctx.fillText(dataString + '%', position.x, position.y - (fontSize / 2) - padding);
                    });
                }
            });
        }
    });

  }, [])

  return (
    <React.Fragment>
      <div id="tentangkami-ekonomi">
        <section className="home" id="header1-1">
          <div className="layer">
            <div className="container text-content" id="text-caption-ekonomi">
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
                        <img className="img-ttgkm" alt="foto.jpg" src={require("../../img/peta-e.jpg")} id="peta-e" />
                        <div className="button-sosbud-map">
                            <a 
                            className="btn btn-md btn-info display-4" 
                            href="#peta-e" 
                            onClick={e => setOnClick(e, "peta-e")} data-toggle="modal" 
                            data-target="#modal-e">
                                Peta Pekerjaan Utama
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p>Aspek ekonomi membahas tentang jenis mata pencaharian utama, jenis mata pencaharian sampingan, dan keterlibatan masyarakat dalam kelembagaan koperasi.</p>
                        <h4 style={{textAlign: "left"}}>Keterangan</h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">             
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#E0E1B6"}}></p>
                                            </span>Pedagang Makanan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#A48046"}}></p>
                                            </span>Reparasi Alat Elektronik
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#E4B2BE"}}></p>
                                            </span>Pedagang Warung Sembako
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#D85248"}}></p>
                                            </span>Tukang Bangunan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#98C753"}}></p>
                                            </span>Penjahit
                                        </a>
                                      </li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
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
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem",borderColor:"#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem", borderTop:"3px dashed #000000 "}}/></span>Rel Kereta Api
                                        </a>
                                    </li>
                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e" className="linkpeta" onClick={e => setOnClick(e, "peta-e")}>

                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img alt="foto.jpg" src={require("../../img/sosbud-batas-rt.JPG" )}style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img id="pic-ekonomi" alt="foto.jpg" src={require("../../img/peta-e-mpm1.jpg")} />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img id="pic-ekonomi" alt="foto.jpg" src={require("../../img/peta-e-mpm2.jpg")} />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img id="pic-ekonomi" alt="foto.jpg" src={require("../../img/peta-e-mpm3.jpg")} />
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
                        <img className="img-ttgkm" alt="foto.jpg" src={require("../../img/peta-e-mps.jpg" )} id="peta-e-mps" />
                        <div className="button-sosbud-map"><a className="btn btn-md btn-info display-4" href="#peta-e-mps" onClick={e => setOnClick(e, "peta-e-mps")} data-toggle="modal" data-target="#modal-e-mps">Peta Pekerjaan Sampingan</a></div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h4 style={{textAlign: "left"}}>Keterangan </h4>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h6>Jenis Mata Pencaharian Sampingan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img alt="foto.jpg" src={require("../../img/nodata.JPG")} style={{width:"1.8rem", height:" 1.1rem", marginBottom: "1rem"}}/>
                                            </span>
                                            No Data
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#98C753"}}></p>
                                            </span>Punya
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
                                            <span className="fa-li">
                                                <p style={{width: "1.8rem",height: "1rem", background: "#E3E057"}}></p>
                                            </span>Tidak Punya
                                        </a>
                                    </li>
                                </ul>
                                <h6>Perairan</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
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
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem",borderColor:"#000000"}}/></span>Jalan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
                                            <span className="fa-li">
                                                <hr className="style1" style={{clear:" both", width:" 1.8rem", borderTop:"3px dashed #000000 "}}/></span>Rel Kereta Api
                                        </a>
                                    </li>

                                </ul>
                                <h6>Administrasi</h6>
                                <ul className="fa-ul">
                                    <li>
                                        <a href="#peta-e-mps" className="linkpeta" onClick={e => setOnClick(e, "peta-e-mps")}>
                                            <span className="fa-li" style={{display:" inline", width:" 100%", textAlign:" left"}}>
                                                <img alt="foto.jpg" src={require("../../img/sosbud-batas-rt.JPG" )}style={{width:"2rem", height:"1.2rem"}}/> Batas RT
                                            </span>
                                        </a>
                                    </li>
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

    {/* Modals */}
    <div className="modal fade" id="modal-e" role="dialog">
        <div className="modal-dialog modal-lg">

             {/* <!-- Modal content--> */}
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Peta Pekerjaan Utama</h5>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={petaEMPM} id="modal-img" alt="peta.jpg"/> </div>
                     </div>
                </div>
            </div>
        </div>
    </div>

     <div className="modal fade" id="modal-e-mps" role="dialog">
        <div className="modal-dialog modal-lg">

             {/* <!-- Modal content--> */}
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Peta Pekerjaan  Sampingan</h5>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={petaEMPS} id="modal-img" alt="peta.jpg"/> </div>

                     </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}
