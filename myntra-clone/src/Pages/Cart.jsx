import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    AccordionIcon,
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
    IconButton,
    VStack,
    Spacer,
    Checkbox,
    Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
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
// import { PiKeyReturnBold } from "react-icons/pi";

const Cart = () => {
    // const {wishlist} = useSelector((store)=>store.productsReducer)
    const [showStatus, setShowStatus] = useState(false);

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 20,
            quantity: 2,
        },
        {
            id: 2,
            name: "Product 2",
            price: 30,
            quantity: 1,
        },
    ]);
    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    };
    const navigate = useNavigate();
    return (
        <>
            {cartItems ? (
                <>
                    <Flex justifyContent={"center"} gap="10px" alignItems={"center"}>
                        <Box w="50%">
                            <Box maxW="container.sm" w="100%">
                                <Box
                                    mt="10px"
                                    p="10px"
                                    borderRadius={"3px"}
                                    border={"1px solid #eaeaec"}
                                >

                                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                                        <Box >
                                            <Text fontSize={"md"}>Deliver to: <span style={{ fontWeight: "700" }}>Sharvari,416008</span></Text>
                                            <Text fontSize={"sm"}>1321/34 A Ward Residency Colony Shastrinagar,Kolhapur</Text>
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

                                        >
                                            Change Address
                                        </Button>

                                    </Flex>
                                </Box>
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
                                        <Text color={"gray.600"} fontSize={"13px"}>
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
                                                                <Text color={"#ff3f71"} fontWeight={"bold"}>
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
                                    p="10px"
                                    borderRadius={"3px"}
                                    border={"1px solid #eaeaec"}
                                >
                                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                                        <Flex>
                                            <Checkbox colorScheme={"pink"} />
                                            <Text
                                                fontWeight={"700"}
                                                ml="8px"
                                                textTransform={"uppercase"}
                                            >
                                                3/4 Items Selected
                                            </Text>
                                        </Flex>

                                        <Flex alignItems={"center"} fontSize={"13px"}>
                                            <Text
                                                color={"#535766"}
                                                fontWeight={"700"}
                                                textTransform={"uppercase"}
                                            >
                                                Remove
                                            </Text>
                                            {/* <Divider color={"#eaeaec"} /> */}
                                            <Divider
                                                orientation="vertical"
                                                borderColor="#d4d5d9"
                                                height="30px"
                                                mx={3}
                                            />
                                            <Text
                                                color={"#535766"}
                                                fontWeight={"700"}
                                                textTransform={"uppercase"}
                                            >
                                                Move To Wishlist
                                            </Text>
                                        </Flex>
                                    </Flex>

                                    {/* map here  */}

                                    <Box maxW="container.sm" w="100%">
                                        <Box
                                            cursor={"pointer"}
                                            mt="10px"
                                            p="10px"
                                            borderRadius={"3px"}
                                            border={"1px solid #eaeaec"}
                                        >
                                            <Checkbox
                                                position={"relative"}
                                                top="30px"
                                                left={"20px"}
                                                focusBorderColor="#eaeaec"
                                                colorScheme={"pink"}
                                            />
                                            <Flex justifyContent={"space-around"}>
                                                {/* <Box> */}
                                                <Image
                                                    w="120px"
                                                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2314372/2018/6/19/29e8ddfd-6f5f-43fd-8b71-dfa8ac6cef681529385860869-HRX-by-Hrithik-Roshan-Men-Charcoal-Grey-Slim-Advanced-Rapid--1.jpg"
                                                    alt="productImage"
                                                />
                                                {/* </Box> */}
                                                <Box w="70%">
                                                    <Flex
                                                        justifyContent={"space-between"}
                                                        alignItems={"center"}
                                                    >
                                                        <Text fontSize={"md"} fontWeight={"700"}>
                                                            HRX by Hrithik Roshan
                                                        </Text>{" "}
                                                        {/* {Add brand} */}
                                                        <CloseIcon />
                                                    </Flex>
                                                    <Text>
                                                        Men charcoal gray slim advanced Rapid Dry Raglan
                                                    </Text>{" "}
                                                    {/* {Add title} */}
                                                    {/* size add here */}
                                                    <Flex gap="10px">
                                                        <Select
                                                            fontWeight={"700"}
                                                            w="25%"
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
                                                            fontWeight={"700"}
                                                            w="25%"
                                                            focusBorderColor="#eaeaec"
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
                                                    </Flex>
                                                    {/* {Add price and off price} */}
                                                    <Text mt="5px" fontSize={"md"} fontWeight={"700"}>
                                                        ₹399{" "}
                                                        <span
                                                            style={{
                                                                textDecoration: "line-through",
                                                                color: "#9c9ea6",
                                                                fontSize: "13px",
                                                            }}
                                                        >
                                                            ₹899
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
                                                                5 Oct 2023
                                                            </span>
                                                        </Text>
                                                    </Flex>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box mt="40px" maxW="container.sm" w="100%">
                                    <Box
                                        cursor={"pointer"}
                                        mt="10px"
                                        p="10px"
                                        borderRadius={"3px"}
                                        border={"1px solid #eaeaec"}
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
                            w="25%"
                            p="15px"
                            borderBottom={"1px solid #eaeaec"}
                            borderLeft={"1px solid #eaeaec"}
                            borderRight={"1px solid #eaeaec"}
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
                                <Button
                                    fontSize={"12px"}
                                    fontWeight={"800"}
                                    pt="3px"
                                    colorScheme="pink"
                                    borderRadius={"none"}
                                    border={"1px solid #ff3f71"}
                                    variant="outline"
                                    _hover={{
                                        background: "#e1cacf",
                                    }}
                                >
                                    APPLY
                                </Button>
                            </Flex>

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
                                <Text>₹8,197</Text>
                            </Flex>

                            <Flex
                                mt="8px"
                                fontSize={"md"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                color={"#909390"}
                            >
                                <Text>Discount on MRP</Text>
                                <Text color={"#65b8a5"}>-₹6,487</Text>
                            </Flex>

                            <Flex
                                mt="8px"
                                fontSize={"md"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                color={"#909390"}
                            >
                                <Text>Coupon Discount</Text>
                                <Text color={"#ff5d71"}>Apply Coupon</Text>
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
                                <Text>₹1,730</Text>
                            </Flex>

                            <Button
                                w="100%"
                                borderRadius={"none"}
                                mt="10px"
                                color="white"
                                bg="#ff3f6c"
                                variant={"unstyled"}
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

                    <Box mt="200px" borderTop={"1px solid #C1D0B5"}>
                        <Flex
                            mt="15px"
                            alignItems={"center"}
                            justifyContent={"space-evenly"}
                        >
                            <Box>
                                <HStack>
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
                                    />
                                    <Image
                                        width="60px"
                                        src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
                                    />
                                </HStack>
                            </Box>
                            <Box>
                                <Text fontWeight={"700"}>Need Help ? Contact Us</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default Cart;