import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function SuccedPage() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '50%',
        border: '3px solid green',
        padding: '10px',
      }}
    >
      <h2 style={{ margin: 'auto' }}>You have bought your flight</h2>
      <p>See you on board!!</p>
    </div>
  );
}

export default SuccedPage;
