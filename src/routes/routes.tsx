import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Box from '@mui/material/Box';

function Pages() {
  return (
    <Box sx={{ fontFamily: 'PT Sans' }}>
      <Routes>
        <Route path='' element={<Home />}/>      
      </Routes>
    </Box>
  );
}

export default Pages;
