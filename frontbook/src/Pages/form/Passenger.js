import { Button, Container, Paper } from '@mui/material';
import ButtonAppBar from '../Components/TopBar';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { green } from '@mui/material/colors';
import SelectAge from '../Components/Selectors/SelectAge';

function Passenger(props) {
  let navigate = useNavigate();
  //let price=0;
  const [errorMessage, setErrorMessage] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Price, setPrice] = React.useState('');
  const [ageRange, setAgeRange] = React.useState('');
  const [flightData, setFlightData] = React.useState([]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Paper
        style={{
          display: 'flex',
          margin: '10px auto',
          padding: '20px 15px',
          width: 700,
          height: 230,
          flexWrap: 'wrap',
        }}
      >
        <div className="outContainer">{props.text}</div>
        <div className="outContainer2">
          <TextField
            style={{ marginLeft: '10px', marginTop: '20px' }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={Name}
            onChange={(e) => {
              handleChangeName(e);
              props.functn2(e);
            }}
          />
          <TextField
            style={{ marginLeft: '10px', marginTop: '20px' }}
            id="outlined-basic"
            label="Surname(s)"
            variant="outlined"
          />
          <TextField
            style={{ marginLeft: '10px', marginTop: '20px' }}
            id="outlined-basic"
            label="NIF"
            variant="outlined"
          />
          <TextField
            style={{ marginLeft: '10px', marginTop: '20px' }}
            id="outlined-basic"
            label="Other(Passport)"
            variant="outlined"
          />
        </div>
        <div style={{ marginLeft: '60px', marginTop: '20px' }}>
          <SelectAge functn={props.functn}></SelectAge>
        </div>
        <p
          style={{ marginTop: '10px', marginLeft: '60px', color: green }}
          hidden={false}
        >
          {Price}
        </p>
      </Paper>
    </div>
  );
}

export default Passenger;
