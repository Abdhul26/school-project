// app/register/page.js
export default function RegisterPage() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        {/* Registration form fields */}
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
