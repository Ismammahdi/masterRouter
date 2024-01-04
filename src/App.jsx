
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutOne from './Layouts/LayoutOne';
import Home from './Components/Home';
import Notfound from './Components/Notfound';
import About from './Components/About';
import Contact from './Components/Contact';
import LayoutTwo from './Layouts/LayoutTwo';
import Help from './Components/Help';
import Blog from './Components/Blog';
import Featurs from './Components/Featurs';


function App() {
  
  const router=createBrowserRouter(
    [
      {
       path:'/',
       element:<LayoutOne></LayoutOne>,
       children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
       ]
      },
      {
        path:'/layoutTwo',
        element:<LayoutTwo></LayoutTwo>,
        children:[
          {
            path:'/layoutTwo/help',
            element:<Help></Help>
          },
          {
            path:'/layoutTwo/blog',
            element:<Blog></Blog>
          },
          {
            path:'/layoutTwo/featurs',
            element:<Featurs></Featurs>
          },
        ]
      },
      {
        path:'*',
        element:<Notfound></Notfound>
      }
    ]
  )

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
