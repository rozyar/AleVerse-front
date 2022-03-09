import { Routes, Route } from "react-router-dom";
import { Main, SignIn, SignUp  } from "./pages";
import { Navbar } from "./components";
import { Footer, Header } from "./containers";
import "./App.css";

function App() {
  return (
    
    <div className="App">
      {/* <div className="gradient_bg">
       <Navbar />
       <Header />
   </div>
 */}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
    <Footer />
      </div>
  )
}

export default App;
