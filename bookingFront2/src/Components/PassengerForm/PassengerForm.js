import "./PassengerForm.css";

function PassengerForm (){
    return (
        <div>
            <form className="formPassenger">
            <div><label  htmlFor="first_name">First Name</label></div>
            <div><input className="form-control"  id="first_name" type="text"/></div>
            <div><label htmlFor="last_name">Last Name</label></div>
            <div><input className="form-control"  id="last_name" type="text"/></div>
            <div class="input-wrapper">
                    <label for="numberpassengers">Number of passengers</label>
                    <select className="form-control" id="numberpassengers">
                    <option>Less than 2 years</option>
                    <option>More than 2 but less than 9 years</option>
                    <option>More than  9 years </option>
                    </select>
                </div>
            <input  className="btn btn-primary" type="submit"/>
            </form>
        </div>
    )
};

export default PassengerForm;