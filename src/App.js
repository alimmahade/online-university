
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './Components/Courses';
import Header from './Components/Header';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Main from './Layout/Main';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const router=createBrowserRouter([
    {
      path:'/', element:<Main></Main>,children:[
        {path:'/home',element:<Home></Home>},
        {path:'/login',element:<LogIn></LogIn>},
        {path:'/register',element:<Register></Register>},
        {path:'/courses',
          element:<PrivateRoutes>
            <Courses/>
          </PrivateRoutes>},
        {path:'/',element:<Header></Header>}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
