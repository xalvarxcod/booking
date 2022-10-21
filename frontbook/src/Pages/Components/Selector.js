import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicDatePicker from './Calendar';
import './project.css';
import { useNavigate } from 'react-router-dom';
import SelectorPlaces from './Selectors/SelectorPlaces';
import SelectorDestinations from './Selectors/SelectorDestinations';
import SelectWayofTrip from './Selectors/SelectWayfTrip';
import { Button } from '@mui/material';

let bool = true;

export default function SelectLabels(props) {
  const [destination, setDestination] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [trayecto, settrayecto] = React.useState('');

  let navigate = useNavigate();

  const handleChange = (event) => {
    setLocation(event.target.value);
    if (event.target.value == 30) {
      bool = false;
    } else {
      bool = true;
    }
  };
  const handleChange2 = (event) => {
    setDestination(event.target.value);
  };
  const handleChange3 = (event) => {
    settrayecto(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <h2>WELCOME TO OUR AIRLINE</h2>
        <p>SELECT YOUR FLIGHT</p>
        <div className="selectores">
          <div className="dcha">
            <SelectorPlaces
              style={{
                marginleft: '10px',
                padding: '20px 15px',
                textAlign: 'center',
              }}
              className="dcha"
              funct={handleChange}
              value={location}
            ></SelectorPlaces>
          </div>

          <div className="dcha">
            <SelectorDestinations
              className="dcha"
              funct={handleChange2}
              value={destination}
              boolVariable={bool}
            ></SelectorDestinations>
          </div>

          <div className="dcha">
            <SelectWayofTrip
              funct={handleChange3}
              value={trayecto}
            ></SelectWayofTrip>
          </div>
        </div>
        <div className="selectores">
          <BasicDatePicker text="Departure date"></BasicDatePicker>
          <BasicDatePicker
            className="dcha"
            text="Return date"
          ></BasicDatePicker>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              navigate('/userform');
            }}
            style={{ marginTop: '20px', textAlign: 'center' }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
