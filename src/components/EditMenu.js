import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { DatabaseRef } from '../databaseRef'

function EditMenu() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [editName, setEditName] = useState('')
  const [specifiedMenu, setSpecifiedMenu] = useState('')

  useEffect(() => {
    const getSpecificMenu = () => {
      const specificMenu = doc(DatabaseRef, id)
      onSnapshot(specificMenu, (snapshot) => {
        setSpecifiedMenu({ ...snapshot.data(), id: snapshot.id })
      })
    }
    getSpecificMenu()
  }, [id])

  const handleUpdate = async () => {
    const menuDoc = doc(DatabaseRef, id)
    await updateDoc(menuDoc, { name: editName })
    navigate('/')
  }
  return (
    <div>
      <h2>Edit Menu</h2>
      <input
        defaultValue={specifiedMenu && specifiedMenu.name}
        onChange={(e) => setEditName(e.target.value)}
      />
      <button onClick={() => handleUpdate()}>Update</button>
      <div>{}</div>
    </div>
  )
}

export default EditMenu
