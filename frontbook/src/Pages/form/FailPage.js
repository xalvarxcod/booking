import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function FailPage() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '50%',
        border: '3px solid red',
        padding: '10px',
      }}
    >
      <h2 style={{ margin: 'auto' }}>PURCHASE FAILED</h2>
      <p>Problem: Invalid name</p>
    </div>
  );
}

export default FailPage;
