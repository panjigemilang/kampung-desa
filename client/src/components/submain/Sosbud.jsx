import React from "react"
import Chart from "chart.js"

export default function Sosbud() {
  const petaSBSPP = require("../../img/peta-sb-spp.jpg")
  const petaSB = require("../../img/peta-sb.jpg")
  const petaSBPuas = require("../../img/peta-sb-puas.jpg")
  const petaSBTidakPuas = require("../../img/peta-sb-tidakpuas.jpg")
  const petaSBnodata = require("../../img/peta-sb-nodata.jpg")
  const petaSBJalan = require("../../img/peta-sb-jalan.jpg")
  const petaSBrel = require("../../img/peta-sb-rel.jpg")
  const petaSBBPJS = require("../../img/peta-sb-bpjs.jpg")
  const petaSBPPP = require("../../img/peta-sb-ppp.jpg")
  const petaSBButa = require("../../img/peta-sb-buta.jpg")
  const petaSBkpip = require("../../img/peta-sb-kpip.jpg")
  const petaSBkmtk = require("../../img/peta-sb-kmtk.jpg")
  const petaSBkmk = require("../../img/peta-sb-kmk.jpg")

  const setOnClick = (e, type) => {
    e.preventDefault()

    switch (type.toLowerCase()) {
      case "peta-sb":
        document.getElementById(type).src = petaSB
        break
      case "peta-sb-puas":
        document.getElementById("peta-sb").src = petaSBPuas
        break
      case "peta-sb-takpuas":
        document.getElementById("peta-sb").src = petaSBTidakPuas
        break
      case "peta-sb-nodata":
        document.getElementById("peta-sb").src = petaSBnodata
        break
      case "peta-sb-jalan":
        document.getElementById("peta-sb").src = petaSBJalan
        break
      case "peta-sb-rel":
        document.getElementById("peta-sb").src = petaSBrel
        break
      case "peta-sb-bpjs":
        document.getElementById(type).src = petaSBBPJS
        break
      case "peta-sb-spp":
        document.getElementById(type).src = petaSBSPP
        break
      case "peta-sb-ppp":
        document.getElementById(type).src = petaSBPPP
        break
      case "peta-sb-buta":
        document.getElementById(type).src = petaSBButa
        break
      case "peta-sb-kpip":
        document.getElementById(type).src = petaSBkpip
        break
      case "peta-sb-kmtk":
        document.getElementById(type).src = petaSBkmtk
        break
      case "peta-sb-kmk":
        document.getElementById(type).src = petaSBkmk
        break
      default:
        window.alert("Kosong coyyy")
        break
    }
  }

  React.useEffect(() => {
    // Chart Sosbud
    let ctx = document.getElementById("chartsosbud").getContext("2d")
    new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [
          "RT 01",
          "RT 02",
          "RT 03",
          "RT 04",
          "RT 05",
          "RT 06",
          "RT 07",
          "RT 08",
          "RT 09"
        ],
        datasets: [
          {
            label: "Puas",
            backgroundColor: "rgb(250, 151, 99,0.7)",
            borderColor: "rgb(250, 151, 99,0.7)",
            data: [32, 51, 36, 45, 37, 0, 0, 0, 0]
          },
          {
            label: "Tidak Puas",
            backgroundColor: "rgb(243, 255, 99,0.7)",
            borderColor: "rgb(243, 255, 99,0.7)",
            data: [2, 4, 1, 7, 2, 18, 7, 9, 1]
          },
          {
            label: "Tidak Menjawab",
            backgroundColor: "rgb(111, 255, 99,0.7)",
            borderColor: "rgb(111, 255, 99,0.7)",
            data: [0, 0, 0, 4, 7, 26, 18, 29, 9]
          }
        ]
      }
    })

    // Chart BPJS
    ctx = document.getElementById("chartsosbud-bpjs").getContext("2d")
    new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [
          "RT 01",
          "RT 02",
          "RT 03",
          "RT 04",
          "RT 05",
          "RT 06",
          "RT 07",
          "RT 08",
          "RT 09"
        ],
        datasets: [
          {
            label: "Mengikuti",
            backgroundColor: "rgb(76, 106, 169,0.7)",
            borderColor: "rgb(76, 106, 169,0.7)",
            data: [23, 29, 20, 39, 26, 27, 17, 6, 7]
          },
          {
            label: "Tidak Mengikuti",
            backgroundColor: "rgb(235, 140, 67,0.7)",
            borderColor: "rgb(235, 140, 67 ,0.7)",
            data: [13, 18, 10, 11, 8, 4, 2, 3, 2]
          },
          {
            label: "Tidak Menjawab",
            backgroundColor: "rgb(164, 168, 163,0.7)",
            borderColor: "rgb(164, 168, 163,0.7)",
            data: [4, 9, 7, 6, 12, 13, 6, 9, 1]
          }
        ]
      }
    })

    // Donut Chart
    ctx = document.getElementById("chartsosbud-bpjs-ringkasan").getContext("2d")
    let data = {
      labels: ["Mengikuti", "Tidak Mengikuti"],
      datasets: [
        {
          data: [194, 71],
          backgroundColor: [
            "#29B0D0",
            "#2A516E",
            "#F07124",
            "#CBE0E3",
            "#979193"
          ]
        }
      ]
    }

    new Chart(ctx, {
      type: "doughnut",
      data: data
    })

    // Chart SPP
    ctx = document.getElementById("chartsosbud-spp").getContext("2d")
    new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [
          "RT 01",
          "RT 02",
          "RT 03",
          "RT 04",
          "RT 05",
          "RT 06",
          "RT 07",
          "RT 08",
          "RT 09"
        ],
        datasets: [
          {
            label: "Pribadi",
            backgroundColor: "rgb(225, 112, 25,0.7)",
            borderColor: "rgb(225, 112, 25,0.7)",
            data: [26, 24, 23, 28, 28, 29, 13, 26, 4]
          },
          {
            label: "Beasiswa",
            backgroundColor: "rgb(237, 181, 27,0.7)",
            borderColor: "rgb(237, 181, 27,0.7)",
            data: [1, 0, 0, 3, 3, 0, 2, 0, 1]
          },
          {
            label: "Bantuan Sosial",
            backgroundColor: "rgb(128, 172, 40,0.7)",
            borderColor: "rgb(128, 172, 40,0.7)",
            data: [0, 1, 2, 3, 1, 0, 0, 0, 0]
          },
          {
            label: "Dll",
            backgroundColor: "rgb(124, 31, 6,0.7)",
            borderColor: "rgb(124, 31, 6,0.7)",
            data: [0, 4, 2, 1, 2, 1, 1, 0, 0]
          },
          {
            label: "Tidak Menjawab",
            backgroundColor: "rgb(139, 116, 63,0.7)",
            borderColor: "rgb(139, 116, 63,0.7)",
            data: [11, 28, 13, 25, 16, 14, 10, 12, 5]
          }
        ]
      }
    })

    // Chart Donut SPP ringkasan
    ctx = document.getElementById("chartsosbud-spp-ringkasan").getContext("2d")
    data = {
      labels: ["Dana Pribadi", "Beasiswa", "Bantuan Sosial", "Dana Lain"],
      datasets: [
        {
          data: [201, 10, 7, 11],
          backgroundColor: ["#A8DBA8", "#56d895", "#3B8686", "#0B486B"]
        }
      ]
    }

    new Chart(ctx, {
      type: "doughnut",
      data: data
    })

    // Chart PPP
    ctx = document.getElementById("chartsosbud-ppp").getContext("2d")
    new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",
      // The data for our dataset
      data: {
        labels: [
          "RT 01",
          "RT 02",
          "RT 03",
          "RT 04",
          "RT 05",
          "RT 06",
          "RT 07",
          "RT 08",
          "RT 09"
        ],
        datasets: [
          {
            label: "Terus dilaksanakan",
            backgroundColor: "rgb(237, 181, 27,0.7)",
            borderColor: "rgb(237, 181, 27,0.7)",
            data: [37, 56, 38, 55, 46, 44, 25, 38, 10]
          },
          {
            label: "Sosialisasi ke Semua Masyarakat",
            backgroundColor: "rgb(225, 112, 25,0.7)",
            borderColor: "rgb(225, 112, 25,0.7)",
            data: [1, 0, 0, 1, 0, 0, 0, 0, 0]
          }
        ]
      }
    })

    // Chart Donut ppp ringkasan
    ctx = document.getElementById("chartsosbud-ppp-ringkasan").getContext("2d")
    data = {
      labels: ["Terus Dilaksanakan", "Sosialisasi ke Masyarakat"],
      datasets: [
        {
          data: [349, 2],
          backgroundColor: [
            "#ff6363",
            "#ffc400",
            "#4d7e65",
            "#3B8686",
            "#0B486B"
          ]
        }
      ]
    }

    new Chart(ctx, {
      type: "doughnut",
      data: data
    })

    // Chart buta
    ctx = document.getElementById("chartsosbud-buta").getContext("2d")
    new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [
          "RT 01",
          "RT 02",
          "RT 03",
          "RT 04",
          "RT 05",
          "RT 06",
          "RT 07",
          "RT 08",
          "RT 09"
        ],
        datasets: [
          {
            label: "Mengikuti",
            backgroundColor: "rgb(34, 54, 92,0.7)",
            borderColor: "rgb(34, 54, 92,0.7)",
            data: [0, 1, 0, 1, 0, 0, 0, 0, 0]
          },
          {
            label: "Tidak Mengikuti",
            backgroundColor: "rgb(221, 128, 74,0.7)",
            borderColor: "rgb(225, 112, 25,0.7)",
            data: [33, 45, 32, 35, 36, 0, 0, 0, 8]
          },
          {
            label: "Tidak Menjawab",
            backgroundColor: "rgb(170, 166, 161,0.7)",
            borderColor: "rgb(170, 166, 161,0.7)",
            data: [5, 10, 6, 20, 10, 44, 24, 28, 2]
          }
        ]
      }
    })

    // Chart Donut buta Ringkasan
    ctx = document.getElementById("chartsosbud-buta-ringkasan").getContext("2d")
    data = {
      labels: ["Mengikuti", "Tidak Mengikuti", "Tidak Menjawab"],
      datasets: [
        {
          data: [2, 159, 189],
          backgroundColor: [
            "#ff6363",
            "#ffc400",
            "#4d7e65",
            "#3B8686",
            "#0B486B"
          ]
        }
      ]
    }

    new Chart(ctx, {
      type: "doughnut",
      data: data
    })

    // Chart kpip
    ctx = document.getElementById("chartsosbud-kpip").getContext("2d")
    new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [
          "RT 01",
          "RT 02",
          "RT 03",
          "RT 04",
          "RT 05",
          "RT 06",
          "RT 07",
          "RT 08",
          "RT 09"
        ],
        datasets: [
          {
            label: "Taman Bacaan",
            backgroundColor: "rgb(104, 125, 180,0.7)",
            borderColor: "rgb(104, 125, 180,0.7)",
            data: [5, 1, 5, 8, 2, 1, 5, 5, 1]
          },
          {
            label: "Taman Bacaan, Internet",
            backgroundColor: "rgb(160, 164, 153,0.7)",
            borderColor: "rgb(160, 164, 153,0.7)",
            data: [31, 53, 25, 37, 32, 36, 16, 29, 7]
          },
          {
            label: "Internet",
            backgroundColor: "rgb(226, 148, 100,0.7)",
            borderColor: "rgb(226, 148, 100,0.7)",
            data: [0, 1, 1, 1, 1, 2, 0, 2, 1]
          },
          {
            label: "Tidak Menjawab",
            backgroundColor: "rgb(235, 193, 92,0.7)",
            borderColor: "rgb(235, 193, 92,0.7)",
            data: [2, 1, 7, 11, 11, 5, 4, 2, 1]
          }
        ]
      }

      // Configuration options go here
    })

    // Chart KPIP ringkasan
    ctx = document.getElementById("chartsosbud-kpip-ringkasan").getContext("2d")
    data = {
      labels: [
        "Pengembangan Internet",
        "Pengembangan Taman Bacaan",
        "Pengembangan Taman Bacaan dan Internet"
      ],
      datasets: [
        {
          data: [33, 9, 266],
          backgroundColor: [
            "#c363ff",
            "#7f5df0",
            "#ea793d",
            "#3B8686",
            "#0B486B"
          ]
        }
      ]
    }

    new Chart(ctx, {
      type: "doughnut",
      data: data
    })

    // Chart KMTK ringkasan
    ctx = document.getElementById("chartsosbud-kmtk-ringkasan").getContext("2d")
    data = {
      labels: [
        "Ronda",
        "Iuran",
        "Ronda & Iuran",
        "Iuran & lain-lain",
        "Ronda & lain-lain",
        "Lain-lain",
        "No Data"
      ],
      datasets: [
        {
          data: [23, 43, 6, 0, 0, 2, 26],
          backgroundColor: [
            "#365db7",
            "#f08a5d",
            "#eac23d",
            "#559dff",
            "#297c26",
            "#7f7f80",
            "#1f285c"
          ]
        }
      ]
    }

    new Chart(ctx, {
      type: "pie",
      data: data
    })

    // Chart KMK ringkasan
    ctx = document.getElementById("chartsosbud-kmk-ringkasan").getContext("2d")
    data = {
      labels: ["Ikut", "Tidak Ikut", "No Data"],
      datasets: [
        {
          data: [23, 55, 22],
          backgroundColor: ["#365db7", "#f08a5d", "#848484"]
        }
      ]
    }
    new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        responsive: true
      }
    })
  }, [])

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
      </div>

      <div className="container" id="utama">
        <div id="kami" className="container pb-2 kampungan">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb.jpg")}
                  id="peta-sb"
                />

                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb"
                    onClick={e => setOnClick(e, "peta-sb")}
                    data-toggle="modal"
                    data-target="#modal-sb"
                  >
                    Peta Sosial Budaya
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p>
                  Aset sosial-budaya masyarakat meliputi pelayanan fasilitas
                  sosial seperti kesehatan dan pendidikan. Selain itu juga
                  menyangkut keterlibatan warga dalam kegiatan kegiatan sosial
                  dan budaya seperti program kesehatan BPJS, pemberantasan buta
                  huruf, program kebutuhan khusus, pemberantasan kemiskinan,
                  posyandu, keamanan, dan gotong royong. Pendataan aset
                  sosial-budaya juga mencakup kemungkinan pengembangan informasi
                  dan pengetahuan.
                </p>
                <h4>Keterangan</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Tingkat Kepuasan Fasilitas Kesehatan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-puas")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " rgb(11, 255, 99)"
                              }}
                            ></p>
                          </span>
                          Puas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-takpuas")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " red"
                              }}
                            ></p>
                          </span>
                          Tidak Puas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-nodata")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/nodata.JPG")}
                              style={{
                                width: "1.8rem",
                                height: " 1.1rem",
                                marginBottom: " 1rem"
                              }}
                            />
                          </span>
                          No Data
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-jalan")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-rel")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
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
                <h4>Tingkat Kepuasan Fasilitas Kesehatan</h4>
                <hr />
                <canvas id="chartsosbud"></canvas>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12" id="alasan">
                <h4>Tanggapan MengenaiKepuasan Fasilitas Kesehatan</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row justify-content-center">
                      <div className="box-item col-md-12 tujuan-left">
                        <h6>Puas</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>Pelayanannya baik dan ramah</li>
                          <li>Harganya terjangkau</li>
                          <li>memiliki BPJS / tunjangan lainnya</li>
                        </ul>
                      </div>
                      <div className="box-item col-lg-12 col-md-4 tujuan-right">
                        <h6>Tidak Puas</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>Pelayanannya baik dan ramah</li>
                          <li>Harganya terjangkau</li>
                          <li>memiliki BPJS / tunjangan lainnya</li>
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
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-bpjs.jpg")}
                  id="peta-sb-bpjs"
                />

                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-bpjs"
                    onClick={e => setOnClick(e, "peta-sb-bpjs")}
                    data-toggle="modal"
                    data-target="#modal-sb-bpjs"
                  >
                    Peta BPJS
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Tingkat Keikutsertaan Program BPJS</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #E4E4AE"
                              }}
                            ></p>
                          </span>
                          Nol
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #BD5E55"
                              }}
                            ></p>
                          </span>
                          Mengikuti
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #a0e6b8"
                              }}
                            ></p>
                          </span>
                          Tidak Mengikuti
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-bpjs"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-bpjs")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Grafik Keikutsertaan dalam BPJS
                </h4>
                <canvas id="chartsosbud-bpjs"></canvas>
                <hr />
                <h4 style={{ textAlign: "center" }}>Ringkasan Peserta BPJS</h4>
                <hr />
                <canvas id="chartsosbud-bpjs-ringkasan"></canvas>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12" id="alasan">
                <h4>Pendapat tentang BPJS</h4>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div
                      className="text-white"
                      style={{ background: "#494e83" }}
                    >
                      <div className="card-body">
                        <h6>Mengikuti :</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Membantu masyarakat dalam mengakases kesehatan
                          </li>
                          <li>Melayani dengan baik</li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div
                      className=" text-white tidakpuas"
                      style={{ background: "rgb(255, 135, 99)" }}
                    >
                      <div className="card-body">
                        <h6>Tidak Mengikuti</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Tidak semua rumah sakit dapat melayani pengguna BPJS
                          </li>
                          <li>Tidak semua obat bisa diakses oleh BPJS</li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div
                      className=" text-white tidakpuas"
                      style={{ background: "rgb(121, 121, 121)" }}
                    >
                      <div className="card-body">
                        <h6>Saran Kepada BPJS</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>Pelayanan ke semua masyarkat harus sama</li>
                          <li>Tidak sulit dalam mengakses obat-obatan</li>
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
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-spp.jpg")}
                  id="peta-sb-spp"
                />

                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-spp"
                    onClick={e => setOnClick(e, "peta-sb-spp")}
                    data-toggle="modal"
                    data-target="#modal-sb-spp"
                  >
                    Peta Pendidikan
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-spp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-spp")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-spp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-spp")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-spp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-spp")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-spp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-spp")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h6> Sumber Pembiayaan Pendidikan</h6>
                <ul className="fa-ul">
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span
                        className="fa-li"
                        style={{
                          display: " inline",
                          width: " 100%",
                          textAlign: " left"
                        }}
                      >
                        <img
                          src={require("../../img/nodata.JPG")}
                          style={{
                            width: "1.8rem",
                            height: " 1.1rem",
                            marginBottom: " 1rem"
                          }}
                        />
                      </span>
                      Nol
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #BEDCEE"
                          }}
                        ></p>
                      </span>
                      Surat Menyurat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #E1B6C2"
                          }}
                        ></p>
                      </span>
                      Harus Merata
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #C7E1E1"
                          }}
                        ></p>
                      </span>
                      Keringanan Biaya, Lain-lain
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #E3A6CF"
                          }}
                        ></p>
                      </span>
                      Lain-lain
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #4E0013"
                          }}
                        ></p>
                      </span>
                      Perketat, Tingkatkan, dan Konsekuensi dalam Memberikan
                      Bantuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #D38947"
                          }}
                        ></p>
                      </span>
                      Harus Merata, Perketat, Tingkatkan, dan Konsekuensi dalam
                      Memberikan Bantuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #A0D2E9"
                          }}
                        ></p>
                      </span>
                      Tepat Sasaran dan Konsekuensi dalam Memberikan Bantuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #E2E5ED"
                          }}
                        ></p>
                      </span>
                      Keringanan, Perketat, Tingkatkan, dan Konsekuensi dalam
                      Memberikan Bantuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #E7E4BB"
                          }}
                        ></p>
                      </span>
                      Keringanan Biaya, Permudah urusan Surat Menyurat, Tepat
                      Sasaran, Harus Merata, Perketat, Tingkatkan, dan
                      Konsekuensi dalam Memberikan Bantuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #EE4C10"
                          }}
                        ></p>
                      </span>
                      Surat Menyurat, Perketat, Tingkatkan, dan Konsekuensi
                      dalam Memberikan Bantuan
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #E7E37A"
                          }}
                        ></p>
                      </span>
                      Keringanan Biaya
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #8FBE5E"
                          }}
                        ></p>
                      </span>
                      Tepat Sasaran
                    </a>
                  </li>
                  <li>
                    <a
                      href="#peta-sb-spp"
                      className="linkpeta"
                      onClick={e => setOnClick(e, "peta-sb-spp")}
                    >
                      <span className="fa-li">
                        <p
                          style={{
                            width: " 1.8rem",
                            height: " 1rem",
                            background: " #4C0957"
                          }}
                        ></p>
                      </span>
                      Tepat Sasaran, Harus Merata
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Grafik Sumber Biaya Pendidikan
                </h4>
                <canvas id="chartsosbud-spp"></canvas>
                <hr />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Ringkasan Sumber Biaya Pendidikan
                </h4>
                <hr />
                <canvas id="chartsosbud-spp-ringkasan"></canvas>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12" id="alasan">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div
                      className="text-white"
                      style={{ background: "#494e83" }}
                    >
                      <div className="card-body">
                        <h6>Saran untuk pembiayaan pendidikan:</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>Tepat sasaran</li>
                          <li>Permudah urusan surat-menyurat</li>
                          <li>
                            Perketat, tingkatkan, dan konsekuen dalam memberikan
                            bantuan
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
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-ppp.jpg")}
                  id="peta-sb-ppp"
                />

                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-ppp"
                    onClick={e => setOnClick(e, "peta-sb-ppp")}
                    data-toggle="modal"
                    data-target="#modal-sb-ppp"
                  >
                    Peta Pendidikan Khusus
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6> Tingkat Kepentingan Program Pendidikan Khusus</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-ppp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-ppp")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #554452"
                              }}
                            ></p>
                          </span>
                          Terus Dilaksanakan Karena ada Masyarakat yang
                          Membutuhkan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-ppp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-ppp")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #A5443D"
                              }}
                            ></p>
                          </span>
                          Sosialisasi ke Semua Masyarakat
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-ppp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-ppp")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-ppp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-ppp")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-ppp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-ppp")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-ppp"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-ppp")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Grafik Tingkat Kepentingan Program Pendidikan Khusus
                </h4>
                <canvas id="chartsosbud-ppp"></canvas>
                <hr />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Chart Hasil Kuesioner tentang Program Pendidikan Khusus
                </h4>
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
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-buta.jpg")}
                  id="peta-sb-buta"
                />

                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-buta"
                    onClick={e => setOnClick(e, "peta-sb-buta")}
                    data-toggle="modal"
                    data-target="#modal-sb-buta"
                  >
                    Peta Buta Huruf
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan </h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Keikutsertaan Program Buta Huruf</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #A1CAE0"
                              }}
                            ></p>
                          </span>
                          Nol
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #ffba8a"
                              }}
                            ></p>
                          </span>
                          Ada
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #8EB971"
                              }}
                            ></p>
                          </span>
                          Tidak Ada
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-buta"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-buta")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Grafik Tingkat Keikutsertaan dalam Program
                </h4>
                <canvas id="chartsosbud-buta"></canvas>
                <hr />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Ringkasan terhadap program Buta Huruf
                </h4>
                <hr />
                <canvas id="chartsosbud-buta-ringkasan"></canvas>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12" id="alasan">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div
                      className="text-white"
                      style={{ background: "#1d6c7b" }}
                    >
                      <div className="card-body">
                        <h6>Saran terhadap adanya Program ini:</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Terus Dilaksanakan, karena terdapat masyarakat yang
                            memerlukan
                          </li>
                          <li>
                            Sosialisasi yang lebih giat kepada Masyarakat
                            tentang Program ini
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
          <h4 id="judul-home">
            Kepentingan Pengembangan Informasi dan Pengetahuan
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-kpip.jpg")}
                  id="peta-sb-kpip"
                />
                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-kpip"
                    onClick={e => setOnClick(e, "peta-sb-kpip")}
                    data-toggle="modal"
                    data-target="#modal-sb-kpip"
                  >
                    Peta Pengembangan Informasi
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan </h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>
                      Tingkat Kepentingan Pengembangan Informasi dan Pengetahuan
                    </h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #92c856"
                              }}
                            ></p>
                          </span>
                          -
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #dd5443"
                              }}
                            ></p>
                          </span>
                          Taman Bacaan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #e37b46"
                              }}
                            ></p>
                          </span>
                          Internet
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #686ea9"
                              }}
                            ></p>
                          </span>
                          Taman Bacaan, Internet
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kpip"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kpip")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
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
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Grafik Tingkat Kepentingan Pengembangan Informasi dan
                  Pengetahuan
                </h4>
                <canvas id="chartsosbud-kpip"></canvas>
                <hr />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4 style={{ textAlign: "center" }}>
                  Pengembangan Informasi dan Pengetahuan
                </h4>
                <hr />
                <canvas id="chartsosbud-kpip-ringkasan"></canvas>
                <hr />
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
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-kmtk.jpg")}
                  id="peta-sb-kmtk"
                />

                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-kmtk"
                    onClick={e => setOnClick(e, "peta-sb-kmtk")}
                    data-toggle="modal"
                    data-target="#modal-sb-kmtk"
                  >
                    Peta Keamanan
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan </h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>
                      Jenis Keikutsertaan Masyarakat Terhadap Keamanan Kampung
                    </h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/nodata.JPG")}
                              style={{
                                width: "1.8rem",
                                height: " 1.1rem",
                                marginBottom: " 1rem"
                              }}
                            />
                          </span>
                          No Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #E1E3BA"
                              }}
                            ></p>
                          </span>
                          Ikut Jaga/ Ronda
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #D2ABC7"
                              }}
                            ></p>
                          </span>
                          Iuran
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #C6B7D4"
                              }}
                            ></p>
                          </span>
                          Lain-lain
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmtk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmtk")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h5 style={{ textAlign: "center" }}>
                    Presentase Keikutsertaan Masyarakat (%)
                  </h5>
                  <hr />
                  <canvas id="chartsosbud-kmtk-ringkasan"></canvas>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12"></div>
            </div>
          </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
          <h4 id="judul-home">Keterlibatan Masyarakat Dalam Koperasi</h4>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/peta-sb-kmk.jpg")}
                  id="peta-sb-kmk"
                />
                <div className="button-sosbud-map">
                  <a
                    className="btn btn-md btn-info display-4"
                    href="#peta-sb-kmk"
                    onClick={e => setOnClick(e, "peta-sb-kmk")}
                    data-toggle="modal"
                    data-target="#modal-sb-kmk"
                  >
                    Peta Koperasi
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h4>Keterangan</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Keikutsertaan Masyarakat dalam Kelembagaan Koperasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/nodata.JPG")}
                              style={{
                                width: "1.8rem",
                                height: " 1.1rem",
                                marginBottom: " 1rem"
                              }}
                            />
                          </span>
                          No Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #f2aaa3"
                              }}
                            ></p>
                          </span>
                          Mengikuti
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span className="fa-li">
                            <p
                              style={{
                                width: " 1.8rem",
                                height: " 1rem",
                                background: " #a0e6b8"
                              }}
                            ></p>
                          </span>
                          Tidak Mengikuti
                        </a>
                      </li>
                    </ul>
                    <h6>Perairan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#5da2ff"
                              }}
                            />
                          </span>
                          Drainase
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h6>Jaringan</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderColor: "#000000"
                              }}
                            />
                          </span>
                          Jalan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span className="fa-li">
                            <hr
                              className="style1"
                              style={{
                                clear: " both",
                                width: " 1.8rem",
                                borderTop: "3px dashed #000000 "
                              }}
                            />
                          </span>
                          Rel Kereta Api
                        </a>
                      </li>
                    </ul>
                    <h6>Administrasi</h6>
                    <ul className="fa-ul">
                      <li>
                        <a
                          href="#peta-sb-kmk"
                          className="linkpeta"
                          onClick={e => setOnClick(e, "peta-sb-kmk")}
                        >
                          <span
                            className="fa-li"
                            style={{
                              display: " inline",
                              width: " 100%",
                              textAlign: " left"
                            }}
                          >
                            <img
                              src={require("../../img/sosbud-batas-rt.JPG")}
                              style={{ width: "2rem", height: "1.2rem" }}
                            />
                            Batas RT
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 style={{ textAlign: "center" }}>
                    Ringkasan Jumlah Masyarakat (%)
                  </h4>
                  <hr />
                  <canvas id="chartsosbud-kmk-ringkasan"></canvas>
                </div>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12" id="alasan">
                <h4>Pendapat tentang Koperasi:</h4>
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div
                      className="text-white"
                      style={{ background: "#49834b" }}
                    >
                      <div className="card-body">
                        <h6>Kepuasan Terhadap Kinerja Koperasi:</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>Penyampaian dari pengurus sesuai</li>
                          <li>Mudah dalam proses peminjaman</li>
                          <li>Membantu meringankan masyarakat</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div
                      className=" text-white tidakpuas"
                      style={{ background: "rgb(54, 113, 124)" }}
                    >
                      <div
                        className="card-body"
                        style={{ height: " 14.5rem", marginBottom: "-2.5rem" }}
                      >
                        <h6>Ketidakpuasan Terhadap Kinerja Koperasi:</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>Visi dan Misi belum Jelas</li>
                          <li>
                            Hanya orang tertentu yang bisa menjadi anggota
                          </li>
                          <li>Sulit dalam proses peminjaman</li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <div
                      className=" text-white tidakpuas"
                      style={{ background: "rgb(123, 50, 50)" }}
                    >
                      <div className="card-body">
                        <h6>Tidak Bergabung dalam Koperasi:</h6>
                        <ul style={{ listStyleType: "circle" }}>
                          <li>
                            Masih mengikuti koperasi di tempat tinggal yang lama
                          </li>
                          <li>Sibuk Kerja</li>
                          <li>Visi dan Misi belum jelas</li>
                          <li>Tidak berminat</li>
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

      {/* MODALS */}
      <div className="modal fade" id="modal-sb" role="dialog">
        <div className="modal-dialog modal-lg">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Peta Pekerjaan Utama</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSB} id="modal-img" alt="peta.jpg" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-bpjs" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Peta Keikutsertaan BPJS</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBBPJS} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-spp" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Peta Sumber Biaya Pendidikan</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBSPP} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-ppp" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Peta Program Pendidikan Khusus</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBPPP} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-buta" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Peta Buta huruf</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBButa} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-kpip" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Peta kepentingan Pengembangan Informasi dan Pengetahuan
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBkpip} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-kmtk" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Peta keikutsertaan Masyarakat terhadap Keamanan
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBkmtk} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-sb-kmk" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Peta Keterlibatan Masyarakat dalam Koperasi
              </h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <img src={petaSBkmk} id="modal-img" alt="peta.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
