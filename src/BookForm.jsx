import './BookList.css'

const BookForm = () => {
    return ( 
        <div className="myform p-3">
        <form>
            <label className="form-label">عنوان</label>
            <input className="form-control" type="text" />
            <label className="form-label">نویسنده</label>
            <input className="form-control" type="text" />
            <label className="form-label">شماره#</label>
            <input className="form-control" type="text" />
            <button className="btn btn-success w-100 p-1 my-4">افزودن</button>
        </form>
      </div>
     );
}
 
export default BookForm;