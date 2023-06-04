import { Box, Button, Flex, Heading, Select, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import Men from './Men';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsMen } from '../Redux/ProductReducer/action';
import Pagination from '../Components/Pagination';
import { GlobalContext } from '../Context/GlobalContextProvider';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    const [totalCount, setTotalCount] = useState(0);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    let pageButton = Math.ceil(totalCount / 14);
    const {paramVal} = useContext(GlobalContext);
    const [searchParams] = useSearchParams();
    const {inputVal} = useContext(GlobalContext);


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [])

    let obj = {
        params : {
            categories : searchParams.getAll('categories'),
            gender : searchParams.getAll('gender'),
            color : searchParams.getAll('color'),
            brand : searchParams.getAll('brand'),
            price : searchParams.getAll('price')
        }
    }

    useEffect(() => {
        dispatch(getProductsMen(setTotalCount, page, obj));
    }, [page, searchParams])

    return (
        <Box m={'30px auto'}>
            <Flex ml={'15px'} alignItems={'center'}>
                <Heading fontSize={'18px'}>Myntra Fashion Store - </Heading>
                <Text fontSize={'18px'} color={'gray'}> {totalCount} items</Text>
            </Flex>
            <Flex alignItems={'center'} m={'10px 0 20px 0'} justifyContent={'flex-end'}>
                <Flex p={'0 15px'} justifyContent={'space-between'} alignItems={'center'} w={'25%'}>
                    {/* <Heading fontSize={'16px'}>FILTERS</Heading>
                    <Heading color='#eb1c95' fontSize={'13px'}>CLEAR ALL</Heading> */}
                </Flex>
                <Flex w={'100%'} justifyContent={'space-between'}>
                    <Flex w={'35%'}>
                        <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Bundles<BsChevronDown /></Button>
                        <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Country of Origin <BsChevronDown /></Button>
                        <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Size <BsChevronDown /></Button>
                    </Flex>
                    <Select _focusVisible={'none'} w={'27%'} borderRadius={'none'}>
                        <option value="">Recommended</option>
                        <option value="dicount">Better Discount</option>
                        <option value="off_price">Price: Low to High</option>
                        <option value="off_price">Price: High to Low</option>
                        <option value="rating">Customer Rating</option>
                    </Select>
                </Flex>
            </Flex>
            <Flex gap={'25px'}>
                <Sidebar />
                <Men />
            </Flex>
            <Pagination page={page} pageButton={pageButton} totalCount={totalCount} setPage={setPage}/>
        </Box>
    )
}

export default Product;