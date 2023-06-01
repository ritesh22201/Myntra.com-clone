import { Button, Flex } from '@chakra-ui/react'
import React from 'react';

const Pagination = ({page, setPage, pageButton, totalCount}) => {
    return (
        <Flex gap={'5px'} m={'20px 0'} justifyContent={'center'}>
            <Button fontWeight={'bold'} display={page === 1 ? 'none' : 'inline'} variant={'outline'} disabled={page === 1} onClick={() => setPage(page - 1)}>{"< Prev"}</Button>
            {new Array(pageButton).fill(0).map((el, i) => {
                return <Button w={'15px'} h={'45px'} fontWeight={'bold'} _hover={{border : '1px solid #e5e5e5'}} bg={page === i + 1 ? '#2A2F4F' : 'white'} color={page === i + 1 ? 'white' : '#2A2F4F'} onClick={() => setPage(i + 1)}>{i + 1}</Button>
            })}
            <Button fontWeight={'bold'} variant={'outline'} disabled={page === totalCount} onClick={() => setPage(page + 1)}>{"Next >"}</Button>
        </Flex>
    )
}

export default Pagination