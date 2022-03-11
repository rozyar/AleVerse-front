import { useState, useContext } from "react";
import "./signin.css";
import { AuthContext } from "../../context/index";
import { Navbar, FormField } from "../../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {

  const { setLoggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        form
      );

        setLoggedInUser(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data))
      console.log(response);
      navigate("/create")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="gradient_bg">
      <Navbar />
      <form onSubmit={handleSubmit}>

       
        <FormField
          type="email"
          label="E-mail"
          id="SignUpFormEmail"
          name="email"
          onChange={handleChange}
          value={form.email}
          required={true}
          readOnly={false}
        />
        <FormField
          type="password"
          label="Password"
          id="loginFormPassword"
          required={true}
          readOnly={false}
          name="password"
          value={form.password}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        />
        

        <button type="submit" onSubmit={handleSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
