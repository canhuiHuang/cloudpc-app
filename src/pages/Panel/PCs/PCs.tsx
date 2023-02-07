import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PC from './PC/PC';
import List from './List/List';

const PCs = () => {
  return (
    <>
      <Routes>
        <Route path=":identifier/*" element={<PC />} />
        <Route path="home" element={<List />} />
        <Route path="/*" element={<Navigate replace to="home" />} />
      </Routes>
    </>
  );
};

export default PCs;
