 import './app.css';
 import { BrowserRouter } from "react-router-dom";
 import Router from "./Routes/index";
import Header from "./components/Header";
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Router />
      <ToastContainer autoClose={3000} theme="colored" />
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
