import './BookList.css'
import { FaTrashAlt } from "react-icons/fa";

const BookTable = () => {
    return ( 
        <>
        <div className="mylist bg-muted">
          <table class="table ">
                    <thead>
                        <tr className="">
                        <th className="">شماره</th>
                        <th className="">عنوان</th>
                        <th className="">نویسنده</th>
                        <th className="">حذف</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="">
                            <th className="">1</th>
                            <td className="">هوش مصنوعی</td>
                            <td className="">وحید سعید</td>
                            <td className="text-danger mytrash"><FaTrashAlt/></td>
                        </tr>
                    </tbody>
            </table>
            <button className="btn btn-danger mybtn btn-sm">حذف همه</button>
        </div>
        </>
     );
}
 
export default BookTable;