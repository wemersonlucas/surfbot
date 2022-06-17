import { Routes,Route } from "react-router-dom";

// Rotas publicas
import Home from "../Pages/Home";
import Matricula from "../Pages/Matricula";

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/matricula" element={<Matricula/>} />
    </Routes>
  );
}