import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, FormField } from "../../components";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

   
    try {
      const response = await axios.post(
        "http://localhost:4000/api/signup",
        form
      );
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="gradient_bg">
      <Navbar />
      <form onSubmit={handleSubmit}>
      <FormField
          label="Name"
          id="SignUpFormName"
          name="name"
          onChange={handleChange}
          value={form.name}
          required={true}
          readOnly={false}
        />

       
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
          label="password"
          id="SingUpFormPassword"
          required={true}
          readOnly={false}
          name="password"
          value={form.password}
          onChange={handleChange}
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
        />
      

        <button type="submit" onSubmit={handleSubmit}>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp