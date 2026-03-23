function Card() {

    return (

        <>
            {/* <div className="modal fade" id="payment-add">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button className="modal-close" data-bs-dismiss="modal"><i className="icofont-close"></i></button>
                       <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
                            <h3>Payment Details</h3>

                            <input
                                type="text"
                                placeholder="Cardholder Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label>Card Number</label>
                            <CardNumberElement options={elementStyle} />

                            <label>Expiry Date</label>
                            <CardExpiryElement options={elementStyle} />

                            <label>CVC</label>
                            <CardCvcElement options={elementStyle} />

                            <button disabled={loading || !stripe}>
                                {loading ? "Processing..." : "Pay $10"}
                            </button>

                            <p>{message}</p>
                        </form>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Card