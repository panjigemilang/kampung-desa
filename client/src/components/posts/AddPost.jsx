import React, { Component } from "react"
import TextAreaFieldGroup from "../commons/TextAreaFieldGroup"
import { connect } from "react-redux"
import CKEditor from "ckeditor4-react"
import { addPost } from "../../actions/postActions"
import { withRouter } from "react-router-dom"
import isEmpty from "../../validations/is-empty"

const mapStateToProps = state => ({
  errors: state.errors
})

class Ckeditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: "<p>Tell us a <em>story</em>!</p>"
    }

    this.handleChange = this.handleChange.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  sendData() {
    this.props.parentCb(this.state.data)
  }

  onEditorChange(evt) {
    this.setState({
      data: evt.editor.getData()
    })

    this.sendData()
  }

  handleChange(changeEvent) {
    this.setState({
      data: changeEvent.target.value
    })
  }

  render() {
    return (
      <CKEditor
        data={this.state.data}
        onChange={this.onEditorChange}
        config={{
          toolbarGroups: [
            { name: "document", groups: ["mode", "document", "doctools"] },
            { name: "clipboard", groups: ["clipboard", "undo"] },
            {
              name: "editing",
              groups: ["find", "selection", "spellchecker", "editing"]
            },
            { name: "forms", groups: ["forms"] },
            "/",
            { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
            {
              name: "paragraph",
              groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
            },
            { name: "links", groups: ["links"] },
            { name: "insert", groups: ["insert"] },
            "/",
            { name: "styles", groups: ["styles"] },
            { name: "colors", groups: ["colors"] },
            { name: "tools", groups: ["tools"] },
            { name: "others", groups: ["others"] },
            { name: "about", groups: ["about"] }
          ],
          removeButtons:
            "Source,Print,Preview,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,CreateDiv,BidiLtr,BidiRtl,Anchor,Image,Flash,Table,HorizontalRule,SpecialChar,Smiley,PageBreak,Iframe,Maximize,ShowBlocks,About"
        }}
      />
    )
  }
}

class AddPost extends Component {
  constructor() {
    super()
    this.state = {
      judul: "",
      deskripsi: "<p>Tell us a <em>story</em>!</p>",
      fotoProfil: "",
      errors: {}
    }

    this.descriptionCallback = this.descriptionCallback.bind(this)
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

  descriptionCallback(desc) {
    this.setState({
      deskripsi: desc
    })
  }

  onSubmit(e) {
    e.preventDefault()

    if (isEmpty(this.state.deskripsi)) {
      return window.alert("Deskripsi tidak boleh kosong!")
    } else if (typeof this.state.fotoProfil === "string") {
      return window.alert("Postingan harus memiliki foto!")
    }
    // waiting for upload
    document.getElementsByTagName("html")[0].className += " wait"

    const formData = new FormData()
    formData.append("judul", this.state.judul)
    formData.append("deskripsi", this.state.deskripsi)
    formData.append("thumbnail", this.state.fotoProfil)

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }

    // setTimeout for loading
    window.setTimeout(() => {
      document.getElementsByTagName("html")[0].className -= " wait"
    }, 2500)

    this.props.addPost(formData, config, this.props.history)
  }

  render() {
    const { errors } = this.props

    return (
      <React.Fragment>
        <div id="tentangkami">
          <section className="home" id="header1-1">
            <div className="layer">
              <div className="container text-content" id="text-caption">
                <h1 className="display-4 text-center">Posting Berita</h1>
              </div>
            </div>
          </section>
        </div>

        <section className="wrapper-berita">
          <div className="container">
            <div className="row">
              <div className="container">
                <form onSubmit={e => this.onSubmit(e)}>
                  <div className="card-custom">
                    <div id="image">
                      <h5>
                        <i className="fas fa-images" /> Tambahkan thumbnail
                        image
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

                    <br />

                    <div id="text-title">
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

                    <div id="description">
                      <h5>Deskripsi</h5>
                      <Ckeditor parentCb={this.descriptionCallback} />
                      {/* <TextAreaFieldGroup
                        name="deskripsi"
                        placeholder="Masukkan deskripsi berita ..."
                        onChange={e => this.onChange(e)}
                        errors={errors.deskripsi}
                        required={true}
                      /> */}
                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary mx-auto">
                      POSTING
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <br />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  { addPost }
)(withRouter(AddPost))
