import { useEffect, useState } from "react"
import axios from "axios"
import URL from "../config/API"

function Address() {
    const [countries, setCountries] = useState();
    const [contryId, setCountryId] = useState();
    const [state, setState] = useState();
    const [stateId, setStateId] = useState();
    const [cities, setCities] = useState();
    const [savedAddresses, setSavedAddresses] = useState([]);

    // // const[product,setProduct]=useState();
    const [addressform, setAddressForm] = useState({
        location: "",
        country: "",
        state: "",
        city: "",
        postalCode: "",
        street: "",
        userId: 1
    })




    const submitAddress = (e) => {
        e.preventDefault()
        axios.post(`${URL.BASE_URL}/save-address`, addressform, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res);

        })

    }

    const eventHendler = (e) => {
        setAddressForm(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }


    const fetchCountires = () => {
        try {
            axios.get(`${URL.BASE_URL}/address/countries`, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                setCountries(res?.data?.data);
                fetchState()
            })
        } catch {

        }
    }


    const fetchState = () => {

        const parmas = {
            countries_id: contryId?.country
        }
        try {

            if (contryId && contryId?.country != "Select Contry") {
                axios.post(`${URL.BASE_URL}/address/states`, parmas, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    setState(res?.data?.data);
                })
            }
        } catch {

        }
    }

    useEffect(() => {
        fetchState()
    }, [contryId])


    const countryHendler = (e) => {
        setCountryId(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }


    useEffect(() => {
        fetchCountires();
    }, [0])


    const stateHandler = (e) => {
        setStateId(preState => ({ ...preState, [e.target.name]: e.target.value }))
    }


    const fetchCities = () => {
        const parmas = {
            state_id: stateId?.state
        }
        try {

            if (stateId && stateId?.state != "Select State") {
                axios.post(`${URL.BASE_URL}/address/cities`, parmas, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    setCities(res?.data?.data);
                })
            }
        } catch {

        }
    }
    useEffect(() => {
        fetchCities()
    }, [stateId])




    const homeAddresses = savedAddresses?.filter(addr => addr.location === "home") || []; // CHANGED: Filter from savedAddresses




    return (

        <>
            <div className="modal fade" id="address-add">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button className="modal-close" data-bs-dismiss="modal"><i className="icofont-close"></i></button>
                        <form className="modal-form" onSubmit={submitAddress}>
                            <div className="form-title">
                                <h3>add new address</h3>
                            </div>
                            <div className="form-group">
                                <label className="form-label">title</label>
                                <select className="form-select" name="location" onChange={eventHendler}>
                                    <option selected>choose title</option>




                                    {homeAddresses.length > 0 && (
                                        <option vaue="home">home ({homeAddresses.length} saved)</option>
                                    )}
                                    <option value="office">office</option>
                                    <option value="Bussiness">Bussiness</option>
                                    <option value="academy">academy</option>
                                    <option value="others">others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Contry</label>
                                <select className="form-select" name="country" onChange={(e) => { countryHendler(e); eventHendler(e) }}>
                                    <option selected>Select Contry</option>
                                    {countries && countries?.map(row => (
                                        <option value={row.id}>{row.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">State</label>
                                <select className="form-select" name="state" onChange={(e) => {
                                    stateHandler(e);
                                    eventHendler(e);
                                }}>
                                    <option selected>Select State</option>
                                    {state && state?.map(row => (
                                        <option value={row.id}>{row.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Cities</label>
                                <select className="form-select" name="city" onChange={eventHendler}>
                                    <option selected>Select Cities</option>
                                    {cities && cities?.map(row => (
                                        <option value={row.id}>{row.city}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="form-group">
                                <label className="form-label">address</label>
                                <textarea className="form-control" name="street" placeholder="Enter your address" onChange={eventHendler} required></textarea>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Pincode</label>
                                <input type="number" className="form-select" placeholder="Pincode" value={addressform.postalCode} name="postalCode" onChange={eventHendler} />
                            </div>
                            <button className="form-btn" type="submit">save address info</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}


export default Address