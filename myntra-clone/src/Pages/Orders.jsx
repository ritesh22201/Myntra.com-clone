import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'

const Orders = () => {
    return (
        <Box minH={'100vh'} w={'77%'} m={'50px auto'}>
            <Heading fontSize={'18px'}>Account</Heading>
            <Text fontSize={'12px'}>Ritesh Goswami</Text>
            <Flex w={'100%'} borderTop={'1px solid #cccbcb'} mt={'13px'}>
                <Box w={'18%'} borderRight={'1px solid #cccbcb'} minH={'83vh'}>
                    <Box  w={'80%'} borderBottom={'1px solid #cccbcb'} p={'20px 0'} color={'gray.600'}>
                        <Text>Overview</Text>
                    </Box>
                    <Box w={'80%'} borderBottom={'1px solid #cccbcb'} p={'20px 0'} color={'gray.500'}>
                        <Text fontSize={'13px'}>ORDERS</Text>
                        <Text mt={'10px'} color={'#14cda8'} fontWeight={'bold'}>Orders & Returns</Text>
                    </Box>
                    <Box w={'80%'} color={'gray.600'} borderBottom={'1px solid #cccbcb'} p={'20px 0'}>
                        <Text color={'gray.500'} fontSize={'13px'}>CREDITS</Text>
                        <Text mt={'10px'}>Coupons</Text>
                        <Text>Myntra Credit</Text>
                        <Text>MynCash</Text>
                    </Box>
                    <Box w={'80%'} color={'gray.600'} p={'20px 0'}>
                        <Text color={'gray.500'} fontSize={'13px'}>ACCOUNT</Text>
                        <Text mt={'10px'}>Profile</Text>
                        <Text>Saved Cards</Text>
                        <Text>Addresses</Text>
                        <Text>Myntra Insider</Text>
                    </Box>
                </Box>
                <Box></Box>
            </Flex>
        </Box>
    )
}

export default Orders;