import { useEffect, useState } from 'react';
import './BookList.css'

const BookForm = ({Books,setBooks}) => {

    const [data,setData]= useState({
        id : '' ,
        title : '',
        author: ''
    })


const handleSubmit = (e)=>{
    e.preventDefault();
    setBooks([...Books,data])
    setData({        
    id : '' ,
    title : '',
    author: ''
})

}

    return ( 
        <div className="myform p-3">
        <form onSubmit={handleSubmit}>
            <label className="form-label">عنوان</label>
              <input className="form-control" type="text" value={data.title} onChange={(e)=>setData({...data, title : e.target.value}) }/>
            <label className="form-label">نویسنده</label>
              <input className="form-control" type="text" value={data.author} onChange={(e)=>setData({...data, author : e.target.value}) }/>
            <label className="form-label">شماره#</label>
              <input className="form-control" type="text" value={data.id} onChange={(e)=>setData({...data, id : e.target.value}) }/>
            <button className="btn btn-success w-100 p-1 my-4" type="submit">افزودن</button>
        </form>
      </div>
     );
}
 
export default BookForm;