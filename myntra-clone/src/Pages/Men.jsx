import { Box, Image, Flex, Text } from '@chakra-ui/react';
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsMen } from '../Redux/ProductReducer/action';
import ProductCard from '../Components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import noProduct from '../Assets/empty-bag.png';

const Men = ({ }) => {
    const { men } = useSelector(store => store.productReducer);

    return (
        <>
            {men?.length === 0 ? <Flex w='50%' m='40px auto' textAlign='center' flexDirection='column' alignItems='center'><Image w='30%' h='30%' src={noProduct} /><Text ml='80px' fontSize='18px'>No product found in this category</Text></Flex> :
                <Box
                    w="78%"
                    display={"grid"}
                    h='fit-content'
                    gap={{ base: '0', sm: '0', md: "20px", lg: "20px", xl: "20px", '2xl': "20px" }}
                    gridTemplateColumns={{
                        base: "repeat(2,1fr)",
                        sm: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                        lg: "repeat(4,1fr)",
                        xl: "repeat(4,1fr)",
                        "2xl": "repeat(5,1fr)",
                    }}
                    m={{ base: '0 0 0 10px', sm: '0 0 0 10px', md: '0 auto', lg: '0 auto', xl: '0 auto', '2xl': '0 auto' }}
                >
                    {men.map((el) => {
                        return <ProductCard key={el.id} {...el} />;
                    })}
                </Box>
            }
        </>
    )
}

export default memo(Men);