import { Box, Grid, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Loader = () => {
    const location = useLocation();
    
    return (
        <Grid h={location.pathname === '/products' ? '65vh' : '85vh'} w={location.pathname === '/products' ? '78%' : '99%'} ml={location.pathname === '/products' ? '35px' : ''} placeItems={'center'}>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='pink.400'
                size='xl'
            />
        </Grid>
    )
}

export default Loader;