import React from "react"

export default function About() {
  return (
    <React.Fragment>
      <div id="tentangkami">
        {/* TItle */}
        <section className="home" id="header1-1">
          <div className="layer">
            <div className="container text-content" id="text-caption">
              <h2>Jelajahi Lebih dalam tentang kami disini...</h2>
            </div>
          </div>
        </section>
      </div>

      <div className="container" id="utama">
        <div id="kami" className="container pb-2 kampungan">
          <div className="container">
            <h4 id="judul-home">Latar Belakang</h4>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/latarbelakang1.1.jpg")}
                />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 lBelakang">
                <p>
                  &nbsp;&nbsp;&nbsp;Pertumbuhan penduduk kota yang semakin
                  meningkat juga menimbulkan masalah-masalah lingkungan fisik,
                  sosial, ekonomi dan budaya. Sementara itu, program perencanaan
                  dan pembangunan kota tidak selalu dapat mencapai targetnya.
                  Masih ada beberapa kelompok masyarakat atau bagian wilayah
                  kota yang belum mendapatkan manfaatnya secara langsung. Namun
                  demikian, akhir-akhir ini telah muncul inisiatif dalam suatu
                  komunitas masyarakat untuk memperbaikikualitas hidupnya
                  melalui aksi kolektif. Gerakan ini telah berkembang dan
                  menjalar di kota-kota di Indonesia (seperti beberapa kampung
                  di Jakarta, Yogyakarta, Surakarta, Padang, Sulawesi, dan
                  Kalimantan) sebagai upaya pengembangan sekaligus pelestarian
                  kualitas lingkungan ekonomi, sosial, budaya, dan hunian fisik
                  perkotaan.
                </p>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 lBelakang">
                <p>
                  &nbsp;&nbsp;&nbsp;Untuk mencapai tujuan tersebut, maka
                  diperlukan sebuah data base potensi lingkungan kampung yang
                  kuat. Unit informasi terkecil yang diharapkan adalah satuan
                  Kepala Keluarga (KK). Hal ini bertujuan agar setiap potensi
                  pengembangan dapat diketahui hing ga unit terkecil wilayah,
                  sehingga permasalahan dan program pengembangan yang akan
                  direncanakan bersama dapat terjangkau oleh semua warga.
                  Pemetaan potensi kampung ini berbasis partisipasi masyarakat.
                  Karena itu, setiap proses pendataan hingga perumusan
                  permasalahan dan program pengembangan dilakukan oleh
                  masyarakat Kampung BERSAHAJA RW O1, yang didampingi oleh
                  kalangan akademinisi Jurusan PWK Fakultas Teknik Universitas
                  Brawijaya. Pada akhirnya, penyusunan data base kampung secara
                  partisipatif ini diharapkan dapat menjadi bagian dalam
                  mewujudkan peningkatan kualitas hidup-penghidupan seluruh
                  warga kampung secara mandiri.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/latarbelakang2.1.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
          <div className="container">
            <h4 id="judul-home">Kampung Bersahaja dan Permasalahannya</h4>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/tujuan1.jpg")}
                  style={{ height: "428px" }}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-ttgkm"
                  src={require("../../img/tujuan2.jpg")}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 lBelakang">
                <p>
                  &nbsp;&nbsp;&nbsp;Permasalahan yang dihadapi oleh masyarakat
                  Kampung BERSAHAJA Rampal Celaket adalah sebagai berikut.
                  <br />
                  a. Kebutuhan meningkarkan kualitas pengambilan keputusan
                  <br />
                  b. Kebutuhan untuk mempertimbangkan daya dukung dan daya
                  tampung lingkungan hidup untuk penyusunan pengembangan rencana
                  aksi
                  <br />
                  c. Kebutuhan pemantauan dan evaluasi yang terkait dengan
                  dampak perubahan lingkungan
                  <br />
                  d. Peningkatan mutu informasi tentang lingkungan hidup yang
                  merupakan bagian dari sistem pelaporan dan bentuk dari
                  akuntabilitas publik
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
          <h4 id="judul-home">Tujuan</h4>
          <p style={{ textAlign: "center" }}>
            Penyusunan data base lingkungan secara partisipatif ini bertujuan
            untuk:
          </p>
          <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row justify-content-center lBelakang">
                <div className="box-item col-md-4 tujuan-left">
                  <h4>A</h4>
                  <hr />
                  <p>
                    Menyediakan data, informasi dan dokumentasi yang akurat
                    untuk meningkatkan kualiatas pengambilan keputusan.
                  </p>
                </div>
                <div className="box-item col-md-4 tujuan-right">
                  <h4>B</h4>
                  <hr />
                  <p>
                    Mengetahui daya dukung dan daya tampung lingkungan fisik,
                    sosial, budaya, dan ekonomi yang diperlukan untuk
                    mengembangkan dan melaksanakan rencana aksi.
                  </p>
                </div>
                <div className="box-item col-md-4 tujuan-left">
                  <h4>C</h4>
                  <hr />
                  <p>
                    Menyediakan informasi yang terbuka bagi masyarakat Kampung
                    BERSAHAJA RW 01, sehingga pemantauan dan evaluasi terkait
                    dampak perubahan lingkungan dapat dilakukan semua pihak.
                  </p>
                </div>
                <div className="box-item col-md-4 tujuan-right">
                  <h4>D</h4>
                  <hr />
                  <p>
                    Menyediakan informasi tentang lingkungan yang menjadi bagian
                    dari sistem pelaporan publik dan sebagai bentuk
                    akuntabilitas publik
                  </p>
                </div>
                <div className="box-item col-md-4 tujuan-left">
                  <h4>E</h4>
                  <hr />
                  <p>
                    Menyediakan informasi tentang lingkungan yang menjadi bagian
                    dari sistem pelaporan publik dan sebagai bentuk
                    akuntabilitas publik
                  </p>
                </div>
              </div>

              <div className="lBelakang">
                <p>
                  &nbsp;&nbsp;&nbsp;Penyusunan data base lingkungan secara
                  partisipatif ini bertujuan untuk:
                  <br />
                  a. Menyediakan data, informasi dan dokumentasi yang akurat
                  untuk meningkatkan kualiatas pengambilan keputusan.
                  <br />
                  b. Mengetahui daya dukung dan daya tampung lingkungan fisik,
                  sosial, budaya, dan ekonomi yang diperlukan untuk
                  mengembangkan dan melaksanakan rencana aksi.
                  <br />
                  c. Menyediakan informasi yang terbuka bagi masyarakat Kampung
                  BERSAHAJA RW O1, sehingga pemantauan dan evaluasi terkait
                  dampak perubahan lingkungan dapat dilakukan semua pihak.
                  <br />
                  d. Menyediakan informasi tentang lingkungan yang menjadi
                  bagian dari sistem pelaporan publik dan sebagai bentuk
                  akuntabilitas publik
                  <br />
                  e. Proses yang dilakukan secara partisipatif merupakan bagian
                  dari gerakan membangun kesadaran terhadap lingkungan dan
                  memberdayakan warga agar mampu mengelola dan mengembangkan
                  potensi sosial-ekonomi-budaya-lingkungan fisiknya secara
                  mandiri dan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="kami" className="container pb-2 kampung">
          <div className="container">
            <h4 id="judul-home">
              Sekilas Masyarakat
              <br />
              Kampung BERSAHAJA RW O1
            </h4>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <a className="card" data-toggle="modal" data-target="#myModal">
                  <img
                    className="peta-utama"
                    src={require("../../img/peta-utama.JPG")}
                  />
                </a>
                <span className="text-muted">
                  Klik pada Peta untuk Memperbesar Peta.
                </span>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 lBelakang">
                <p>
                  &nbsp;&nbsp;&nbsp;Wilayah RW O1 adalah sebuah perkampungan
                  dengan luas ± 3200 m yang terletak di secara administrative
                  meniadi bagian dari Kelurahan Rampal Celaket, Kecamatan
                  Kloien, Kota Malang, Provinsi Jawa Timur. Wilayah RW 01 yang
                  terdiri dari 9 RT ini berbatasan dengan wilayah RW O4 di
                  sebelah utara, RW 05 di sebelah barat laut, Kelurahaan Klojen
                  di sebelah selatan, dan dipisahkan oleh rel kereta api dengan
                  wilayah RW 02 yang terletak di sebelah timurnya.
                  <br />
                  <br />
                  &nbsp;Permasalahan yang dihadapi oleh masyarakat Kampung
                  BERSAHAJA Kelurahan Rampal Celaket adalah kebutuhan
                  meningkatkan kualitas pengambilan keputusan, kebutuhan untuk
                  mempertimbangkan daya dukung dan daya tampung lingkungan hidup
                  untu penyusunan pengembangan rencana aksi, kebutuhan
                  pemantauan dan evaluasi yang terkait dengan dampak perubahan
                  lingkungan dan peningkatan mutu informasi tentang lingkungan
                  hidup yang merupakan bagian dari system pelaporan dan bentuk
                  akuntabilitas publik.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <img className="bgg4" src={require("../../img/sekilas1.JPG")} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <img className="bgg4" src={require("../../img/sekilas2.JPG")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  )
}
