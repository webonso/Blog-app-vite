import './login.css';

export default function Login() {
  return (
    <section className="login">
    <span className='loginTitle'>Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className='loginInput' type="text" placeholder="Enter your email" />
        <label>Email</label>
        <input className='loginInput' type="password" placeholder="Enter your password" />
        <button className="loginBtn">Login</button>
      </form>
      <button className="loginRegisterBtn">Register</button>
    </section>
  );
}
