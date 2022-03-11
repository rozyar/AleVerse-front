import { Routes, Route } from "react-router-dom";
import { Main, SignIn, SignUp, Create, Explore  } from "./pages";
import { Navbar } from "./components";
import { Footer, Header } from "./containers";
import {AuthContextComponent} from "./context/index"
import "./App.css";

function App() {
  return (
    
    <div className="App">
      {/* <div className="gradient_bg">
       <Navbar />
       <Header />
   </div>
 */}

  <AuthContextComponent>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
        </Routes>
  </AuthContextComponent>
    <Footer />
      </div>
  )
}

export default App;
