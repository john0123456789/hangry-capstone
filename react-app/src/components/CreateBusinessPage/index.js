import { createBusinessThunk } from "../../store/business";
import { clearReviews } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import './index.css'

function CreateBusinessPage({setShowModal}) {
    const dispatch = useDispatch();
    const history = useHistory();

    let errorsObj = {content: ''}
    const [reactErrors, setReactErrors] = useState(errorsObj);

    const user = useSelector(state => state.session.user)

    const [user_id] = useState(user.id);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");

    const handleBusinessSubmit = async (e) => {
        e.preventDefault();

        let error = false;
        errorsObj = {...errorsObj};
        if(name === '') {
            errorsObj.name = "Business Name field cannot be empty.";
            error = true;
        } else if(name.length < 2 || name.length > 35) {
            errorsObj.name = "Business Name must be greater than 2 characters and shorter than 35."
            error = true;
        }
        if(address === '') {
            errorsObj.address = "Address field cannot be empty.";
            error = true;
        }
        if(zipcode === '') {
            errorsObj.zipcode = "Zipcode field cannot be empty.";
            error = true;
        } else if(isNaN(zipcode)) {
            errorsObj.zipcode = "Zipcode field must contain only numbers."
            error = true;
        } else if(zipcode.length > 5 || zipcode.length < 5) {
            errorsObj.zipcode = "Zipcode field must contain 5 digits."
            error = true;
        }
        if(city === '') {
            errorsObj.city = "City field cannot be empty."
            error = true;
        } else if(city.length < 3 || city.length > 37) {
            errorsObj.city = "City name must greater than 2 characters and shorter than 37."
            error = true;
        }
        if(!state) {
            errorsObj.state = "Please select a State."
            error = true;
        }
        if(phone_number === '') {
            errorsObj.phone_number = "Phone Number field cannot be empty."
            error = true;
        } else if(isNaN(phone_number)) {
            errorsObj.phone_number = "Phone Number field must contain only numbers."
            error = true;
        } else if(phone_number.length > 10 || phone_number.length < 10) {
            errorsObj.phone_number = "Phone Number must be a total of 10 digits including the Area Code."
            error = true;
        }
        if(website === '') {
            errorsObj.website = "Website field cannot be empty."
            error = true;
        } else if(!website.includes('.')) {
            errorsObj.website = "Please input a valid Website URL."
            error = true;
        }

        setReactErrors(errorsObj);

        if(!error) {
        const createBusiness = {
            user_id,
            name,
            address,
            zipcode,
            city,
            state,
            phone_number,
            website
        }

        let newBusiness = await dispatch(createBusinessThunk(createBusiness))
            if(newBusiness) {
                dispatch(clearReviews())
                setShowModal(false)
                history.push(`/business/${newBusiness.id}`)
            }
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowModal(false)
        history.push("/")
    }

    return (
        <form className="business-form">
            <h1 className="addbusinesstitle">Add your business!</h1>
            <div className="businesserrors">
                {Object.values(reactErrors).map((error, idx) => <ul key={idx}>{error}</ul>)}
            </div>
            <label className="addbusiness-labels">Business Name</label>
            <input type="text" className="inputfirst" placeholder="Business Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label className="addbusiness-labels">Street Address</label>
            <input type="text" className="inputs" placeholder="Street Address i.e. 123 Apple St" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label className="addbusiness-labels">Zipcode</label>
            <input type="text" className="inputs" placeholder="Zipcode i.e. 12345" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            <label className="addbusiness-labels">City</label>
            <input type="text" className="inputs" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
            <div>
                <label className="addbusiness-labels">State</label>
            </div>
            <select className="inputs" value={state} onChange={(e) => setState(e.target.value)}>
              <option>Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <label className="addbusiness-labels">Phone Number</label>
            <input type="text" className="inputs" placeholder="Phone Number i.e. 1234567891" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <label className="addbusiness-labels">Website URL</label>
            <input type="text" className="inputs" placeholder="Website URL i.e. https://abc.com" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            <button type="submit" className="createbutton" onClick={handleBusinessSubmit}>Add Business</button>
            <button type="button" className="createbutton" onClick={handleCancelClick}>Cancel</button>
        </form>
    )
}

export default CreateBusinessPage;
