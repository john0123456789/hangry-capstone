import { createBusinessThunk } from "../../store/business";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function CreateBusinessPage() {
    const dispatch = useDispatch();
    const history = useHistory();

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
                history.push('/businesses')
            }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push("/businesses")
    }

    return (
        <form className="business-form">
            <h1>Add your business!</h1>
            <input type="text" placeholder="Business Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Street Address i.e. 123 Apple St" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" placeholder="Zipcode i.e. 12345" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
            <select value={state} onChange={(e) => setState(e.target.value)}>
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
            <input type="text" placeholder="Phone Number i.e. 1234567891" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
            <input type="text" placeholder="Website URL i.e. https://abc.com" value={website} onChange={(e) => setWebsite(e.target.value)}/>
            <button type="submit" onClick={handleBusinessSubmit}>Add Business</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
    )
}

export default CreateBusinessPage;
