import { Box, Grid, Spinner } from '@chakra-ui/react';
import React from 'react'
import { useLocation } from 'react-router-dom';

const Loader = () => {
    const location = useLocation();
    return (
        <Grid h={location.pathname === '/products' ? '65vh' : '85vh'} w={location.pathname === '/products' ? '78%' : '99%'} placeItems={'center'}>
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