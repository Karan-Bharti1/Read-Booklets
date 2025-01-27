import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './Components/Nav'
import { useBookContext } from './contexts/BookContext'

function Books() {
const {bookData, updateStatus,deleteItem}=useBookContext()
const displayData=bookData.map(book=>(
  <div key={book.id} className='col-md-6 my-3'>
<div className='card'>
  <h2 className='p-2'>{book.title}</h2>
  <p  className='p-2'>~ {book.author}</p>
  <p className='fs-4 p-2'>{book.description}</p>
  <div className='m-2'>
  <button className='btn btn-primary mx-2' onClick={()=>updateStatus(book.id)}>{book.isRead?"Unread":"Read"}</button>
  <button className='btn btn-primary mx-2' onClick={()=>deleteItem(book.id)}>Delete</button>
  </div>
  
</div>
  </div>
))
  return (
    <>
   <Nav/>
  <main className='container'>
    <h1 className='py-4'>Read Books Online...</h1>
<div className='row'>
  {
    displayData
  }
</div>
  </main>
    </>
  )
}

export default Books
