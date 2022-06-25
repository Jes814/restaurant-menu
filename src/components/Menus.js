import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDocs, deleteDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { DatabaseRef } from '../databaseRef'

function App() {
  const navigate = useNavigate()
  const [restaurantMenus, setRestauranMenus] = useState([])

  useEffect(() => {
    const getMenus = async () => {
      const data = await getDocs(DatabaseRef)
      setRestauranMenus(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getMenus()
  }, [])

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  const handleDelete = async (id) => {
    const menuDoc = doc(DatabaseRef, id)
    await deleteDoc(menuDoc)

    //handling reload for updating new list
    window.location.reload()
  }

  return (
    <div>
      <Link to='/add'>
        <button>Add New Menu</button>
      </Link>
      {restaurantMenus.map((menu) => {
        return (
          <div key={menu.id}>
            <h1>Name: {menu.name}</h1>
            <button onClick={() => handleEdit(menu.id)}>Edit</button>
            <button onClick={() => handleDelete(menu.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default App
