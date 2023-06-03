import { Box, Text, Image, Button } from '@chakra-ui/react';
import React from 'react';
import errorImg from '../Assets/error_page.png';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <Box h={'80vh'} display={'grid'} placeItems={'center'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Image mb={'20px'} src={errorImg} alt={'errorImg'} />
                <Text fontSize={'35px'}>We couldn't find any matches!</Text>
                <Text fontSize={'14px'} color={'gray.500'}>Please check the spelling or try searching something else</Text>
                <Button fontWeight={'bold'} borderRadius={'none'} _hover={'none'} w={'100%'} mt={'30px'} bg={'#FF3F6C'} color={'white'} onClick={() => navigate('/')}>Back to Home</Button>
            </Box>
        </Box>
    )
}

export default ErrorPage;