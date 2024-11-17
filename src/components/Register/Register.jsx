import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const {handleRegister} =  useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        console.log(name, image, email, password, conPassword)

        handleRegister(email, password)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        Name:<input 
          type="text" name="name"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        </div>
        <div>
        Image:<input
          type="text" name="image"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        </div>
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
        <div>
        Confirm Password<input
          type="text" name="conPassword"
          placeholder="Type here"
          className="input input-bordered input-error w-full max-w-xs"
        />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
