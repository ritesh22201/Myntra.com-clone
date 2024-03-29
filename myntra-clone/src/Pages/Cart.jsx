import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    UnorderedList,
    Box,
    Container,
    Heading,
    Text,
    Image,
    Button,
    Input,
    Flex,
    HStack,
    Divider,
    Checkbox,
    Select,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Radio,
    Tag,
    TagLabel,
    ListItem,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wishlist } from "./Wishlist";
import { Link, useNavigate } from "react-router-dom";
import { CheckIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import { CiPercent } from "react-icons/ci";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import { BsFillSave2Fill } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RiBookmarkLine } from "react-icons/ri";
import giftImage from "../Assets/gift-big.webp";
import { deleteCartProduct, getCartProducts, updateDetails } from "../Redux/CartReducer/action";
import toast, { CheckmarkIcon, Toaster } from "react-hot-toast";
import { addwishList } from "../Redux/ProductReducer/action";
import { getAddress, updateAddress } from "../Redux/addressReducer/action";
import { deliverDate, handleSelectedAddress } from "../constants/deliverDate";
import ContentLoader from "../Components/ContentLoader";
import '../CSS/Scrollbar.css';

const Cart = () => {
    const { cart, isLoadingCart } = useSelector((store) => store.cartReducer);
    const [showStatus, setShowStatus] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [coupon, setCoupon] = useState('');
    const [openModal, setOpenModal] = useState(false);

    let couponArr = [{ title: 'FIRSTBUY10', desc: 'Get 10% discount on first buy.', discount: '10%' },
    { title: 'MISSEDYOU', desc: 'Get 10% discount on min purchase of ₹499.', discount: '10%' },
    { title: 'SAVEBIG20', desc: 'Enjoy a 20% discount on your next purchase.', discount: '20%' },
    { title: 'FAMILYDEAL', desc: 'Buy one, get one 5% off on family meal combos.', discount: '5%' }
    ]
    const [applyCoupon, setApplyCoupon] = useState(null);
    const [loading, setLoading] = useState(false);
    const { wishlist } = useSelector(store => store.productReducer);
    const couponValue = JSON.parse(localStorage.getItem('coupon')) || {};
    const { addressData } = useSelector(store => store?.addressReducer);

    useEffect(() => {
        dispatch(getCartProducts());
        dispatch(getAddress())
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    useEffect(() => {
        dispatch(getCartProducts());
        dispatch(getAddress())
    }, [dispatch])

    useEffect(() => {
        let price = 0;
        let discountPrice = 0;

        cart?.map(el => {
            price += +el.off_price * el.quantity;
            discountPrice += +el.price * el.quantity;
        });
        setTotalPrice(price);
        setDiscountedPrice(discountPrice);
    }, [cart])


    const handleQuantityChange = async (itemId, newQuantity) => {
        let product = cart?.find(el => el.id === itemId);
        product.quantity = newQuantity;

        await dispatch(updateDetails(product, itemId));
        await dispatch(getCartProducts());
    };

    const handleSize = async (itemId, newSize) => {
        let product = cart?.find(el => el.id === itemId);
        product.size = newSize;

        await dispatch(updateDetails(product, itemId));
        await dispatch(getCartProducts());
    }

    const handleDelete = async (id) => {
        await dispatch(deleteCartProduct(id));
        await dispatch(getCartProducts());
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [dispatch, cart])

    const handleCouponChange = (ind, discount) => {
        let temp = applyCoupon === ind ? null : ind;
        if (temp === null) {
            localStorage.setItem('coupon', JSON.stringify({ temp, discount: null }));
        }
        else {
            localStorage.setItem('coupon', JSON.stringify({ temp, discount }));
        }
        setApplyCoupon(temp);

        setTimeout(() => {
            onClose();
        }, 2000)
    }

    let couponDiscount = couponValue.discount == '10%' ? (discountedPrice * 0.1).toFixed() : couponValue.discount == '20%' ? (discountedPrice * 0.2).toFixed() : couponValue.discount == '5%' ? (discountedPrice * 0.05).toFixed() : 0;

    const handleRemoveCoupon = () => {
        localStorage.setItem('coupon', JSON.stringify({ temp: null, discount: null }));
        dispatch(getCartProducts());
    }

    const handleMoveToWishlist = async (el) => {
        const existedProduct = wishlist?.find(elem => elem.productId == el.productId);
        if (existedProduct) {
            toast.error('Product is already in the wishlist!');
            return;
        }

        await dispatch(addwishList(el, setLoading))
        await dispatch(deleteCartProduct(el.id))
        await dispatch(getCartProducts())
    }

    useEffect(() => {
        if (cart.length === 0) {
            localStorage.setItem('coupon', JSON.stringify({ temp: null, discount: null }));
        }
    }, [cart])

    const selectedAddress = addressData?.find(el => el.isSelected == true);


    return (
        <>
            {isLoadingCart ? <ContentLoader />
                :
                cart?.length ? (
                    <>
                        <Flex w={{ base: '100%', sm: '100%', md: '95%', lg: '75%', xl: '75%', '2xl': '75%' }} justifyContent={"center"} className='scrollbar' direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }} m='0 auto' gap="10px">
                            <Toaster toastOptions={{ duration: 4000 }} />
                            <Box w={{ base: '100%', sm: '100%', md: "65%", lg: "65%", xl: "65%", '2xl': "65%" }}>
                                <Box maxW="container.sm" w="100%">
                                    {selectedAddress?.address && <Box
                                        mt="10px"
                                        p="10px"
                                        borderRadius={"3px"}
                                        border={"1px solid #eaeaec"}
                                    >
                                        <Flex justifyContent={"space-between"} alignItems={"center"}>
                                            <Box>
                                                <Text fontSize={"md"}>Deliver to: <span style={{ fontWeight: "700" }}>{selectedAddress?.name},{selectedAddress?.pincode}</span></Text>
                                                <Text fontSize={"sm"}>{selectedAddress?.address}, {selectedAddress?.locality}, {selectedAddress?.city}</Text>
                                            </Box>
                                            <Button
                                                fontSize={"12px"}
                                                fontWeight={"800"}
                                                pt="3px"
                                                textTransform={"uppercase"}
                                                colorScheme="pink"
                                                borderRadius={"none"}
                                                border={"1px solid #ff3f71"}
                                                variant="outline"
                                                onClick={() => { onOpen(); setOpenModal(true) }}
                                            >
                                                Change Address
                                            </Button>
                                        </Flex>
                                    </Box>}
                                </Box>
                                <Flex>
                                    <Box maxW="container.sm" w="100%">
                                        <Box
                                            mt="10px"
                                            p="10px"
                                            borderRadius={"3px"}
                                            border={"1px solid #eaeaec"}
                                        >
                                            <Flex alignItems={"center"}>
                                                <CiPercent style={{ fontWeight: "1000" }} />
                                                <Text fontWeight={"700"} ml="8px">
                                                    Available Offers
                                                </Text>
                                            </Flex>
                                            <Text ml={'23px'} color={"gray.600"} fontSize={"13px"}>
                                                10% Instant Discount on ICICI Bank Credit Cards on a min
                                                spend of Rs.3500.TCA
                                            </Text>
                                            <Accordion allowToggle>
                                                <AccordionItem
                                                    borderTop={"none"}
                                                    borderBottom={"none"}
                                                    bg="white"
                                                    color={"gray.700"}
                                                    _hover={{ bg: "white" }}
                                                >
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box
                                                                onClick={() => setShowStatus(!showStatus)}
                                                                color={"#ff3f71"}
                                                                as="span"
                                                                flex="1"
                                                                textAlign="left"
                                                            >
                                                                <Flex alignItems={"center"}>
                                                                    <Text ml={'7px'} color={"#ff3f71"} fontWeight={"bold"}>
                                                                        Show {showStatus ? "Less" : "More"}{" "}
                                                                    </Text>
                                                                    {/* <Text color={"#ff3f71"} fontWeight={"bold"}>show more </Text> */}

                                                                    {showStatus ? (
                                                                        <AiOutlineUp />
                                                                    ) : (
                                                                        <AiOutlineDown />
                                                                    )}
                                                                </Flex>
                                                            </Box>
                                                            {/* <AccordionIcon /> */}
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <UnorderedList>
                                                            <Text color={"gray.600"} fontSize={"13px"}>
                                                                10% Instant Discount on Kotak Credit and Debit
                                                                Cards on a min spend of Rs.3500.TCA
                                                            </Text>
                                                            <Text color={"gray.600"} fontSize={"13px"}>
                                                                10% Cashback upto Rs.200 on Paytm Wallet and
                                                                Postpaid Transaction on a min spend of Rs.2000.TCA
                                                            </Text>
                                                            <Text color={"gray.600"} fontSize={"13px"}>
                                                                5% Unlimited Cashback on FlipKart Axis Bank Credit
                                                                Card.TCA
                                                            </Text>
                                                            <Text color={"gray.600"} fontSize={"13px"}>
                                                                Flat 10% Cashback upto Rs 200 on Airtel Payments
                                                                Bank transactions on a min spend of Rs 1000. TCA
                                                            </Text>
                                                            <Text color={"gray.600"} fontSize={"13px"}>
                                                                10% Cashback upto Rs 150 on FreeCharge PayLater
                                                                transaction. TCA
                                                            </Text>
                                                        </UnorderedList>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </Box>
                                    </Box>
                                </Flex>

                                <Box maxW="container.sm">
                                    <Box
                                        cursor={"pointer"}
                                        mt="10px"
                                        borderRadius={"3px"}
                                        border={"1px solid #eaeaec"}
                                        p={{ base: 0, sm: 0, md: '10px', lg: '10px', xl: '10px', '2xl': '10px' }}
                                    >
                                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                                            <Flex>
                                                <Text
                                                    fontWeight={"700"}
                                                    ml="8px"
                                                    textTransform={"uppercase"}
                                                >
                                                    Total {cart?.length} Items
                                                </Text>
                                            </Flex>
                                        </Flex>
                                        <Box w='100%' overflowY='scroll' h={cart?.length === 1 ? '230px' : '450px'} className='scrollbar'>
                                            {cart?.map(el => {
                                                // console.log(el)
                                                return <Box key={el.id} maxW="container.sm" w="100%">
                                                    <Box
                                                        cursor={"pointer"}
                                                        mt="10px"
                                                        p={{ base: 0, sm: 0, md: '10px', lg: '10px', xl: '10px', '2xl': '10px' }}
                                                        borderRadius={"3px"}
                                                        border={"1px solid #eaeaec"}
                                                    >

                                                        <Flex justifyContent={"space-around"}>
                                                            {/* <Box> */}
                                                            <Image
                                                                w={{ base: '90px', sm: '90px', md: "120px", lg: "120px", xl: "120px", '2xl': "120px" }}
                                                                src={el?.images?.image1}
                                                                alt="productImage"
                                                                onClick={() => navigate(`/products/${el.productId}`)}
                                                            />
                                                            {/* </Box> */}
                                                            <Box w="70%">
                                                                <Flex
                                                                    justifyContent={"space-between"}
                                                                    alignItems={"center"}
                                                                >
                                                                    <Text fontSize={"md"} fontWeight={"700"}>
                                                                        {el?.brand}
                                                                    </Text>{" "}
                                                                    <Box onClick={() => handleDelete(el.id)}>
                                                                        <CloseIcon />
                                                                    </Box>
                                                                </Flex>
                                                                <Text>
                                                                    {el?.title}
                                                                </Text>{" "}
                                                                <Flex gap="10px">
                                                                    <Select
                                                                        defaultValue={el?.size}
                                                                        fontWeight={"700"}
                                                                        w="25%"
                                                                        onChange={(e) => handleSize(el?.id, e.target.value)}
                                                                        focusBorderColor="#eaeaec"
                                                                    >
                                                                        <option value="">Size:</option>
                                                                        <option value="S">S</option>
                                                                        <option value="M">M</option>
                                                                        <option value="L">L</option>
                                                                        <option value="XL">XL</option>
                                                                        <option value="XXL">XXL</option>
                                                                    </Select>

                                                                    <Select
                                                                        defaultValue={el?.quantity}
                                                                        fontWeight={"700"}
                                                                        w="25%"
                                                                        focusBorderColor="#eaeaec"
                                                                        onChange={(e) => handleQuantityChange(el?.id, e.target.value)}
                                                                    >
                                                                        <option value="">Qty:</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                        <option value="6">6</option>
                                                                        <option value="7">7</option>
                                                                        <option value="8">8</option>
                                                                        <option value="9">9</option>
                                                                        <option value="10">10</option>
                                                                    </Select>
                                                                    <Button _active={'none'} fontSize={"12px"}
                                                                        fontWeight={"800"}
                                                                        colorScheme="pink"
                                                                        borderRadius={"none"}
                                                                        p={{ base: '5px', sm: '5px' }}
                                                                        border={"1px solid #ff3f71"}
                                                                        _hover={{
                                                                            background: "#f6ecee",
                                                                        }} variant={'outline'}
                                                                        onClick={() => handleMoveToWishlist(el)}

                                                                    >Move to Wishlist</Button>
                                                                </Flex>
                                                                {/* {Add price and off price} */}
                                                                <Text mt="5px" fontSize={"md"} fontWeight={"700"}>
                                                                    ₹ {el.price}
                                                                    {'  '}
                                                                    <span
                                                                        style={{
                                                                            textDecoration: "line-through",
                                                                            color: "#9c9ea6",
                                                                            fontSize: "13px",
                                                                        }}
                                                                    >
                                                                        ₹ {el.off_price}
                                                                    </span>
                                                                </Text>
                                                                <Flex mt="5px" alignItems={"center"} gap="10px">
                                                                    <GiReturnArrow
                                                                        style={{ color: "#2b2f42", fontSize: "16px" }}
                                                                    />
                                                                    <Text
                                                                        color="#2b2f42"
                                                                        fontSize={"sm"}
                                                                        fontWeight={"700"}
                                                                    >
                                                                        14 days{" "}
                                                                        <span
                                                                            style={{ fontSize: "13px", fontWeight: "400" }}
                                                                        >
                                                                            return available
                                                                        </span>
                                                                    </Text>
                                                                </Flex>
                                                                <Flex mt="5px" alignItems={"center"} gap="10px">
                                                                    <CheckIcon color="#10ab8b" />
                                                                    <Text mr="5px" color="#9c9ea6" fontSize={"sm"}>
                                                                        Delivery by
                                                                        <span
                                                                            style={{
                                                                                fontSize: "13px",
                                                                                color: "#2b2f42",
                                                                                marginLeft: "5px",
                                                                                fontWeight: "700",
                                                                            }}
                                                                        >
                                                                            {deliverDate()}
                                                                        </span>
                                                                    </Text>
                                                                </Flex>
                                                            </Box>
                                                        </Flex>
                                                    </Box>
                                                </Box>
                                            })}
                                        </Box>
                                    </Box>

                                    <Box mt="40px" maxW="container.sm" w="100%">
                                        <Box
                                            cursor={"pointer"}
                                            mt="10px"
                                            p="10px"
                                            borderRadius={"3px"}
                                            border={"1px solid #eaeaec"}
                                            mb='10px'
                                        >
                                            <Flex
                                                alignItems={"center"}
                                                justifyContent={"space-between"}
                                            >
                                                <Box>
                                                    <Flex alignItems={"center"} gap="10px">
                                                        <RiBookmarkLine />
                                                        <Link to="/wishlist">
                                                            <Text fontSize="14px" fontWeight="700">
                                                                {" "}
                                                                Add More From Wishlist
                                                            </Text>
                                                        </Link>
                                                    </Flex>
                                                </Box>
                                                <Box>
                                                    <ChevronRightIcon style={{ fontSize: "13px" }} />
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Box
                                w={{ base: '100%', sm: '100%', md: "35%", lg: "35%", xl: "35%", '2xl': "35%" }}
                                p="15px"
                                mt={'10px'}
                                h={'50%'}
                                border={"1px solid #eaeaec"}
                            >
                                <Text
                                    textTransform={"uppercase"}
                                    fontSize={"sm"}
                                    fontWeight={"700"}
                                >
                                    Coupons
                                </Text>
                                <Flex justifyContent={"space-between"} alignItems={"center"}>
                                    <HStack>
                                        <MdOutlineLocalOffer />
                                        <Text fontSize={"sm"} fontWeight={"800"}>
                                            Apply Coupons
                                        </Text>
                                    </HStack>
                                    {couponValue.temp == null ?
                                        <Button
                                            fontSize={"12px"}
                                            fontWeight={"800"}
                                            pt="3px"
                                            colorScheme="pink"
                                            borderRadius={"none"}
                                            border={"1px solid #ff3f71"}
                                            variant="outline"
                                            _hover={{
                                                background: "#e6ccd1",
                                            }}
                                            onClick={() => { setOpenModal(false); onOpen() }}
                                        >
                                            APPLY
                                        </Button>
                                        :
                                        <Button
                                            _hover={{
                                                background: "#e6d7da",
                                            }}
                                            variant={'outline'}
                                            border={"1px solid #ff3f71"}
                                            fontSize={"12px"}
                                            fontWeight={"800"}
                                            borderRadius={'0'}
                                            colorScheme="red"
                                            onClick={handleRemoveCoupon}

                                        >Remove Coupon</Button>
                                    }
                                </Flex>

                                <Modal
                                    isOpen={isOpen}
                                    onClose={onClose}
                                >
                                    <ModalOverlay />
                                    <ModalContent h={'450px'}>
                                        <ModalHeader color="rgb(83, 87, 102)" textTransform={"uppercase"} fontWeight={"700"} fontSize={"sm"}>{openModal ? 'Change Address' : 'Apply Coupon'}</ModalHeader>
                                        <Box>
                                            <Divider orientation="horizontal" />
                                        </Box>
                                        <ModalCloseButton />
                                        <ModalBody className='scrollbar' pb={6} overflowY={'scroll'}>
                                            {!openModal && <FormControl position={'relative'}>
                                                <Input fontSize={'17px'} color={'gray.500'} value={coupon} onChange={(e) => setCoupon(e.target.value)} p={'22px 12px'} focusBorderColor='black' type="text" size="sm" placeholder='Enter coupon code' />
                                                <Button zIndex={'overlay'} textTransform={'uppercase'} right={'0px'} top={'3px'} _hover={'none'} _active={'none'} color={'#ff3f6c'} variant={'ghost'} position={'absolute'}>Check</Button>
                                            </FormControl>}
                                            {!openModal ? couponArr.map((el, ind) => {
                                                return <FormControl opacity={el.title === 'MISSEDYOU' && discountedPrice < 499 ? '0.5' : ''} isDisabled={el.title === 'MISSEDYOU' && discountedPrice < 499} mt={'20px'}>
                                                    <Flex gap={'20px'}>
                                                        <Checkbox isChecked={couponValue.temp == ind} onChange={() => handleCouponChange(ind, el.discount)} _focusVisible={'none'} colorScheme="pink" />
                                                        <Button _hover={'none'} bg={'white'} _active={'none'} border={'1.5px dashed #ff3f71'}>{el.title}</Button>
                                                        {couponValue.temp != null && couponValue.temp == ind && <Flex fontWeight={'bold'} gap={'5px'} color={'green.400'} alignItems={'center'}>
                                                            <CheckmarkIcon />
                                                            <Text>applied</Text>
                                                        </Flex>}
                                                    </Flex>
                                                    {el.title === 'MISSEDYOU' && discountedPrice < 499 && <Text fontSize={'13px'} m={'5px 0 0 37px'} color={'red'}>Cart value should be at least ₹499 to apply this coupon.</Text>}
                                                    <Box>
                                                        <Text fontSize={'14px'} m={'10px 0 0px 37px'} fontWeight={'bold'}>Save ₹{el.discount == '10%' ? (discountedPrice * 0.1).toFixed() : el.discount == '20%' ? (discountedPrice * 0.2).toFixed() : (discountedPrice * 0.05).toFixed()}</Text>
                                                        <Text ml={'37px'} color={'gray.500'}>{el.desc}</Text>
                                                    </Box>
                                                    <hr style={{ borderTop: 'dotted 1.7px', color: '#bababb', margin: '15px 0 0 37px' }} />
                                                </FormControl>
                                            })
                                                : addressData?.map(el => {
                                                    return <Box
                                                        key={el?.id}
                                                        cursor={"pointer"}
                                                        mt="10px"
                                                        p="10px"
                                                        borderRadius={"3px"}
                                                        border={"1px solid #eaeaec"}
                                                    >
                                                        <Flex alignItems={"center"} gap="10px">
                                                            <Radio colorScheme='pink' isChecked={el?.isSelected} onChange={() => handleSelectedAddress(el?.id, dispatch, addressData)} />
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

                                                        {/* <UnorderedList fontSize={"sm"}>
                                                        <ListItem ml="10px" mt="12px">Pay on Delivery available</ListItem>
                                                    </UnorderedList> */}
                                                        {/* <Flex ml="10px" mt="20px" gap="10px">
                                                        <Button onClick={() => handleRemoveAddress(el?.id)} fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                                            Remove
                                                        </Button>
                                                        <Button onClick={() => handleMakeDefault(el?.id)} fontWeight={"700"} fontSize={"12px"} textTransform={"uppercase"} colorScheme='black' variant='outline'>
                                                            Make default
                                                        </Button>
                                                    </Flex> */}
                                                    </Box>
                                                })}
                                            {
                                                !openModal && !couponArr.length && <FormControl color={'gray.500'} minH={'260px'} display={'grid'} placeItems={'center'}>
                                                    <Text>No other coupon is available</Text>
                                                </FormControl>
                                            }

                                        </ModalBody>
                                        <ModalFooter boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
                                            {!openModal ? <Flex alignItems={'center'} w={'100%'}>
                                                <Flex alignItems={'center'} w={'60%'} gap={'10px'}>
                                                    <Text color={'gray.500'} fontWeight={'bold'} fontSize={'13px'}>Maximum Savings:</Text>
                                                    <Text fontWeight={'bold'}>₹{couponDiscount}</Text>
                                                </Flex>
                                            </Flex>
                                                : <Button
                                                    type='submit'
                                                    w="100%"
                                                    fontSize={"13px"}
                                                    borderRadius={"none"}
                                                    mt="10px"
                                                    color="white"
                                                    bg="#ff3f6c"
                                                    textTransform={"uppercase"}
                                                    variant={"unstyled"}
                                                    onClick={onClose}
                                                >
                                                    Change Address
                                                </Button>}
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>

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
                                    Gifting & Personalisation
                                </Text>
                                <Box
                                    bg="#fff1ec"
                                    borderRadius={"3px"}
                                    m="5px"
                                    p="10px"
                                    borderBottom={"1px solid #eaeaec"}
                                >
                                    <Flex>
                                        <Image w="45px" src={giftImage} />
                                        <Box>
                                            <Text fontSize={"sm"} fontWeight={"700"}>
                                                Buying for a loved one?
                                            </Text>
                                            <Text fontSize={"xs"}>
                                                Gift wrap and Personalized message on card,
                                            </Text>
                                            <Text fontSize={"xs"}>Only for ₹25</Text>

                                            <Text
                                                color="#ff5d71"
                                                mt="8px"
                                                textTransform={"uppercase"}
                                                fontSize={"xs"}
                                                fontWeight={"700"}
                                            >
                                                Add gift wrap
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
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

                                <Flex
                                    mt="8px"
                                    fontSize={"md"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                    color={"#909390"}
                                >
                                    <Flex alignItems={'center'} gap={'20px'}>
                                        <Text>Coupon Discount</Text>
                                        {couponValue.temp != null && <Flex fontWeight={'bold'} gap={'5px'} color={'green.400'} alignItems={'center'}>
                                            <CheckmarkIcon />
                                            <Text>applied</Text>
                                        </Flex>}
                                    </Flex>
                                    {couponValue.temp == null ?
                                        <Text cursor={'pointer'} onClick={onOpen} color={"#ff5d71"}>Apply Coupon</Text>
                                        :
                                        <Text color={'#65b8a5'}>-₹{couponDiscount}</Text>
                                    }
                                </Flex>

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
                                    <Text>₹20</Text>
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
                                    <Text>₹{couponValue.temp == null ? (discountedPrice + 20).toLocaleString() : (discountedPrice + 20 - couponDiscount).toLocaleString()}</Text>
                                </Flex>

                                <Button
                                    w="100%"
                                    borderRadius={"none"}
                                    mt="10px"
                                    color="white"
                                    bg="#ff3f6c"
                                    variant={"unstyled"}
                                    onClick={() => navigate('/address')}
                                >
                                    Place Order
                                </Button>
                            </Box>
                        </Flex>
                    </>
                ) : (
                    <Box dispay={"grid"} placeItems="center" mt="60px" h="80vh">
                        <Container lineHeight={"35px"}>
                            <Image
                                w="200px"
                                m="auto"
                                src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
                            />
                            <Heading size={"md"} textAlign={"center"}>
                                Hey,it feels so light!
                            </Heading>
                            <Text color="gray" textAlign={"center"}>
                                There is nothing in your bag.Let's add some items.
                            </Text>
                            <Flex justifyContent={"center"}>
                                <Button
                                    onClick={() => navigate("/wishlist")}
                                    color={"#D14D72"}
                                    border={"1px solid #D14D72"}
                                    variant="outline"
                                    textTransform="uppercase"
                                >
                                    Add Items from Wishlist
                                </Button>
                            </Flex>
                        </Container>
                    </Box>
                )
            }
        </>
    );
};

export default memo(Cart);