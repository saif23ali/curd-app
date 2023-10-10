import "./App.css";
import Addusers from "./Components/Addusers";
import Allusers from "./Components/Allusers";
import Codewithsaifali from "./Components/Codewithsaifali";
import Edituser from "./Components/Edituser";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path ="/" element ={ <Codewithsaifali />}/>
          <Route path ="/all" element ={<Allusers />}/>
          <Route path ="/add" element ={ <Addusers/>}/>
          <Route path="/edit/:id" element={<Edituser/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
