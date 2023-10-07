import React from 'react';
import { Component } from 'react';
import ListItem from './EditItem'; 
import { animeData } from '../utils/data'; 
import InputData from './InputData.jsx'; 
import SearchBar from './SearchBar.jsx';


class ContainerData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: animeData(), 
      file: null,
      searchValue: '',
      searchResult: [],
    };
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddDataHandler = this.onAddDataHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onDeleteHandler(id) {
    const shouldDelete = window.confirm("Apakah Anda yakin ingin menghapus data?");
    if (shouldDelete) {
      const dataList = this.state.dataList.filter((animeData) => animeData.id !== id);
      this.setState({ dataList });
    }
  }

  onAddDataHandler({ title, desc, file }) {
    this.setState((prevState) => {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      });
      return {
        dataList: [
          ...prevState.dataList,
          {
            id: +new Date(),
            title,
            desc,
            image: URL.createObjectURL(file),
            createdAt: 'Dibuat pada: ' + formattedDate,
          },
        ],
        file: null,
      };
    }, () => {
      URL.revokeObjectURL(file);
    });
  }

  onSearchHandler(value) {
    const { dataList } = this.state;
    const filteredData = dataList.filter((data) =>
      data.title.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({ searchValue: value, searchResult: filteredData }); 
  }

  onEditHandler(id, newData) {
    const { dataList } = this.state;
    const updatedDataList = dataList.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          title: newData.title,
          desc: newData.desc,
        };
      }
      return data;
    });
    this.setState({ dataList: updatedDataList });
  }

  render() {
    const { dataList, searchValue } = this.state;

    const filteredData = dataList.filter((data) =>
      data.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div>
        <h1 className="judulHeader">AnimeNote</h1>
        <InputData addData={this.onAddDataHandler} />
        <SearchBar value={searchValue} onSearch={this.onSearchHandler} />
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <ListItem key={data.id} data={data} onDelete={this.onDeleteHandler} onEdit={this.onEditHandler} />
          ))
        ) : (
          <p className='notFound'>Tidak ada note</p>
        )}
      </div>
    );
  }
}

export default ContainerData;
