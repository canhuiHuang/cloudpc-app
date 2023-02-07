import { useState } from 'react';
import Login from './Auth/Login/Login';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from '../routes/PrivateRoutes';
import UnLoggedRoutes from '../routes/UnloggedRoutes';
import Auth from './Auth/Auth';
import Panel from './Panel/Panel';
import Header from '../components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Panel />} path="/panel/*"></Route>
          </Route>
          <Route element={<UnLoggedRoutes />}>
            <Route element={<Auth />} path="auth/*"></Route>
            <Route path="/*" element={<Navigate replace to="auth" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
