import React, { Component } from "react"
import TextAreaFieldGroup from "../commons/TextAreaFieldGroup"
import { connect } from "react-redux"
import { addPost } from "../../actions/postActions"
import isEmpty from "../../validations/is-empty"

const mapStateToProps = state => ({
  errors: state.errors
})

class AddPost extends Component {
  constructor() {
    super()
    this.state = {
      judul: "",
      deskripsi: "",
      fotoProfil: "",
      errors: {}
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeThumbnail(e) {
    let files = e.target.files[0]
    if (isEmpty(files)) {
      document.getElementById("label-span").innerHTML = files.name
    }

    this.setState({
      fotoProfil: e.target.files[0]
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const postData = {
      judul: this.state.judul,
      deskripsi: this.state.deskripsi
    }

    this.props.addPost(postData)
  }

  cobaUpload(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append("judul", this.state.judul)
    formData.append("deskripsi", this.state.deskripsi)
    formData.append("thumbnail", this.state.fotoProfil)

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    this.props.addPost(formData, config)
  }

  render() {
    const { errors } = this.props

    return (
      <section className="wrapper-berita">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h1>Posting Berita</h1>
          <div className="row">
            <div className="container">
              <form
                // onSubmit={e => this.onSubmit(e)}
                onSubmit={e => this.cobaUpload(e)}
              >
                <div className="card-custom">
                  {/* ADD IMAGE */}
                  <div id="image">
                    <h5>
                      <i className="fas fa-images" /> Tambahkan thumbnail image
                    </h5>
                    <input
                      name="thumbnail"
                      type="file"
                      id="upload-file"
                      onChange={e => this.onChangeThumbnail(e)}
                    />
                    <label htmlFor="upload-file" id="label-span">
                      <i className="fas fa-file-image" /> &nbsp;
                      <span> Pilih file</span>
                    </label>
                  </div>

                  {/* ADD TITLE */}
                  <div id="judul">
                    <h5>Judul</h5>
                    <TextAreaFieldGroup
                      name="judul"
                      id="title"
                      placeholder="Masukkan judul berita"
                      onChange={e => this.onChange(e)}
                      errors={errors.judul}
                      required={true}
                    />
                  </div>

                  {/* ADD DESCRIPTION */}
                  <div id="description">
                    <h5>Deskripsi</h5>
                    <TextAreaFieldGroup
                      name="deskripsi"
                      placeholder="Masukkan deskripsi berita ..."
                      onChange={e => this.onChange(e)}
                      errors={errors.deskripsi}
                      required={true}
                    />
                  </div>

                  {/* BUTTON SUBMIT */}
                  <br />
                  <button type="submit" className="btn btn-primary mx-auto">
                    KIRIM
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </section>
    )
  }
}

export default connect(
  mapStateToProps,
  { addPost }
)(AddPost)
