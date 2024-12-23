import "../assets/css/search.css";
function Search() {
    return (
        <form action="">
            <select name="" id="" className="input-style">
                <option value="All">All</option>
                <option value="concert">Concert</option>
                <option value="party">Party</option>
                <option value="seminar">Seminar</option>
                <option value="business">Business</option>
                <option value="exhibition">Exhibition</option>
            </select>
            <input
                type="date"
                name=""
                id=""
                className="input-style"
                placeholder="mm/dd/yy"
            />
            <div className="search-buttons">
                <button className="search search-reset-btn">Search</button>
                <button className="reset search-reset-btn ">Reset</button>
            </div>
        </form>
    );
}

export default Search;
