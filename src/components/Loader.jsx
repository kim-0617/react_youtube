import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '500px' }}>
      <CircularProgress />
      <div style={{ marginLeft: 20 }}>Loading...</div>
    </Box>
  );
}
