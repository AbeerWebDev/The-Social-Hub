import Box from '@mui/material/Box';
import React from 'react'

const Rightbar = () => {
  return (
    <Box 
    flex={2} 
    padding={2} 
    sx={{display: {xs: 'none', sm: 'block'}}}
    >
      <Box position='fixed'>
      hello

      </Box>
    </Box>
  )
}

export default Rightbar