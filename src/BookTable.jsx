import './BookList.css'
import { FaTrashAlt } from "react-icons/fa";

const BookTable = ({Books,setBooks}) => {


    const handleDelet= (id)=>{
        const newList = Books.filter(i => i.id !== id);
        setBooks(newList);
    }

   const handleAllDelete =()=>{
    setBooks([])
   } 


if(Books.length !== 0){
    return ( 
        <>
        <div className="mylist">
          <table className="table ">
                    <thead>
                        <tr className="text-center">
                        <th className="text-center">شماره</th>
                        <th className="text-center">عنوان</th>
                        <th className="text-center">نویسنده</th>
                        <th className="text-center">حذف</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {Books.map((book) =>(
                             <tr key={book.id} className="">
                                 <th className="">{book.id}</th>
                                 <td className="">{book.title}</td>
                                 <td className="">{book.author}</td>
                                 <td onClick={()=>handleDelet(book.id)}><FaTrashAlt className="text-danger mytrash"/></td>
                             </tr>
                        ))}
                    </tbody>
            </table>
            <button className="btn btn-danger mybtn btn-sm" onClick={handleAllDelete}>حذف همه</button>
        </div>
        </>
     ) 
}else{
    return (
        <div className="mylist ">
             <div className=" w-100 text-center p-5 ">
                  <h6 className=" w-100 text-center ">هیچ کتابی در لیست موجود نمی باشد</h6>
             </div>
        </div>
    )
}
   

}
 
export default BookTable;