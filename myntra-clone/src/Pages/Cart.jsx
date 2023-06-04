import {
    Box, Button, Flex, Text, useDisclosure, Modal,
    FormControl,
    FormLabel,
    Input,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Flex w={'73%'} m={'auto'}>
                <Box w={'65%'}>
                    <Flex fontSize={'14px'} borderRadius={'5px'} border={'1px solid #dbd8d8'} m={'30px 0 5px 0'} p={'15px'} justifyContent={'space-between'}>
                        <Box>
                            <Text color={'gray.600'}>Deliver to: <strong>Ritesh</strong></Text>
                            <Text color={'gray.600'}>fldskfjslfjlkfsdfj</Text>
                        </Box>
                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Create your account</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>First name</FormLabel>
                                        <Input placeholder='First name' />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Last name</FormLabel>
                                        <Input placeholder='Last name' />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                        <Button onClick={onOpen} _hover={'none'} borderRadius={'3px'} borderColor={'#FF3F6C'} fontSize={'14px'} variant={'outline'} color={'#FF3F6C'}>CHANGE ADDRESS</Button>
                    </Flex>
                </Box>
                <Box w={'40%'}>

                </Box>
            </Flex>
        </Box>
    )
}

export default Cart