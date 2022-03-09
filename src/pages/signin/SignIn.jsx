import { useState } from "react";
import { Navbar, FormField } from "../../components";
import axios from "react"
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

   async function handleSubmit(e) {
     e.preventDefault();

     try{ 
    const response = await axios.post("http://localhost:4000/api/login", form)


    }catch(error){
      console.log(error);
    }
   }

  return (
    <div className="gradient_bg">
      <Navbar />
      <form>

      <FormField
        type="email"
        label="E-mail"
        id="loginFormEmail"
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

        <button type="submit">Sign in</button>
        </form>
    </div>
  );
};

export default SignIn;
