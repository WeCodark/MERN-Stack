import React, { useState, useEffect } from "react";

function App() {
  const [formData, setFormData] = useState({ name: '', age: '', gender: '' })
  const [users, setUsers] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('User Added Successfully')
        setFormData({ name: '', age: '', gender: '' })
        fetchUsers();
      } else {
        alert('Error adding user')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:5000/');
      const data = await res.json();
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-semibold text-slate-700 mb-6 text-center">
          Add User
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name='name'
            value={formData.name}
            placeholder="Enter Name"
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <input
            name='age'
            type="number"
            value={formData.age}
            placeholder="Enter Age"
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>

          <button
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-700 text-white py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </form>

        <h2 className="text-xl font-semibold text-slate-700 mt-8 mb-4">
          All Users
        </h2>

        <ul className="space-y-2">
          {users.map((user, idx) => (
            <li
              key={idx}
              className="bg-slate-100 rounded-lg px-4 py-2 text-slate-700 shadow-sm"
            >
              {user.name} — {user.age} — {user.gender}
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
