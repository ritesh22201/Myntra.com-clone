import React from 'react'
import {
    Box, Container, Flex, HStack, Heading, Text, Button, VStack, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    AccordionIcon,
    Divider,
    Image,
    useDisclosure,
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { deliverDate } from '../constants/deliverDate';
import { useNavigate } from 'react-router-dom';

const PaymentInfo = ({totalPrice, discountedPrice, couponValue, couponDiscount, children, handlePayment}) => {
    const {cart} = useSelector(store => store.cartReducer);
    const {onOpen} = useDisclosure();
    const navigate = useNavigate();

    return (
        <Box
            w= {window.location.pathname === '/payment' ? '40%' : "25%"}
            p="15px"
            mt={'10px'}
            maxH={'370px'}
            border={"1px solid #eaeaec"}
        >
            <HStack>
                <Text color="rgb(83, 87, 102)" fontSize={"sm"} textTransform={"uppercase"} fontWeight={"800"}>
                    Delivery Estimates
                </Text>
            </HStack>

            {cart.map((el, ind) => {
                return <Box mt="10px" key={ind} className='scrollbar' overflowY={'scroll'} minH={'50px'}>
                    <Flex alignItems={"center"} gap="15px">
                        <Image w="35px" src={el?.images?.image1} />
                        <Text color="rgb(83, 87, 102)">Estimated delivery by <span style={{ fontWeight: "700", color: "rgb(83, 87, 102)" }}>{deliverDate()}</span></Text>
                    </Flex>
                </Box>
            })}

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
                <Text>₹{totalPrice.toLocaleString()}</Text>
            </Flex>

            <Flex
                mt="8px"
                fontSize={"md"}
                justifyContent={"space-between"}
                alignItems={"center"}
                color={"#909390"}
            >
                <Text>Discount on MRP</Text>
                <Text color={"#65b8a5"}>-₹{(totalPrice - discountedPrice).toLocaleString()}</Text>
            </Flex>
            {couponValue.temp != null && <Flex
                mt="8px"
                fontSize={"md"}
                justifyContent={"space-between"}
                alignItems={"center"}
                color={"#909390"}
            >
                <Flex alignItems={'center'} gap={'20px'}>
                    <Text>Coupon Discount</Text>
                </Flex>
                {couponValue.temp == null ?
                    <Text cursor={'pointer'} onClick={onOpen} color={"#ff5d71"}>Apply Coupon</Text>
                    :
                    <Text color={'#65b8a5'}>-₹{couponDiscount}</Text>
                }
            </Flex>}
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
                <Text>₹{discountedPrice === 0 ? 0 : 20}</Text>
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
                <Text>₹{discountedPrice === 0 ? 0 : couponValue.temp != null ? (discountedPrice + 20 - couponDiscount).toLocaleString() : (discountedPrice + 20).toLocaleString()}</Text>
            </Flex>

            <Button
                w="100%"
                borderRadius={"none"}
                mt="10px"
                color="white"
                bg="#ff3f6c"
                variant={"unstyled"}
                onClick={() => {
                    window.location.pathname === '/payment' ? handlePayment() : navigate('/payment');
                }}
            >
                {children}
            </Button>
        </Box>

    )
}

export default PaymentInfo;