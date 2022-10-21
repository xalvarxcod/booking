import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

function SelectAge(props) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={0}
        name="radio-buttons-group"
        onChange={props.functn}
      >
        <FormControlLabel value={0} control={<Radio />} label="<2 years old" />
        <FormControlLabel
          value={20}
          control={<Radio />}
          label="[2-9] years old"
        />
        <FormControlLabel value={30} control={<Radio />} label=">9 years old" />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectAge;
