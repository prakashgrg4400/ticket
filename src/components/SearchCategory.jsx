import Search from "./Search";
import "../assets/css/searchCategory.css";

function SearchCategory() {
    return (
        <section className="search-section">
            <div className="container">
                <h2>Search Event by Category</h2>
                <p>Dont forget to Miss Event</p>
                <Search />
            </div>
        </section>
    );
}

export default SearchCategory;
