import { Box } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsMen } from '../Redux/ProductReducer/action';
import ProductCard from '../Components/ProductCard';

const Men = ({ }) => {
    const { men } = useSelector(store => store.productReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsMen());
    }, [])
    
    return (
        <Box
            w="80%"
            display={"grid"}
            gap={{base : '0', sm : '0', md : "20px", lg : "20px", xl : "20px", '2xl' : "20px"}}
            gridTemplateColumns={{
                base: "repeat(2,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(4,1fr)",
                xl: "repeat(4,1fr)",
                "2xl": "repeat(5,1fr)",
            }}
            m={{base : '0 0 0 10px', sm : '0 0 0 10px', md : '0 auto', lg : '0 auto', xl : '0 auto', '2xl' : '0 auto'}}
            boxSizing='border-box'
        >
            {men.map((el) => {
                return <ProductCard {...el} />;
            })}
        </Box>
    )
}

export default memo(Men);