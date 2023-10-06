import React, { memo, useEffect, useState } from 'react'
import {
    Input,
    ListItem,
    UnorderedList,
    Box,
    Heading,
    Text,
    Image,
    Button,
    Flex,
    HStack,
    Divider,
    TagLabel,
    Tag,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Checkbox,
    Radio,
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Scrollbar.css'
import { useDispatch, useSelector } from 'react-redux';
import '../CSS/Scrollbar.css'
import { addAddress, deleteAddress, getAddress, updateAddress } from '../Redux/addressReducer/action';

const Address = () => {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cart } = useSelector(store => store.cartReducer);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [address, setAddress] = useState({ name: '', mobile: '', pincode: '', address: '', isSelected: false, locality: '', city: '', state: '', addressType: '', isDefault: false });
    const couponValue = JSON.parse(localStorage.getItem('coupon')) || {};
    const token = JSON.parse(localStorage.getItem('google-login')) || {};
    const { addressData, isDeleted, isAdded, isUpdated } = useSelector(store => store.addressReducer);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setAddress({ ...address, [name]: name === 'isDefault' ? checked : value });
    }

    useEffect(() => {
        dispatch(getAddress());
    }, [])

    const handleAddAddress = async (e) => {
        e.preventDefault();

        const data = { ...address, userMobile: token?.mobile };

        if (address.isDefault) {
            const defaultAddress = addressData?.find(el => el.isDefault == true);
            if (defaultAddress) {
                const obj = { isDefault: false }

                await dispatch(updateAddress(obj, defaultAddress.id));
                await dispatch(addAddress(data));

                onClose();
                setAddress({ name: '', mobile: '', pincode: '', isSelected: false, address: '', locality: '', city: '', state: '', addressType: '', isDefault: false })
                return;
            }
        }

        if (addressData.length === 0) {
            const data = { ...address, userMobile: token?.mobile, isSelected: true };
            await dispatch(addAddress(data));
            onClose();
            setAddress({ name: '', mobile: '', pincode: '', isSelected: false, address: '', locality: '', city: '', state: '', addressType: '', isDefault: false })
            return;
        }

        await dispatch(addAddress(data));

        onClose();
        setAddress({ name: '', mobile: '', pincode: '', isSelected: false, address: '', locality: '', city: '', state: '', addressType: '', isDefault: false })
    }

    useEffect(() => {
        let price = 0;
        let discountPrice = 0;

        cart.map(el => {
            price += +el.off_price * el.quantity;
            discountPrice += +el.price * el.quantity;
        });
        setTotalPrice(price);
        setDiscountedPrice(discountPrice);
    }, [cart])

    let currentDateArr = new Date().toISOString().split('T')[0];
    let currentDate = new Date(currentDateArr);
    let futureDate = new Date(currentDate);

    futureDate.setDate(currentDate.getDate() + 6);
    let formattedDate = futureDate.toString().split(' ').slice(0, 4);
    let day = formattedDate[0] + ',' + ' ' + formattedDate.slice(1).join(' ');

    let couponDiscount = couponValue.discount == '10%' ? (discountedPrice * 0.1).toFixed() : couponValue.discount == '20%' ? (discountedPrice * 0.2).toFixed() : couponValue.discount == '5%' ? (discountedPrice * 0.05).toFixed() : 0;
    const defaultAddress = addressData?.find(el => el?.isDefault == true);
    const otherAddresses = addressData?.filter(el => el?.isDefault == false);

    const handleRemoveAddress = async (id) => {
        dispatch(deleteAddress(id))
    }

    const handleMakeDefault = async (id) => {
        try {
            const defaultAddress = addressData?.find(el => el.isDefault == true);
            if (defaultAddress) {
                const obj = { isDefault: false };
                const obj2 = { isDefault: true };

                await dispatch(updateAddress(obj, defaultAddress.id));
                await dispatch(updateAddress(obj2, id));
                await dispatch(getAddress())
                return;
            }

            const obj = { isDefault: true };
            await dispatch(updateAddress(obj, id));
            await dispatch(getAddress());

        } catch (error) {
            console.log(error.message);
        }
    }

    const handleSelectedAddress = async (id) => {
        const selectedAddress = addressData?.find(el => el?.isSelected === true);

        if (selectedAddress) {
            const data = { isSelected: false };
            await dispatch(updateAddress(data, selectedAddress?.id));
            await dispatch(updateAddress({ isSelected: true }, id));
            await dispatch(getAddress());
            return;
        }

        await dispatch(updateAddress({ isSelected: true }, id));
        await dispatch(getAddress());
    }

    useEffect(() => {
        dispatch(getAddress());
    }, [isAdded, isDeleted, isUpdated, dispatch])

    return (
        <Flex minH="80vh" justifyContent={"center"} gap="10px">
            <Box maxW="container.sm" w="100%">
                <Box mt="10px">
                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                        <Heading size={"md"}>Select Delivery Address</Heading>
                        <Button fontWeight={"700"} fontSize={"12px"} onClick={onOpen} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                            Add New Address
                        </Button>
                    </Flex>

                </Box>

                {defaultAddress && <Text fontWeight={"700"} fontSize={"13px"} textTransform={"uppercase"} >Default Address</Text>}

                <Box maxW="container.sm">
                    {defaultAddress && <Box
                        cursor={"pointer"}
                        mt="10px"
                        p="10px"
                        borderRadius={"3px"}
                        border={"1px solid #eaeaec"}
                    >
                        <Flex alignItems={"center"} gap="10px">
                            <Radio colorScheme='pink' isChecked={defaultAddress?.isSelected} onChange={() => handleSelectedAddress(defaultAddress?.id)} />
                            <Text fontWeight={"700"}>{defaultAddress?.name}</Text>
                            <Tag
                                size={'sm'}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='green'
                            >
                                <TagLabel>{defaultAddress?.addressType == 'home' ? 'HOME' : 'WORK'}</TagLabel>
                            </Tag>
                        </Flex>
                        <Text fontSize={"sm"}>{defaultAddress?.address}</Text>
                        <Text fontSize={"sm"}>{`${defaultAddress?.locality}, ${defaultAddress?.city}, ${defaultAddress?.state} - ${defaultAddress?.pincode}`}</Text>
                        <Text mt="10px" fontSize={"sm"}>Mobile :<span style={{ fontWeight: "700" }}> {defaultAddress?.mobile}</span></Text>

                        <UnorderedList fontSize={"sm"}>
                            <ListItem ml="10px" mt="12px">Pay on Delivery available</ListItem>
                        </UnorderedList>
                        <Flex ml="10px" mt="20px" gap="10px">
                            <Button onClick={() => handleRemoveAddress(defaultAddress?.id)} fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                Remove
                            </Button>
                            {!defaultAddress?.isDefault && <Button onClick={() => { handleMakeDefault(defaultAddress?.id) }} fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                Make default
                            </Button>}
                        </Flex>
                    </Box>}

                    {otherAddresses.length !== 0 && <Text fontWeight={"700"} mt={'15px'} fontSize={"13px"} textTransform={"uppercase"} >Other Addresses</Text>}

                    {otherAddresses?.map(el => {
                        return <Box
                            key={el?.id}
                            cursor={"pointer"}
                            mt="10px"
                            p="10px"
                            borderRadius={"3px"}
                            border={"1px solid #eaeaec"}
                        >
                            <Flex alignItems={"center"} gap="10px">
                                <Radio colorScheme='pink' isChecked={el?.isSelected} onChange={() => handleSelectedAddress(el?.id)} />
                                <Text fontWeight={"700"}>{el?.name}</Text>
                                <Tag
                                    size={'sm'}
                                    borderRadius='full'
                                    variant='outline'
                                    colorScheme='green'
                                >
                                    <TagLabel>{el?.addressType == 'home' ? 'HOME' : 'WORK'}</TagLabel>
                                </Tag>
                            </Flex>
                            <Text fontSize={"sm"}>{el?.address}</Text>
                            <Text fontSize={"sm"}>{`${el?.locality}, ${el?.city}, ${el?.state} - ${el?.pincode}`}</Text>
                            <Text mt="10px" fontSize={"sm"}>Mobile :<span style={{ fontWeight: "700" }}> {el?.mobile}</span></Text>

                            <UnorderedList fontSize={"sm"}>
                                <ListItem ml="10px" mt="12px">Pay on Delivery available</ListItem>
                            </UnorderedList>
                            <Flex ml="10px" mt="20px" gap="10px">
                                <Button onClick={() => handleRemoveAddress(el?.id)} fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                    Remove
                                </Button>
                                <Button onClick={() => handleMakeDefault(el?.id)} fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                    Make default
                                </Button>
                            </Flex>
                        </Box>
                    })}

                    <Box maxW="container.sm">
                        <Box
                            // boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                            cursor={"pointer"}
                            mt="10px"
                            p="30px"
                            borderRadius={"3px"}
                            border={"2px dashed #eaeaec"}
                        >
                            <Heading color="#ff5d71" onClick={onOpen} fontWeight={"700"} size={"sm"}>+Add New Address</Heading>
                        </Box>
                    </Box>

                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <form onSubmit={handleAddAddress}>
                            <ModalContent h={'450px'}>
                                <ModalHeader color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"sm"}>Add New Address</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody className='scrollbar' pb={6} overflowY={'scroll'}>
                                    <FormControl>
                                        <FormLabel color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"11px"}>Contact Details</FormLabel>
                                        <Input name='name' value={address.name} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" placeholder='Name' />
                                        <Input name='mobile' maxLength={10} value={address.mobile} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Mobile No.' />
                                    </FormControl>

                                    <FormControl >
                                        <FormLabel color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"11px"} mt={4}>Address</FormLabel>
                                        <Input name='pincode' maxLength={6} value={address.pincode} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Pincode' />
                                        <Input name='address' value={address.address} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Address' />
                                        <Input name='locality' value={address.locality} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='Locality / Town' />
                                        <Flex gap="10px">
                                            <Input name='city' value={address.city} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='City / District' />
                                            <Input name='state' value={address.state} onChange={(e) => handleChange(e)} focusBorderColor='black' type="text" size="sm" mt="10px" placeholder='State' />
                                        </Flex>
                                    </FormControl>

                                    <FormControl cursor={"pointer"} mt="30px">
                                        <FormLabel color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"11px"}>Save Address As</FormLabel>
                                        <Flex gap="20px" alignItems={"center"}>

                                            <Tag colorScheme={address.addressType == 'home' ? 'green' : 'gray'} onClick={() => setAddress({ ...address, addressType: 'home' })} fontWeight={address.addressType == 'home' ? 'bold' : '500'} size={'sm'} borderRadius='full' variant='outline' padding="5px 15px">
                                                <TagLabel>HOME</TagLabel>
                                            </Tag>

                                            <Tag colorScheme={address.addressType == 'work' ? 'green' : 'gray'} onClick={() => setAddress({ ...address, addressType: 'work' })} fontWeight={address.addressType == 'work' ? 'bold' : '500'} size={'sm'} borderRadius='full' padding="5px 15px" variant='outline'>
                                                <TagLabel >WORK</TagLabel>
                                            </Tag>
                                        </Flex>
                                    </FormControl>

                                    <Flex mt="30px" alignItems={"center"} gap="10px">
                                        <Checkbox name='isDefault' isChecked={address.isDefault} onChange={(e) => handleChange(e)} colorScheme='pink' />
                                        <Text fontSize={"13px"}>Make this my default address</Text>
                                    </Flex>
                                </ModalBody>

                                <ModalFooter boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
                                    <Button
                                        type='submit'
                                        w="100%"
                                        fontSize={"13px"}
                                        borderRadius={"none"}
                                        mt="10px"
                                        color="white"
                                        bg="#ff3f6c"
                                        textTransform={"uppercase"}
                                        variant={"unstyled"}
                                        onClick={handleAddAddress}
                                    >
                                        Add Address
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </form>
                    </Modal>
                </Box>
            </Box>

            <Box
                w="25%"
                p="15px"
                mt={'10px'}
                maxH={'320px'}
                border={"1px solid #eaeaec"}
            >
                <HStack>

                    <Text color="rgb(83, 87, 102)" fontSize={"sm"} textTransform={"uppercase"} fontWeight={"800"}>
                        Delivery Estimates
                    </Text>
                </HStack>

                {cart.map((el, ind) => {
                    return <Box mt="10px" key={ind} className='scrollbar' overflowY={'scroll'} minH={'50px'}>
                        <Flex alignItems={"center"} gap="15px">
                            <Image w="35px" src={el?.images?.image1} />
                            <Text color="rgb(83, 87, 102)">Estimated delivery by <span style={{ fontWeight: "700", color: "rgb(83, 87, 102)" }}>{day}</span></Text>
                        </Flex>
                    </Box>
                })}

                <Divider
                    m="10px"
                    orientation="horizontal"
                    borderColor="#d4d5d9"
                />

                <Text
                    textTransform={"uppercase"}
                    fontSize={"sm"}
                    color={"#535766"}
                    fontWeight={"700"}
                >
                    Price Details (3 Items)
                </Text>

                <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Text>Total MRP</Text>
                    <Text>₹{totalPrice.toLocaleString()}</Text>
                </Flex>

                <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Text>Discount on MRP</Text>
                    <Text color={"#65b8a5"}>-₹{(totalPrice - discountedPrice).toLocaleString()}</Text>
                </Flex>
                {couponValue.temp != null && <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Flex alignItems={'center'} gap={'20px'}>
                        <Text>Coupon Discount</Text>
                    </Flex>
                    {couponValue.temp == null ?
                        <Text cursor={'pointer'} onClick={onOpen} color={"#ff5d71"}>Apply Coupon</Text>
                        :
                        <Text color={'#65b8a5'}>-₹{couponDiscount}</Text>
                    }
                </Flex>}
                <Flex
                    mt="8px"
                    fontSize={"md"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#909390"}
                >
                    <Text>
                        Convinience Fee
                        <span
                            style={{
                                marginLeft: "5px",
                                fontWeight: "700",
                                color: "#ff5d71",
                            }}
                        >
                            Know More
                        </span>
                    </Text>
                    <Text>₹{discountedPrice === 0 ? 0 : 20}</Text>
                </Flex>

                <Divider orientation="horizontal" borderColor="#d4d5d9" mx={3} />

                <Flex
                    mt="8px"
                    fontSize={"md"}
                    fontWeight={"700"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"#3e4152"}
                >
                    <Text>Total Amount</Text>
                    <Text>₹{discountedPrice === 0 ? 0 : couponValue.temp != null ? (discountedPrice + 20 - couponDiscount).toLocaleString() : (discountedPrice + 20).toLocaleString()}</Text>
                </Flex>

                <Button
                    w="100%"
                    borderRadius={"none"}
                    mt="10px"
                    color="white"
                    bg="#ff3f6c"
                    variant={"unstyled"}
                    onClick={() => navigate('/payment')}
                >
                    Continue
                </Button>
            </Box>
        </Flex>
    )
}

export default memo(Address);
