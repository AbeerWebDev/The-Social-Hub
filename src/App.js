import React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

import  Sidebar  from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';


// import Icons from '@material-ui/icons';
// import { Button } from '@mui/material';
// import { Settings } from '@mui/icons-material';


function App() {
  return (
   <Box>
   <Navbar />
   <Stack direction="row" justifyContent="space-between" spacing={2} >
        <Sidebar />
        <Feed />
        <Rightbar />

        </Stack>
    
   </Box>
  );
}

export default App;
