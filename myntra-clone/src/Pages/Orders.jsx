import { Box, Flex, Heading, Image, Text, Grid, Button } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, updateOrders } from '../Redux/paymentReducer/action';
import ContentLoader from '../Components/ContentLoader';
import Pagination from '../Components/Pagination';
import wishImg from '../Assets/wishlist.png'
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../Redux/profileReducer/action';

const Orders = () => {
    const dispatch = useDispatch();
    const { orders, isAdded, isUpdated, isLoading } = useSelector(store => store.paymentReducer);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const {users} = useSelector(store => store.profileReducer);
    const {cart} = useSelector(store => store.cartReducer);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('google-login')) || {};
    let pageButton = Math.ceil(totalCount / 3);

    useEffect(() => {
        dispatch(getOrders(setTotalCount, page));
        window.scrollTo({ top: 0, left: 0 });
    }, [page])

    useEffect(() => {
        dispatch(getProfile());
    }, [])

    const ratingChanged = (newRating, id) => {
        dispatch(updateOrders({ rating: newRating }, id));
    };

    const existedUser = users?.find(el => el?.mobile === token.mobile);

    useEffect(() => {
        dispatch(getOrders(setTotalCount, page));
        window.scrollTo({ top: 0, left: 0 });
    }, [isAdded, isUpdated])

    return (
        <>
            {isLoading ? <ContentLoader /> :
                orders.length > 0 ?
                    <Box minH={{base : '60vh', sm : '60vh', md : '100vh', lg : '100vh', xl : '100vh', '2xl' : '100vh'}} w={{base : '98%', sm : '98%', md : '85%', lg : '77%', xl : '77%', '2xl' : '77%'}} m={'50px auto'}>
                        <Heading fontSize={'18px'}>Account</Heading>
                        <Text fontSize={'12px'}>{existedUser?.name}</Text>
                        <Flex w={'100%'} borderTop={'1px solid #cccbcb'} mt={'13px'}>
                            <Box w={{md : '25%', lg : '18%', xl : '18%', '2xl' : '18%'}} display={{base : 'none', sm : 'none', md : 'block', lg : 'block', xl : 'block', '2xl' : 'block'}} borderRight={'1px solid #cccbcb'} minH={'83vh'}>
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
                                    <Text mt={'10px'} onClick={() => navigate('/profile')} cursor={'pointer'}>Profile</Text>
                                    <Text>Saved Cards</Text>
                                    <Text>Addresses</Text>
                                    <Text>Myntra Insider</Text>
                                </Box>
                            </Box>
                            <Box pl='10px' w={{base : '98%', sm : '98%', md : '80%', lg : '77%', xl : '77%', '2xl' : '77%'}} m='10px auto 0 auto'>
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
                        {orders.length > 3 && <Pagination page={page} pageButton={pageButton} totalCount={totalCount} setPage={setPage} />}
                    </Box>
                    :
                    <Grid minH={'90vh'} w={{base : '75%', sm : '75%', md : '60%'}} m='auto' placeItems={'center'}>
                        <Box fontSize={'20px'} textAlign='center' m={'0 auto'}>
                            <Image w={{base : '35%', sm : '35%', md : '25%', lg : '18%', xl : '18%', '2xl' : '18%'}} m={'auto'} src={wishImg} />
                            <Text>Oh!</Text>
                            <Text>You haven't ordered yet</Text>
                            <Button onClick={() => cart?.length > 0 ? navigate('/cart') : navigate("/products")} color={"#D14D72"} border={"1px solid #D14D72"} mt={'10px'} variant="outline" textTransform="uppercase">
                                Buy now
                            </Button>
                        </Box>
                    </Grid>
            }
        </>
    )
}

export default memo(Orders);