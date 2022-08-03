import './BookList.css'
import { FaTrashAlt } from "react-icons/fa";
import BookForm from './BookForm';
import BookTable from './BookTable';


const BookList = () => {

    return ( 
    <div>
      <div className="container">
  
        <header className="w-100 text-center pt-5 mt-1">
          <h3>لیست کتاب ها</h3>
          <p className="fw-bold fs-6">کتاب های جدید خود را به کتاب خانه اضافه کنید</p>
        </header>
  
        <div className="mycontent w-100 d-flex align-items-center justify-content-around mt-5">
            <BookForm/>
            <BookTable/>
        </div>
      </div>
     </div> 
    );
  }
   
  export default BookList;