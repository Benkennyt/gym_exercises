import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-around'}
      sx={{gap: { sm: '122px', xs: '40px'}, mt:{ sm: '32px' , xs:'20px'}, justifyContent: 'none'}}
      px={'20px'}
    >
      <Link to='/' style={{ textDecoration: 'none'}}>
        <h1 style={{ color: '#025d93'}}>Vital<span style={{ color: '#6eb2cc'}}>Fit</span></h1>
      </Link>
      <Stack
        direction={'row'}
        gap={'40px'}
        fontSize={'24px'}
        alignItems={'flex-end'}
      >
        <Link className='nav-header' to={'/'} style={{ textDecoration: 'none', color: '#025d93'}}>Home</Link>
        <a className='nav-header' href='#exercises' style={{ textDecoration: 'none', color: '#025d93'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar