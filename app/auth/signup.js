// pages/auth/signup.js
import { useState } from 'react'
import bcrypt from 'bcryptjs'

async function handleSignup(event) {
  event.preventDefault()
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: event.target.name.value,
      email: event.target.email.value,
      password: bcrypt.hashSync(event.target.password.value, 10),
      role: event.target.role.value,
    }),
  })

  const data = await res.json()
  if (data.success) {
    window.location.href = '/auth/signin'
  } else {
    alert(data.message)
  }
}

export default function Signup() {
  return (
    <form onSubmit={handleSignup}>
      <input type='text' name='name' placeholder='Name' required />
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Password' required />
      <select name='role' required>
        <option value='admin'>Admin</option>
        <option value='teacher'>Teacher</option>
        <option value='student'>Student</option>
        <option value='parent'>Parent</option>
      </select>
      <button type='submit'>Sign Up</button>
    </form>
  )
}
