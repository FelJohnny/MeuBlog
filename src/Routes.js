import Home from "./pages/Home";
import Menu from "./components/Menu"; 
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<h1>Pagina não encontrada</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
