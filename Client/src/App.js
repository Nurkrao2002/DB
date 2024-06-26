import './App.css';
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Queries from "./Components/Queries/Queries";
import Contact from './Components/Contact/Contact';
import DBList from './Components/DBList/DBList';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"about",
    element:<About />
  },
  {
    path:"Services",
    element:<Services />
  },
  {
    path:"Queries",
    element:<Queries />
  },
  {
    path:"contact",
    element:<Contact />
  },
  {
    path:"DBList",
    element:<DBList />
  }
])



function App() {
  return (
  
 <>
 <RouterProvider router={router}/> 
 </>
  
  );
}

export default App;
