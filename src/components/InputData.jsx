import React from 'react';

class InputData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      file: null,
      imagePreview: null,
      selectedFileName: '',
    };
    
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    this.onFileChangeEventHandler = this.onFileChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onDescChangeEventHandler(event) {
    this.setState({
      desc: event.target.value,
    });
  }

  onFileChangeEventHandler(event) {
    const file = event.target.files[0];
    const imagePreview = URL.createObjectURL(file);
    this.setState({
      file,
      imagePreview,
    });
  }

  // Metode submit
  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title !== '' && this.state.desc !== '' && this.state.file !== null) {
      this.props.addData(this.state);
      this.setState({
        title: '',
        desc: '',
        file: null,
        imagePreview: null,
      });
      alert('Note Baru Berhasil Ditambahkan');
    } else {
      alert('Pastikan semua data terisi yaa !');
    }
  }

  render() {
    const { title, desc, imagePreview } = this.state;

    return (
      <form className="data-input" onSubmit={this.onSubmitEventHandler}>
        <p className="jdulCardin">New Note</p>
        <input className="inputTitle" type="text" placeholder="Title" value={title} onChange={this.onTitleChangeEventHandler} />
        <input className="inputDesc" type="text" placeholder="Masukkan Catatan" value={desc} onChange={this.onDescChangeEventHandler} />
        <label className="inputFile" htmlFor="fileInput">
          <span className="labelText">Choose Image</span>
          <input id="fileInput" type="file" accept="image/*" onChange={this.onFileChangeEventHandler} style={{ display: 'none' }} />
        </label>
        {imagePreview && <img src={imagePreview} alt="" className="imagePreview" />}
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default InputData;
