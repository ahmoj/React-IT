import React, { useState } from 'react'
import './Register.css'
import Input from '@mui/material/Input';
import { Button } from '@mui/material';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className='main'>
        <h1>Register</h1>
        <div className="input-box">
            <span>First Name:</span>
            <Input className='input' required value={firstName} onChange={(event) => (
              setFirstName(event.target.value)
            )}/>
            {console.log(firstName)}
            <span style={{marginLeft: '50px'}}>Last Name:</span>
            <Input className='input' required value={lastName} onChange={(event) => (
              setLastName(event.target.value)
            )}/>
            {console.log(lastName)}
        </div>
        <div className="main-box">
            <span>Email:</span>
            <Input required value={email} onChange={(event) => (
              setEmail(event.target.value)
            )}/>
            {console.log(email)}
            <span style={{marginTop: '50px'}}>Password:</span>
            <Input type='password' required value={password} onChange={(event) => (
              setPassword(event.target.value)
            )}/>
            {console.log(password)}
            <span style={{marginTop: '50px'}} >Confirm Password:</span>
            <Input type='password' required value={confirmPassword} onChange={(event) => (
              setConfirmPassword(event.target.value)
            )}/>
            {console.log(confirmPassword)}
        </div>
        <Button className='submit-btn' variant='contained' style={{marginTop: '50px'}} onClick={() => {

          if (firstName,lastName,email,password,confirmPassword === ''){
            alert('Niste popunili sve zahteve...')
          }
          else if (password !== confirmPassword) {
            alert('Password i Confirm Password se ne poklapaju...')
          }
          else if (firstName.length, lastName.length < 3) {
            alert('First Name i Last Name moraju da imaju 3 ili vise karaktera...')
          }
          else if (!email.includes('@')) {
            alert('Email mora da sadrzi @')
          }
          else if (password.length < 5) {
            alert('Password mora da ima 5 ili vise karaktera')
          }
          else {
            localStorage.setItem('firstName', `${firstName}`)
            localStorage.setItem('lastName', `${lastName}`)
            localStorage.setItem('email', `${email}`)
            localStorage.setItem('password', `${password}`)
          }
        }
          
        }>Register</Button>
    </div>
  )
}

export default Register