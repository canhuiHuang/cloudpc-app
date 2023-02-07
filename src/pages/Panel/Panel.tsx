import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import General from './General/General';
import PCs from './PCs/PCs';
import History from './History/History';
import './Panel.scss';

const Panel = () => {
  return (
    <Flex className="panel-container">
      <Sidebar />
      <Box className="panel-view">
        <Routes>
          <Route path="general" element={<General />} />
          <Route path="my-pcs/*" element={<PCs />} />
          <Route path="history" element={<History />} />
          <Route path="/*" element={<Navigate replace to="general" />} />
        </Routes>
      </Box>
    </Flex>
  );
};

export default Panel;
