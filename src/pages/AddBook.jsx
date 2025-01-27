import { useState } from "react";
import Nav from "../Components/Nav";
import { useBookContext } from "../contexts/BookContext";

const Add=()=>{
const {bookData,setBookData}=useBookContext()
const [successMessage,setSuccessMessage]=useState({visible:false,message:""})
    const [formData,setFormData]=useState({
      id: null,
      title: "",
      author: "",
      isRead: "",
      description:""
    })
    const clickHandler=(event)=>{
        const {name,value}=event.target
        setFormData(prev=>({...prev,[name]:value}))
        if(name==="isRead"){
         if( value==="Read" )  setFormData(prev=>({...prev,isRead:true}))
         if(value==="Unread")setFormData(prev=>({...prev,isRead:false}))
        }
    }
   console.log(formData)
   const formHandler=(event)=>{
    event.preventDefault()
    setFormData(data=>({...data,id:bookData.length+1}))
    setBookData(prev=>[...prev,formData])
    setSuccessMessage({visible:true,message:"Book Added Sucessfully"})
    setTimeout(()=>setSuccessMessage({visible:false,message:""}),1500)
   }
return(
    <>
    <Nav/>
    <main className="container">
        <form onSubmit={event=>formHandler(event)}>
        <h2 className="py-3">Add Books :</h2>
        <label htmlFor="title">Title: </label>
<input type="text" id="title" name="title" value={formData.value} onChange={(event)=>clickHandler(event)}  className="form-control" required/>
<label htmlFor="description">Description: </label>
<input type="text"  id="description" name="description" value={formData.value} onChange={(event)=>clickHandler(event)}   className="form-control" required/>
<label htmlFor="author">Author: </label>
<input type="text"  id="author" name="author" value={formData.value} onChange={(event)=>clickHandler(event)}   className="form-control" required/>
<label htmlFor="status">Status: </label>
<select name="isRead" id="status" className="form-control" onChange={(event)=>clickHandler(event)}  required>
<option value="">Select Field</option>
<option value="Read">Read</option>
<option value="Unread">Unread</option>
</select>
<button type="submit" className="btn btn-primary my-3">Submit</button>
</form>
{successMessage.visible && <h2 className="text-primary">{successMessage.message}</h2>}
    </main>
    </>   
)
 
}
export default Add;