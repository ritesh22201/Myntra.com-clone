import React from 'react'
import {
    Input,
    ListItem,
    UnorderedList,
    Box,
    Heading,
    Text,
    Image,
    Button,
    Flex,
    HStack,
    Divider,
    TagLabel,
    Tag,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Checkbox,
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Scrollbar.css'

const Address = () => {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleContinue = () => {
        navigate("/payment")
    }
    return (
        <Flex h="80vh" justifyContent={"center"} gap="10px" alignItems={"center"}>
            <Box maxW="container.sm" w="100%">
                <Box mt="10px">
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <Heading size={"md"}>Select Delivery Address</Heading>
                        <Button fontWeight={"700"} fontSize={"12px"} onClick={onOpen} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                            Add New Address
                        </Button>
                    </Flex>

                </Box>

                <Text fontWeight={"700"} fontSize={"13px"} textTransform={"uppercase"} >Default Address</Text>

                <Box maxW="container.sm">
                    <Box
                        cursor={"pointer"}
                        mt="10px"
                        p="10px"
                        borderRadius={"3px"}
                        border={"1px solid #eaeaec"}
                    >
                        <Flex alignItems={"center"} gap="10px">
                            <Text fontWeight={"700"}>Sharvari </Text>
                            <Tag
                                size={'sm'}

                                borderRadius='full'
                                variant='outline'
                                colorScheme='green'
                            >
                                <TagLabel>HOME</TagLabel>

                            </Tag>
                        </Flex>
                        <Text fontSize={"sm"}>1321/34 A Ward Residency Colony Shastrinagar,Kolhapur</Text>
                        <Text fontSize={"sm"}>Kolhapur,Maharashtra-416001</Text>
                        <Text mt="10px" fontSize={"sm"}>Mobile:<span style={{ fontWeight: "700" }}>80838374829</span></Text>

                        <UnorderedList fontSize={"sm"}>
                            <ListItem ml="10px" mt="12px">Pay on Delivery available</ListItem>
                        </UnorderedList>
                        <Flex ml="10px" mt="20px" gap="10px">
                            <Button fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                Remove
                            </Button>
                            <Button fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                Edit
                            </Button>
                        </Flex>
                    </Box>

                    <Box maxW="container.sm">
                        <Box
                            // boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                            cursor={"pointer"}
                            mt="10px"
                            p="30px"
                            borderRadius={"3px"}
                            border={"2px dashed #eaeaec"}
                        >
                            <Heading color="#ff5d71" onClick={onOpen} fontWeight={"700"} size={"sm"}>+Add New Address</Heading>
                        </Box>
                    </Box>

                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent h={'450px'}>
                            <ModalHeader color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"sm"}>Add New Address</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody className='scrollbar' pb={6} overflowY={'scroll'}>
                                <FormControl>
                                    <FormLabel color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"11px"}>Contact Details</FormLabel>
                                    <Input focusBorderColor='black' type="text" size="sm" placeholder='Name' />
                                    <Input focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Mobile No.' />
                                </FormControl>

                                <FormControl >
                                    <FormLabel color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"11px"} mt={4}>Address</FormLabel>
                                    <Input focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Pincode' />
                                    <Input focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Address' />
                                    <Input focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Locality / Town' />
                                    <Flex gap="10px">
                                        <Input focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='City / District' />
                                        <Input focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='State' />
                                    </Flex>
                                </FormControl>

                                <FormControl cursor={"pointer"} mt="30px">
                                    <FormLabel color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"11px"}>Save Address As</FormLabel>
                                    <Flex gap="20px" alignItems={"center"}>

                                        <Tag size={'sm'} borderRadius='full' variant='outline' padding="5px 15px">
                                            <TagLabel>HOME</TagLabel>
                                        </Tag>

                                        <Tag size={'sm'} borderRadius='full' padding="5px 15px" variant='outline'>
                                            <TagLabel>WORK</TagLabel>
                                        </Tag>
                                    </Flex>
                                </FormControl>

                                <Flex mt="30px" alignItems={"center"} gap="10px">
                                    <Checkbox colorScheme='pink' />
                                    <Text fontSize={"13px"}>Make this my default address</Text>
                                </Flex>
                            </ModalBody>

                            <ModalFooter boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
                                <Button
                                    w="100%"
                                    fontSize={"13px"}
                                    borderRadius={"none"}
                                    mt="10px"
                                    color="white"
                                    bg="#ff3f6c"
                                    textTransform={"uppercase"}
                                    variant={"unstyled"}
                                    onClick={handleContinue}
                                >
                                    Add Address
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>




                </Box>
            </Box>

            <Box
                w="25%"
                p="15px"
                borderBottom={"1px solid #eaeaec"}
                borderLeft={"1px solid #eaeaec"}
                borderRight={"1px solid #eaeaec"}
            >


                <HStack>

                    <Text color="rgb(83, 87, 102)" fontSize={"sm"} textTransform={"uppercase"} fontWeight={"800"}>
                        Delivery Estimates
                    </Text>
                </HStack>

                <Box mt="10px">
                    <Flex alignItems={"center"} gap="15px">
                        <Image w="35px" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg" />
                        <Text color="rgb(83, 87, 102)">Estimated delivery by <span style={{ fontWeight: "700", color: "rgb(83, 87, 102)" }}>6 Oct 2023</span></Text>
                    </Flex>
                </Box>

                <Box mt="10px">
                    <Flex alignItems={"center"} gap="15px">
                        <Image w="35px" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg" />
                        <Text color="rgb(83, 87, 102)">Estimated delivery by <span style={{ fontWeight: "700", color: "rgb(83, 87, 102)" }}>6 Oct 2023</span></Text>
                    </Flex>
                </Box>

                <Divider
                    m="10px"
                    orientation="horizontal"
                    borderColor="#d4d5d9"
                />

                <Text
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    color={"#535766"}
                    fontWeight={"700"}
                >
                    Price Details (3 Items)
                </Text>

                <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Text>Total MRP</Text>
                    <Text>₹8,197</Text>
                </Flex>

                <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Text>Discount on MRP</Text>
                    <Text color={"#65b8a5"}>-₹6,487</Text>
                </Flex>


                <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Text>
                        Convinience Fee
                        <span
                            style={{
                                marginLeft: "5px",
                                fontWeight: "700",
                                color: "#ff5d71",
                            }}
                        >
                            Know More
                        </span>
                    </Text>
                    <Text>₹20</Text>
                </Flex>

                <Divider orientation="horizontal" borderColor="#d4d5d9" mx={3} />

                <Flex
                    mt="8px"
                    fontSize={"md"}
                    fontWeight={"700"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#3e4152"}
                >
                    <Text>Total Amount</Text>
                    <Text>₹1,730</Text>
                </Flex>

                <Button
                    w="100%"
                    borderRadius={"none"}
                    mt="10px"
                    color="white"
                    bg="#ff3f6c"
                    variant={"unstyled"}
                    onClick={handleContinue}
                >
                    Continue
                </Button>
            </Box>
        </Flex>
    )
}

export default Address;