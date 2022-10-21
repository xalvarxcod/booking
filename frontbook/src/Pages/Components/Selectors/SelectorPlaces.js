import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import '../project.css';

function SelectorPlaces(props) {
  return (
    <FormControl className="eachSelector">
      <InputLabel id="demo-simple-select-helper-label">Origin</InputLabel>
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
        <MenuItem value={10}>Madrid</MenuItem>
        <MenuItem value={20}>Barcelona</MenuItem>
        <MenuItem value={30}>Sevilla</MenuItem>
        <MenuItem value={40}>Valencia</MenuItem>
      </Select>
      <FormHelperText>Select Origin</FormHelperText>
    </FormControl>
  );
}

export default SelectorPlaces;
