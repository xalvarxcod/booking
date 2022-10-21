import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';

function SelectorDestinations(props) {
  const [flightData, setFlightData] = React.useState([]);
  React.useEffect(() => {
    console.log('testlogin');
    fetch(`http://localhost:8081/flight/getAll`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setFlightData(result);
      });

  }, []);

  return (
    <FormControl disabled={props.boolVariable}>
      <InputLabel id="demo-simple-select-helper-label">Destination</InputLabel>
      {flightData.map((aux) => (
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.value}
          label="Age"
          onChange={props.funct}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>{aux.destination1}</MenuItem>
          <MenuItem value={20}>{aux.destination2}</MenuItem>
          <MenuItem value={30}>{aux.destination3}</MenuItem>
        </Select>
      ))}
      <FormHelperText>Select Destination</FormHelperText>
    </FormControl>
  );
}

export default SelectorDestinations;
