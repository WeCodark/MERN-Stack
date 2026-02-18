import react, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [editingId, setEditingId] = useState(null);


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios.put(`${process.env.REACT_APP_API_URL}/updateUser/` + editingId, { name, email, age })
        .then(() => window.location.reload())
        .catch(err => console.log(err))
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/createUser`, { name, email, age })
        .then(() => window.location.reload())
        .catch(err => console.log(err))
    }
  }

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
    setEditingId(user._id);
  };

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/deleteUser/` + id)
      .then(() => window.location.reload())
      .catch(err => console.log(err))
  };

  return (
    <div>
      <div>
        <h2>MERN CRUD APP</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <button type="submit">{editingId ? 'Update' : 'Create'}</button>
        </form>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default App;