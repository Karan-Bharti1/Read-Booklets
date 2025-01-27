import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './Components/Nav'
import { useBookContext } from './contexts/BookContext'

function Books() {
const {bookData, updateStatus,deleteItem}=useBookContext()
const [filter,setFilter]=useState("")
const filteredData=bookData.filter(book=>{
const matchesFilter=filter==="All"||book.isRead.toString() === filter ||filter===""
return matchesFilter
})
const displayData=filteredData.map(book=>(
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
const handleChange=event=>setFilter(event.target.value)
  return (
    <>
   <Nav/>
  <main className='container'>
    <h1 className='py-4'>Read Books Online...</h1>
    <strong><label className='fs-5 '>Filters: </label></strong>
    <label className='mx-2 btn btn-primary'  htmlFor='All'><input className='btn-check' name="filter" id="All" value="All" type="radio" onChange={event=>handleChange(event)}/>All</label>
    <label className='mx-2 btn  btn-primary'  htmlFor='Read'><input className='btn-check' name="filter" id="Read" value={true} type="radio" onChange={event=>handleChange(event)} />Read</label>
    <label className='mx-2 btn btn-primary' htmlFor='Unread'><input className='btn-check' name="filter" id="Unread" value={false} type="radio" onChange={event=>handleChange(event)} />Unread</label>
   
  

  
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
