import { Box, Grid, Spinner } from '@chakra-ui/react';
import React from 'react'

const Loader = () => {
    return (
        <Grid h={'85vh'} placeItems={'center'}>
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