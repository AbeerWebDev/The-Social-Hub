import Box from '@mui/material/Box';
import React from 'react'

const Sidebar = () => {
  return (
    <Box bgcolor='skyblue' flex={1} padding={2} sx={{display: {xs: 'none', sm: 'block' }}}>Sidebar</Box>
  )
}

export default Sidebar