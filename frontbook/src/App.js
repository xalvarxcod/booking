import './App.css';

import ButtonAppBar from './Pages/Components/TopBar';
import SelectDestination from './Pages/selectDesination/SelectDestination';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Pages/form/Form';
import SuccedPage from './Pages/form/SuccedPage';
import FailPage from './Pages/form/FailPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectDestination />} />
        <Route path="/userform" element={<Form />} />
        <Route path="/userform/succed" element={<SuccedPage />} />
        <Route path="/userform/fail" element={<FailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
