import { Box, Button, Flex, Heading, Select, Text } from '@chakra-ui/react';
import React, { memo, useContext, useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar';
import Men from './Men';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsMen } from '../Redux/ProductReducer/action';
import Pagination from '../Components/Pagination';
import { GlobalContext } from '../Context/GlobalContextProvider';
import { useSearchParams } from 'react-router-dom';
import Loader from '../Components/Loader';

const Product = () => {
    const [totalCount, setTotalCount] = useState(0);
    const dispatch = useDispatch();
    const { isLoading } = useSelector(store => store.productReducer);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    let pageButton = Math.ceil(totalCount / 14);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    let obj = {
        params: {
            categories: searchParams.getAll('categories'),
            gender: searchParams.getAll('gender'),
            color: searchParams.getAll('color'),
            brand: searchParams.getAll('brand'),
            price: searchParams.getAll('price')
        }
    }

    const handleSort = (value) => {
        if(value === 'discount'){
            dispatch(getProductsMen(setTotalCount, page, obj, value, 'desc', setLoading));
        }
        else if(value === 'pricea'){
            dispatch(getProductsMen(setTotalCount, page, obj, 'price', 'asc', setLoading));
        }
        else if(value === 'priced'){
            dispatch(getProductsMen(setTotalCount, page, obj, 'price', 'desc', setLoading));
        }
        else if(value === 'rating'){
            dispatch(getProductsMen(setTotalCount, page, obj, value, 'desc', setLoading));
        }
        else if(value === ''){
            dispatch(getProductsMen(setTotalCount, page, obj, '', '', setLoading));
        }
    }

    useEffect(() => {
        dispatch(getProductsMen(setTotalCount, page, obj, '', '', setLoading));
    }, [])

    useEffect(() => {
        dispatch(getProductsMen(setTotalCount, page, obj, '', '', setLoading));
    }, [page, searchParams])

    console.log(searchParams)

    return (
        <>
            <Box m={'30px auto'}>
                <Flex ml={'15px'} alignItems={'center'}>
                    <Heading fontSize={'18px'}>Myntra Fashion Store - </Heading>
                    <Text fontSize={'18px'} color={'gray'}> {totalCount} items</Text>
                </Flex>
                <Flex alignItems={'center'} m={'10px 0 20px 0'} justifyContent={'flex-end'}>
                    <Flex p={'0 15px'} justifyContent={'space-between'} alignItems={'center'} w={'25%'}>
                    </Flex>
                    <Flex w={'100%'} justifyContent={'space-between'}>
                        <Flex w={{base : '65%', sm : '65%', md : '35%', lg : '35%', xl : '35%', '2xl' : '35%'}} justifyContent="space-between">
                            <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Bundles<BsChevronDown /></Button>
                            <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Country of Origin <BsChevronDown /></Button>
                            <Button _hover={{ bg: 'gray.200', borderRadius: '20px', p: '-4px 18px' }} variant={'ghost'}>Size <BsChevronDown /></Button>
                        </Flex>
                        <Select mr='5px' _focusVisible={'none'} onChange={(e) => handleSort(e.target.value)} w={{base : '35%', sm : '35%', md : '27%', lg : '27%', xl : '27%', '2xl' : '27%'}} borderRadius={'none'}>
                            <option value="">Recommended</option>
                            <option value="discount">Better Discount</option>
                            <option value="pricea">Price: Low to High</option>
                            <option value="priced">Price: High to Low</option>
                            <option value="rating">Customer Rating</option>
                        </Select>
                    </Flex>
                </Flex>
                <Flex gap='20px'>
                    <Box w='20%' display={{base : 'none', sm : 'none', md : 'block', lg : 'block', xl : 'block', '2xl' : 'block'}}>
                        <Sidebar />
                    </Box>
                    {loading ? <Loader/> : <Men />}
                </Flex>
                {pageButton > 1 && <Pagination page={page} pageButton={pageButton} totalCount={totalCount} setPage={setPage} />}
            </Box>
        </>
    )
}

export default memo(Product);