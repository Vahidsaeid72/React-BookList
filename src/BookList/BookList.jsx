import './BookList.css'
import { FaTrashAlt } from "react-icons/fa";
import BookForm from './BookForm';
import BookTable from './BookTable';
import { useEffect, useState } from 'react';



const getDataFromLS =()=>{
  const data = localStorage.getItem('Books');
  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }
}

const BookList = () => {

  const [Books , setBooks]=useState(getDataFromLS());

useEffect(()=>{
    localStorage.setItem('Books',JSON.stringify(Books) );
},[Books])

    return ( 
    <div className="mybody">
      <div className="container">
  
        <header className="w-100 text-center pt-5 mt-1">
          <h3>لیست کتاب ها</h3>
          <p className="fw-bold fs-6">کتاب های جدید خود را به کتاب خانه اضافه کنید</p>
        </header>
  
        <div className="mycontent w-100 d-lg-flex align-items-start justify-content-lg-around mt-5 mx-auto">
            <BookForm Books={Books} setBooks={setBooks}/>
            <BookTable Books={Books} setBooks={setBooks}/>
        </div>
      </div>
     </div> 
    );
  }
   
  export default BookList;