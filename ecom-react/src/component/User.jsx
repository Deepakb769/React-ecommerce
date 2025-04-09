import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const User = () => {
    const [user, setUser] = useState([])

    useEffect(() => { 
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/users')
                setUser(response.data)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        fetchUser()   
    }, [])

  return (
    <>
      <ul>
        {user.map(u => (
            <li key={u.id}>{u.firstname}</li>
        ))}
      </ul>
    </>
  )
}

export default User
