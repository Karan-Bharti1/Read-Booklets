import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import Books from './App.jsx'
import Add from './pages/AddBook.jsx'
import { RouterProvider } from 'react-router'
import BookProvider, { BookContext } from './contexts/BookContext.jsx'
import books from '../books.js'
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
<BookProvider>
    <RouterProvider router={router}/>
    </BookProvider>

  </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(
<AppRender/>
)
