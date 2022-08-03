import './BookList.css'
import { FaTrashAlt } from "react-icons/fa";

const BookTable = ({myList,setMyList}) => {


    const handleDelet= (id)=>{
        const newList = myList.filter(i => i.id !== id);
        setMyList(newList);
    }

   const handleAllDelete =()=>{
     setMyList([])
   } 


if(myList.length !== 0){
    return ( 
        <>
        <div className="mylist bg-muted">
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
                        {myList.map((item) =>(
                             <tr key={item.id} className="">
                                 <th className="">{item.id}</th>
                                 <td className="">{item.title}</td>
                                 <td className="">{item.author}</td>
                                 <td onClick={()=>handleDelet(item.id)}><FaTrashAlt className="text-danger mytrash"/></td>
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
        <div className="mylist bg-muted">
        <table className="table m-0">
                  <thead>
                      <tr >
                      <th className="text-center">شماره</th>
                      <th className="text-center">عنوان</th>
                      <th className="text-center">نویسنده</th>
                      <th className="text-center">حذف</th>
                      </tr>
                  </thead>
        </table>
                  <div className=" w-100 text-center p-5 ">
                  <h5 className=" w-100 text-center ">هیچ کتابی در لیست موجود نمی باشد</h5>
                  </div>

      </div>
    )
}
   

}
 
export default BookTable;