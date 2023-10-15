import {
    Box,
    Flex,
    Text,
    Image,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useSteps,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
// import { Icon, WarningIcon } from '@chakra-ui/icons'
// import {
//     HamburgerIcon,
//     CloseIcon,
//     ChevronDownIcon,
//     ChevronRightIcon,
// } from '@chakra-ui/icons';

import logo from '../Assets/myntra-logo.webp'
import { useLocation, useNavigate } from 'react-router-dom';
import shieldimg from '../Assets/secure.png'

const steps = [
    { title: 'Bag' },
    { title: 'Address' },
    { title: 'Payment' },
]


export function NavbarTwo() {
    // const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const location = useLocation();
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })
    const activeStepText = steps[activeStep].description

    const max = steps.length - 1
    const progressPercent = (activeStep / max) * 100;

    const handleBag = (page) => {
        navigate(page);
    }

    return (
        <Box position={"sticky"} zIndex={"overlay"} top={"0"} >
            <Flex

                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 3 }}
                //   borderBottom={1}
                padding={"18px"}
                boxShadow='md'
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent={'space-between'}
            >
                <Flex>
                    <Image
                        onClick={() => navigate('/')}
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')} src={logo} w={{ base: "80px", sm: "80px", md: "80px", lg: "60px", xl: "60px", "2xl": "60px" }} />
                </Flex>
                <Flex>
                    <Flex gap="10px" display={{base : 'none', sm : 'none'}}>
                        <Text color={location.pathname == '/cart' && 'green.500'} borderBottom={location.pathname == '/cart' && '3px solid #22b600'} fontWeight={location.pathname == '/cart' && 'bold'} _hover={{cursor : 'pointer'}} onClick={() => handleBag('/cart')}>Bag</Text>
                        <Text>----------</Text>

                        <Text color={location.pathname == '/address' ? 'green.500' : ''} pointerEvents={location.pathname === '/cart' ? 'none' : 'all'} borderBottom={location.pathname == '/address' && '3px solid #22b600'} fontWeight={location.pathname == '/address' && 'bold'}  _hover={{cursor : 'pointer'}} onClick={() => handleBag('/address')}>Address</Text>

                        <Text>----------</Text>
                        <Text color={location.pathname == '/payment' && 'green.500'} pointerEvents={location.pathname === '/cart' || location.pathname === '/address' ? 'none' : 'all'} borderBottom={location.pathname == '/payment' && '3px solid #22b600'} fontWeight={location.pathname == '/payment' && 'bold'}  _hover={{cursor : 'pointer'}} onClick={() => handleBag('/payment')}>Payment</Text>
                    </Flex>
                </Flex>

                <Flex gap="5px" alignItems={'center'}>
                    <Box w="25%">
                        <Image src={shieldimg} w="100%" />
                    </Box>
                    <Text fontSize={'12px'} fontWeight={700}>1 0 0 % S E C U R E</Text>
                </Flex>
            </Flex>
        </Box>
    );
}

