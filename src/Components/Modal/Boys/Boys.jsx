import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";
import "../Man/OutOfstock.css";


function Boys(){
    return(
        <>
        <div className="container1">
            <FaBoxOpen size={80} color="#ff6b6b" />

            <h1 className="title1">Product Currently Out of Stock</h1>

            <p className="text1">
                We are working to restock this product soon. Stay tuned!
            </p>

            <Link to="/" className="button1">
                Go to Home
            </Link>
        </div>
       </>
    )
}

export default Boys;