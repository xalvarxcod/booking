import { Container, Paper } from '@mui/material';
import SimplePaper from '../Components/BoxContainer';
import SelectLabels from '../Components/Selector';
import ButtonAppBar from '../Components/TopBar';

function SelectDestination() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <Paper className="paper">
        <SelectLabels text="Destination"></SelectLabels>
      </Paper>
    </div>
  );
}

export default SelectDestination;
