import React, { useState } from 'react';

function FormComponent() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleAddOrUpdate = () => {
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (editingIndex !== null) {
      const updatedData = data.map((item, index) => 
        index === editingIndex ? { name, email } : item
      );
      setData(updatedData);
      setEditingIndex(null);
    } else {
      setData([...data, { name, email }]);
    }
    setName('');
    setEmail('');
  };

  const handleEdit = (index) => {
    setName(data[index].name);
    setEmail(data[index].email);
    setEditingIndex(index);
  };  

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Simple Form Example</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editingIndex !== null ? 'Update' : 'Add'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.email}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormComponent;
