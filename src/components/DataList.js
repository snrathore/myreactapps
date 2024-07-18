import React from 'react';

function DataList({ data, deleteItem, updateItem }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name} - {item.email}</p>
          <button onClick={() => deleteItem(index)}>Delete</button>
          <button onClick={() => updateItem(index)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default DataList;
