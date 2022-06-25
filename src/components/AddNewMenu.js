import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc } from 'firebase/firestore'
import { DatabaseRef } from '../databaseRef'

function AddNewMenu() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleAdd = async () => {
    await addDoc(DatabaseRef, { name })
    navigate('/')
  }
  
  return (
    <div>
      <h2>Add Menu</h2>

      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => handleAdd()}>Submit</button>
    </div>
  )
}

export default AddNewMenu
