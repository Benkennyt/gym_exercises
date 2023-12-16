import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/pexels-leon-ardho-2468339.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml: {sm: '50px'}
    }} position={'relative'} p={'20px'}>
        <Typography color={'#025d93'} fontWeight={'600'} fontSize={'26px'}>
            Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize: {lg: '40px', xs:'36px'}}} mb={'23px'} mt={'10px'}>
           Get Sweaty <br/> Flash those pearly whites <br/> and Hit Repeat
        </Typography>
        
        <Typography fontSize={'22px'} lineHeight={'35px'} mb={4}>
            Explore exercises for the best results!
        </Typography>

            <a  href='#exercises'>
                <button className='explore-btn'>
                    Explore
                </button>
            </a>

        <Typography 
            fontWeight={600}
            color={'#025d93'}
            sx={{
                opacity:0.1,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize={'200px'}
        >
           Vital<span style={{ color: '#6eb2cc'}}>Fit</span>
        </Typography>

        <img  src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner