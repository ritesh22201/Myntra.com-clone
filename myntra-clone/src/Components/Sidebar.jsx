import { Box, Button, Checkbox, Flex, FormLabel, Heading, Text } from '@chakra-ui/react'
import React from 'react';
import '../CSS/Sidebar.css';
import { BsCircleFill } from 'react-icons/bs';

const Sidebar = () => {
    return (
        <Box w={'20%'}>
            <Flex p={'0 10px'} justifyContent="space-between">
                <FormLabel fontWeight={"700"} >FILTERS</FormLabel>
                <FormLabel fontWeight={"700"} fontSize={"15px"} color={"pink.500"} >CLEAR ALL</FormLabel>

            </Flex>
            <Box border={'1px solid #e5e5e5'} p={'10px'}>
                <Flex alignItems={'center'}>
                    <input style={{ height: '27px', backgroundColor: '#eb1c95' }} name='gender' type="radio" />
                    <label style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '8px' }}>Men</label>
                </Flex>
                <Flex alignItems={'center'}>
                    <input style={{ height: '27px', backgroundColor: '#eb1c95' }} name='gender' type="radio" />
                    <label style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '8px' }}>Women</label>
                </Flex>
                <Flex alignItems={'center'}>
                    <input style={{ height: '27px', backgroundColor: '#eb1c95' }} name='gender' type="radio" />
                    <label style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '8px' }}>Boys</label>
                </Flex>
                <Flex alignItems={'center'}>
                    <input style={{ height: '27px', backgroundColor: '#eb1c95' }} name='gender' type="radio" />
                    <label style={{ fontWeight: 'bold', fontSize: '15px', marginLeft: '8px' }}>Kids</label>
                </Flex>
            </Box>
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>CATEGORIES</Heading>
                <Box>
                    <Checkbox colorScheme={'pink'}>Tshirts</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Shirts</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Jeans</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Kurta Sets</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>BedSheets</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Trousers</Checkbox>
                </Box>
            </Box>
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>BRAND</Heading>
                <Box>
                    <Checkbox colorScheme={'pink'}>Roadster</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Here&Now</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Clovia</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Mast & Harbour</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Dressberry</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Celfie Design</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Kalini</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Street Armor by Pantaloons</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>HRX</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>H&M</Checkbox>
                </Box>
            </Box>
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>PRICE</Heading>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 22 to Rs. 200</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 201 to Rs. 499</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 500 to Rs. 1299</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>Rs. 1300 to Rs. 10000</Checkbox>
                </Box>
            </Box>
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>COLOR</Heading>
                <Box>
                    <Checkbox colorScheme={'pink'}>🟤Brown</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>⚫Black</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>🟢Green</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>⚪White</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>🔴Red</Checkbox>
                </Box>
                <Flex alignItems={'center'}>
                    <Checkbox colorScheme={'pink'}></Checkbox>
                    <Flex ml={'11px'} alignItems={'center'}>
                        <BsCircleFill color='pink' />
                        <Text ml={'3px'}>Pink</Text>
                    </Flex>
                </Flex>
                <Box>
                    <Checkbox colorScheme={'pink'}>🔵Blue</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>🟡Yellow</Checkbox>
                </Box>
            </Box>
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>DISCOUNT RANGE</Heading>
                <Box>
                    <Checkbox colorScheme={'pink'}>10% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>20% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>30% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>40% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>50% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>60% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>70% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>80% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>90% and above</Checkbox>
                </Box>
            </Box>
        </Box>
    )
}

export default Sidebar