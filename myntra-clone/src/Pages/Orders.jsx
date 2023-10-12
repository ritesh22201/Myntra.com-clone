import { Box, Button, Divider, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, updateOrders } from '../Redux/paymentReducer/action';

const Orders = () => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const { orders, isAdded, isUpdated } = useSelector(store => store.paymentReducer);

    useEffect(() => {
        dispatch(getOrders());
    }, [])

    console.log(orders)

    const ratingChanged = (newRating, id) => {
        dispatch(updateOrders({rating : newRating}, id));
    };

    useEffect(() => {
        dispatch(getOrders());
    }, [isAdded, isUpdated])

    return (
        <Box minH={'100vh'} w={'77%'} m={'50px auto'}>
            <Heading fontSize={'18px'}>Account</Heading>
            <Text fontSize={'12px'}>Ritesh Goswami</Text>
            <Flex w={'100%'} borderTop={'1px solid #cccbcb'} mt={'13px'}>
                <Box w={'18%'} borderRight={'1px solid #cccbcb'} minH={'83vh'}>
                    <Box w={'80%'} borderBottom={'1px solid #cccbcb'} p={'20px 0'} color={'gray.600'}>
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
                <Box p={'20px 0 20px 30px'} w={'70%'}>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Heading size={'sm'}>All orders</Heading>
                            <Text fontSize={'14px'}>from anytime</Text>
                        </Box>
                    </Flex>
                    {orders?.map((el, ind) => {
                        return <Box key={ind} mt={'20px'} bg={'whitesmoke'} p={'15px'} position={'relative'}>
                            <Heading position={'absolute'} top={'10px'} right={'10px'} mb={'7px'} size={'sm'} color={'gray.600'}>{Object.keys(el).length - 4} Items</Heading>
                            <Flex w={'100%'} gap={'20px'} alignItems={'center'}>
                                <Image borderRadius={'4px'} w={'60px'} src={el['0']?.images?.image1} />
                                <Box w={'100%'}>
                                    <Heading fontSize={'14px'}>{el['0']?.brand}</Heading>
                                    <Text color={'gray.500'}>{el['0']?.title}</Text>
                                    <Text color={'gray.500'}>Size: {el['0']?.size}</Text>
                                    <Flex w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                        <ReactStars
                                            count={5}
                                            value={el?.rating}
                                            onChange={(e) => ratingChanged(e, el.id)}
                                            size={28}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ff3f6c"
                                        />
                                        <Heading size={'sm'} color={'gray.600'}>₹ {el?.totalPrice}</Heading>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    })}
                </Box>
            </Flex>
        </Box>
    )
}

export default Orders;