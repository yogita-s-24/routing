import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";

function App() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      return <Home />;
    case "/about":
      return <About />;
    case "/contact":
      return <Contact />;
    default:
      return <h1>Provided path is wrong, that's why your page is not found</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {" "}
    <App />{" "}
  </>
);