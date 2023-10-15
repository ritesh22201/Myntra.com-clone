import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react'

const ContentLoader = () => {
    return (
        <Flex minH={'80vh'} gap={'20px'} w={{base : '95%', sm : '95%', md : '90%', lg : '70%', xl : '70%', '2xl' : '70%'}} m={'10px auto'}>
            <Box w={'70%'}>
                <Skeleton mb={'10px'} h={'90px'}>
                    <Box>contents wrapped</Box>
                    <Box>won't be visible</Box>
                </Skeleton>
                <Skeleton mb={'10px'} h={'100px'}>
                    <Box>contents wrapped</Box>
                    <Box>won't be visible</Box>
                </Skeleton>
                <Skeleton mb={'10px'} h={'240px'}>
                    <Box>contents wrapped</Box>
                    <Box>won't be visible</Box>
                </Skeleton>
            </Box>
            <Box w={'30%'}>
                <Skeleton h={'450px'}>
                    <Box>contents wrapped</Box>
                    <Box>won't be visible</Box>
                </Skeleton>
            </Box>
        </Flex>
    )
}

export default ContentLoader;