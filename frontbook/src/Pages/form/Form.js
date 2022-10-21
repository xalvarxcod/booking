import { Button, Container, Paper } from '@mui/material';
import ButtonAppBar from '../Components/TopBar';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Passenger from './Passenger';

function Form(props) {
  let navigate = useNavigate();

  const [Name, setName] = React.useState('');
  const [extraPassenger, setExtraPassenger] = React.useState(false);
  const [passengerButton, setPassengerButton] = React.useState('Add Passenger');
  const [passengerAge1, setPassengerAge1] = React.useState(0);
  const [passengerAge2, setPassengerAge2] = React.useState(0);
  const [finalPrice, setFinalPrice] = React.useState(30);

  const handleBuyClick = () => {
    setErrorMessage('Example error message!');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge1 = (e) => {
    setAgeRange(e.target.value);
    console.log('test');
    if (0 == e.target.value) {
      setPassengerAge1(e.target.value);
      calculateFinalPrice(e.target.value, 1);
    } else if (20 == e.target.value) {
      setPassengerAge1(e.target.value);
      calculateFinalPrice(e.target.value, 1);
    } else if (30 == e.target.value) {
      setPassengerAge1(e.target.value);
      calculateFinalPrice(e.target.value, 1);
    }
  };

  const handleChangeAge2 = (e) => {
    setAgeRange(e.target.value);
    //console.log(flightData)
    if (0 == e.target.value) {
      setPassengerAge2(e.target.value);
      calculateFinalPrice(e.target.value, 2);
    } else if (20 == e.target.value) {
      setPassengerAge2(e.target.value);
      calculateFinalPrice(e.target.value, 2);
    } else if (30 == e.target.value) {
      setPassengerAge2(e.target.value);
      calculateFinalPrice(e.target.value, 2);
    }
  };

  const calculateFinalPrice = (e, fn) => {
    let flightprice = 30;
    console.log(e);
    if (fn == 1) {
      flightprice = flightprice + Number(e) + Number(passengerAge2);
    } else if (fn == 2) {
      flightprice = flightprice + Number(e) + Number(passengerAge1);
    }
    setFinalPrice(flightprice);
  };

  const handleChange = (event) => {
    console.log(Name);
    console.log('Name');
    if (Name == 'Jorge') {
      navigate('/userform/fail');
    } else {
      navigate('/userform/succed');
    }
  };

  const handlePassenger = (event) => {
    if (extraPassenger == false) {
      setExtraPassenger(true);
      setPassengerButton('Remove passenger');
    } else {
      setExtraPassenger(false);
      setPassengerButton('Add passenger');
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <Paper
        style={{
          display: 'flex',
          margin: '10px auto',
          padding: '20px 15px',
          width: 700,
          height: 30,
          flexWrap: 'wrap',
        }}
      >
        <Button
          style={{ marginTop: '0px', marginLeft: '5px', height: '100%' }}
          onClick={() => {
            navigate('/');
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: '0px', marginLeft: '10px', height: '100%' }}
          onClick={handleChange}
        >
          {' '}
          Confirm Purchase
        </Button>
        <Button
          variant="contained"
          style={{ marginTop: '0px', marginLeft: '100px', height: '100%' }}
          onClick={handlePassenger}
        >
          {passengerButton}
        </Button>
        <p style={{ marginTop: '0px', marginLeft: '80px', height: '100%' }}>
          Price: {finalPrice}
        </p>
      </Paper>
      <Passenger
        text="Passenger 1"
        functn={handleChangeAge1}
        functn2={handleChangeName}
      ></Passenger>
      {extraPassenger ? (
        <Passenger text="Passenger 2" functn={handleChangeAge2}></Passenger>
      ) : null}
    </div>
  );
}

export default Form;
