import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi state
    this.state = {
      isEditing: false,
      editedTitle: '',
      editedDesc: '',
    };
    // binding meethod
    this.onEditButtonClick = this.onEditButtonClick.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onCancelEditButtonClick = this.onCancelEditButtonClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
  }

  // method edit
  onEditButtonClick() {
    const { data } = this.props;
    this.setState({
      isEditing: true,
      editedTitle: data.title,
      editedDesc: data.desc,
    });
  }
  // method save saat mode edit
  onSaveButtonClick() {
    const { data, onEdit } = this.props;
    const { editedTitle, editedDesc } = this.state;

    const newData = {
      title: editedTitle,
      desc: editedDesc,
    };
    onEdit(data.id, newData);
    this.setState({ isEditing: false });
  }

  // method cancel
  onCancelEditButtonClick() {
    this.setState({ isEditing: false });
  }

  // metode yang dipanggil ketika judul berubah
  onTitleChange(e) {
    this.setState({ editedTitle: e.target.value });
  }

  // metode yang dipanggil ketika deskripsi berubah
  onDescChange(e) {
    this.setState({ editedDesc: e.target.value });
  }

  render() {
    const { data, onDelete } = this.props;
    const { isEditing, editedTitle, editedDesc } = this.state;

    return (
      <div className="card" data-aos="fade-in">
        <img src={data.image} alt={data.title} />
        <div className="container">
          {isEditing ? (
            <>
              <input className="editTitle" value={editedTitle} onChange={this.onTitleChange} />
              <textarea className="editDesc" value={editedDesc} onChange={this.onDescChange}></textarea>
            </>
          ) : (
            <>
              <h3 className="anime">{data.title}</h3>
              <p className="descr">{data.desc}</p>
            </>
          )}
          <p className="createdAt">{data.createdAt}</p>
          <button className="data-item_delete" onClick={() => onDelete(data.id)}>
            X
          </button>
          {isEditing ? (
            <div className="edit-buttons">
              <button className="data-item_save" onClick={this.onSaveButtonClick}>
                Save
              </button>
              <button className="data-item_cancel" onClick={this.onCancelEditButtonClick}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="data-item_edit" onClick={this.onEditButtonClick}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default ListItem;
