import React, { useEffect, useState } from 'react'
import { Box, Heading, Image, Text, Flex, Button } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

const ProductCard = ({ id, brand, count, discount, images, price, rating, title, off_price }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${id}`);
    }

    return (
        <Box h={'400px'} position={'relative'} onClick={handleClick} w={'100%'} boxSizing='border-box' _hover={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
            <Image src={images.image1} w="100%" h={'270px'} />
            <Box >
                <Flex opacity={"0.7"} bg={"white"} w="36%" borderRadius={"2px"} justifyContent={"center"} position={"relative"} bottom={7} left={2} fontSize={"14px"} alignItems={"center"} p="0 4px">
                    <Heading fontSize={"14px"}> {rating} </Heading>
                    <span style={{ marginLeft: "3px" }} >
                        <FaStar color="#00695C" />
                    </span>
                    <Text m={"0 4px"}> | </Text> <span>{count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}</span>
                </Flex>
            </Box>
            <Box p="10px" lineHeight={"25px"}>
                <Heading lineHeight={"25px"} fontSize={"17px"}>{brand.substring(0, 15)}...</Heading>
                <Text color={"gray.600"}>{title.substring(0, 20)}...</Text>
                <Flex alignItems={"center"}  >
                    <span><Heading fontSize={"15px"}  >{`Rs.${price}`}</Heading></span><span ><Text fontSize={"13px"} mr="5px" ml="5px" mt="3px" color={"grey"} textDecoration={"line-through"}> {`Rs.${off_price}`}</Text>   </span><span><Text fontSize={"14px"} color='#FF8A65' mt="3px">({discount}%OFF)</Text></span>
                </Flex>
            </Box>
        </Box>
    )
}

export default ProductCard;