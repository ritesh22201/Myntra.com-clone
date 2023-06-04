import { Box, Spinner } from '@chakra-ui/react';
import React from 'react'

const Loader = () => {
    return (
        <Box h={'80vh'} display={'grid'} placeItems={'center'}>
            {<Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='pink.400'
                size='xl'
            />}
        </Box>
    )
}

export default Loader;