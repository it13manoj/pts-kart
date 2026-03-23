import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";
import "./OutOfstock.css";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../config/API";

function Man() {
    const [token] = useState(localStorage.getItem("token"));

    const getProducts = () => {
        axios.get(`${URL.BASE_URL}/product`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res?.data);
        })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (token) {
            getProducts();
        }
    }, [token]);



    return (
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
    );
}
export default Man;