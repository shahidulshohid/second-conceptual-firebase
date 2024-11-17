import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, handleLogin, handleLogout } = useContext(authContext);
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    handleLogin(email, password)
    .then(res =>{})
    .catch(error => {
      setError(error.message)
    })
  };
  return (
    <div>

<form onSubmit={handleSubmit}>
        <div>
        Email:<input
          type="text" name="email"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        </div>
        <div>
        Password:<input
          type="text" name="password"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      {error && <p className="text-red-500">{error.split('/')[1].slice(0, 18)}</p>}
      <button className="ml-4" onClick={handleGoogleLogin}>Google Login</button>
      {/* Login
            <button className="btb bg-primary" onClick={handleGoogleLogin}>Google Login</button>
            New to the website Please? <NavLink to='/register'>Register</NavLink> */}
    </div>
  );
};

export default Login;
