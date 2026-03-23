import { useState } from "react";
import axios from "axios";
import URL from "../../config/API";
import "./contact.css";

function Contact() {

    const [token] = useState(localStorage.getItem("token"));

    const [contactForm, setContactForm] = useState({
        full_name: "",
        email: "",
        mobile: "",
        messages: ""
    });

    const submitContact = (e) => {
        e.preventDefault();

        axios.post(`${URL.BASE_URL}/save-contact`, contactForm, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res);
            alert("Message Sent Successfully");

            // clear form
            setContactForm({
                full_name: "",
                email: "",
                mobile: "",
                messages: ""
            });

        })
        .catch(err => {
            console.log(err);
            alert("Error sending message");
        });
    };

    const eventHandler = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div className="contact-container">
                <h2>Contact Us</h2>

                <form onSubmit={submitContact}>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            value={contactForm.full_name}
                            onChange={eventHandler}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={contactForm.email}
                            onChange={eventHandler}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={contactForm.mobile}
                            onChange={eventHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="messages"
                            value={contactForm.messages}
                            onChange={eventHandler}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>

                </form>
            </div>
        </>
    );
}

export default Contact;