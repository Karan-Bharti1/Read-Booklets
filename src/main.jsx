import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter } from 'react-router-dom'
import Books from './App.jsx'
import Add from './pages/AddBook.jsx'
import { RouterProvider } from 'react-router'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Books/>
    },{
      path:"/addbooks",
      element:<Add/>
    }
  ]
)

const AppRender=()=>{
  return(
    <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(
<AppRender/>
)
