import { createContext, useContext,useEffect,useState } from "react";
import books from "../../books";

export  const BookContext=createContext()
export const useBookContext=()=>useContext(BookContext)
const BookProvider=({children})=>{
    const [bookData,setBookData]=useState(books)
    const updateStatus=(bookId)=>setBookData(prev=>prev.map(book=>book.id===bookId?{...book,isRead:!book.isRead}:book))
    useEffect(()=>{
        localStorage.setItem("booksData",JSON.stringify(bookData))
    },[bookData])
    const deleteItem=(bookId)=>setBookData(prev=>prev.filter(book=>book.id!==bookId))
    return   (<BookContext.Provider value={{bookData,updateStatus, deleteItem,setBookData}}> 
    {children}
     </BookContext.Provider>)
  }
  export default BookProvider;
