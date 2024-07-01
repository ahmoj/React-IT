import React from 'react'
import './LogIn.css'
import { Button, Input } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const navigate = useNavigate()
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  console.log(email, password);
  return (
    <div>
        <h1>Log In</h1>
        <div className="input-box">
            <span>Email:</span>
            <Input className='input' value={newEmail} onChange={(event) => (
              setNewEmail(event.target.value)
            )}></Input>
            {console.log(newEmail)}
            <span style={{marginLeft: '50px'}}>Password:</span>
            <Input className='input' type='password' value={newPassword} onChange={(event) => (
              setNewPassword(event.target.value)
            )}></Input>
            {console.log(newPassword)}
        </div>
        <Button variant='contained' style={{marginTop: '30px'}} onClick={() => {
          if (newEmail, newPassword === '') {
            alert('Niste popunili sve zahteve')
          }
          else if (!newEmail.includes('@')) {
            alert('Email mora da sadrzi @')
          }
          else if (newPassword.length < 5) {
            alert('Password mora da ima 5 ili vise karaktera')
          }
          else if (newEmail !== email || newPassword !== password) {
            alert('Email ili Password se ne poklapa..')
          }
          else {
            navigate('/')
          }
        }}>Log In</Button>
    </div>
  )
}

export default LogIn