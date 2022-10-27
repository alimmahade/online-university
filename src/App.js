
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import CourseDetails from './Components/CourseDetails';
import Courses from './Components/Courses';
import Faq from './Components/Faq';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Main from './Layout/Main';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const router=createBrowserRouter([
    // All Routes Here
    {
      path:'/', element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/login',element:<LogIn></LogIn>},
        {path:'/register',element:<Register></Register>},
        {path:'/faq',element:<Faq></Faq>},
        {path:'/blog',element:<Blog></Blog>},
        
        {path:'/courses',
        loader:()=>fetch(`http://localhost:5000/courses`),
          element:<PrivateRoutes>
            <Courses/>
          </PrivateRoutes>
        },
        
        {path:'/coursedetails/:id',
        loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`),
         element:<PrivateRoutes>
            <CourseDetails>

            </CourseDetails>
          </PrivateRoutes>},
          {path:'*',element:<div>
            <h1 className="text-5xl font-bold">Unhandled Thrown Error!
                      404 Not Found ! This page is not found.
            </h1>
          </div>},
        
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
