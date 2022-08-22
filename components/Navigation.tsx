import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Paper from '@mui/material/Paper';



export default function FixedBottomNavigation() {
  
  return (
    <Box>
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation className='bg-slate-700'>
            
          <BottomNavigationAction label="Recents" icon={<HomeIcon className=' text-white' />} />
          <BottomNavigationAction label="Favorites" icon={<LegendToggleIcon className=' text-white'/>} />
          <BottomNavigationAction label="Archive" icon={<VideoLibraryIcon className=' text-white'/>} />
          <BottomNavigationAction label="Archive" icon={<ShoppingBasketIcon className=' text-white'/>} />
          <BottomNavigationAction label="Archive" icon={<WidgetsIcon className=' text-white'/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}



