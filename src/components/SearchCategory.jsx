import Search from "./Search";
import "../assets/css/searchCategory.css";
import { motion } from "framer-motion";
import { slideup } from "../animation/animate";

function SearchCategory() {
    return (
        <section className="search-section">
            <motion.div
                variants={slideup(1)}
                initial="initial"
                whileInView={"animate"}
                className="container"
            >
                <h2>Search Event by Category</h2>
                <p>Dont forget to Miss Event</p>
                <Search />
            </motion.div>
        </section>
    );
}

export default SearchCategory;
