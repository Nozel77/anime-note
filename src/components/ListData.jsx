import React from 'react';
import ItemData from './ItemData';

const ListData = ({ dataList, onDelete, onEdit }) => {
  return (
    <div>
      {dataList.map((data) => (
        <ItemData key={data.id} id={data.id} onDelete={onDelete} onEdit={onEdit} {...data} />
      ))}
    </div>
  );
}   

export default ListData;