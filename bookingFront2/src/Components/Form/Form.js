import './Form.css';
import {useState} from 'react';
import PassengerForm from '../PassengerForm/PassengerForm';

function Form({vector}) {

    const handleChange = event => {
        console.log(event.target.value);
        var date = document.getElementById("datedeparture");
        date.max = event.target.value;
    };
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(true);
     };


    return (
        <div className="box">
            <h3>Book Flights</h3>
            <form>
                <legend>Book a Flight</legend>
                <div class="input-wrapper">
                    <label for="departureflight">Departing from</label>
                    <select id="departureflight" className="form-control">
                    <option>Seville</option>
                    <option disabled >Madrid</option>
                    <option disabled>Barcelona</option>
                    </select>
                </div>
                <div class="input-wrapper">
                    <label for="arriveflight">Arriving at</label>
                    <select className="form-control" id="arriveflight" onChange={handleChange} >
                        {
                            vector.map((obj, index) => (
                                <option key={obj.minDate}  value={obj.maxDate} id={index} >{obj.arriveCity}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>One-way<input type="radio" name="way" value="oneway" /></label>
                    <label>Round-trip<input type="radio" name="way" value="roundtrip" /></label>
                </div>
                <div className='dates'>
                    <div>
                        <label for ="datedeparture">Select a date of departure</label>
                        <input className="form-control" type="date" min="2022-10-21" max="2022-11-20" id="datedeparture" name="date"  placeholder="" required ></input>
                    </div>
                    <div>
                        <label for ="datereturn">Select a date of return</label>
                        <input  className="form-control" type="date" min="2022-10-21" max="2022-11-29" id="datedereturn" name="date"  placeholder="" required ></input>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="numberpassengers">Number of passengers</label>
                    <select className="form-control" id="numberpassengers">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    </select>
                </div>
                <input type="submit" value="Search" className="btn btn-primary" onClick={handleClick} />
            </form>
            {isShown && <PassengerForm/>}
        </div>

    )
};

export default Form;