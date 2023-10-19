import './register.css';

export default function Register() {
  return (
    <section className="register">
    <span className='registerTitle'>Register</span>
      <form className="registerForm">
      <label>Username</label>
        <input className='registerInput' type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input className='registerInput' type="text" placeholder="Enter your email" />
        <label>Email</label>
        <input className='registerInput' type="password" placeholder="Enter your password" />
        <button className="registerBtn">Register</button>
      </form>
      <button className="registerLgBtn">Login</button>
    </section>
  );
}
