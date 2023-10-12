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
            gap="20px"
            gridTemplateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(4,1fr)",
                "2xl": "repeat(5,1fr)",
            }}
        >
            {men.map((el) => {
                return <ProductCard {...el} />;
            })}
        </Box>
    )
}

export default memo(Men);