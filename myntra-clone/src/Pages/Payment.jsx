import {
  Box, Flex, Heading, Text, Button, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  Divider,
} from '@chakra-ui/react'
import React, { memo, useEffect, useState } from 'react'
import { BsBank, BsCreditCard2Back, BsTerminalDash } from 'react-icons/bs'
import { BiGift } from 'react-icons/bi'
import { CiPercent, CiStar } from 'react-icons/ci'
import { FaLaptopFile } from 'react-icons/fa'
import { GiMoneyStack, GiWallet } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { deliverDate } from '../constants/deliverDate'
import { useNavigate } from 'react-router-dom'
import PaymentInfo from '../Components/PaymentInfo'
import toast, { Toaster } from 'react-hot-toast'
import { addOrders } from '../Redux/paymentReducer/action'
import ContentLoader from '../Components/ContentLoader';
import { addProductToCart, deleteCartProduct } from '../Redux/CartReducer/action'

const Payment = () => {
  const { cart } = useSelector(store => store.cartReducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const couponValue = JSON.parse(localStorage.getItem('coupon')) || {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartLoading, setCartLoading] = useState(false);
  const { isLoading } = useSelector(store => store.paymentReducer);
  const token = JSON.parse(localStorage.getItem('google-login')) || {};

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

  let couponDiscount = couponValue.discount == '10%' ? (discountedPrice * 0.1).toFixed() : couponValue.discount == '20%' ? (discountedPrice * 0.2).toFixed() : couponValue.discount == '5%' ? (discountedPrice * 0.05).toFixed() : 0;
  const finalPrice = discountedPrice === 0 ? 0 : couponValue.temp != null ? (discountedPrice + 20 - couponDiscount) : (discountedPrice + 20);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const scriptEle = document.createElement('script');
      scriptEle.src = url;

      scriptEle.onload = () => {
        resolve(true);
      }
      scriptEle.onerror = () => {
        resolve(false);
      }

      document.body.appendChild(scriptEle);
    })
  }

  const handlePayment = async (price) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      toast.error('Something went wrong. Please try again!');
      return;
    }

    const options = {
      key: "rzp_test_IBwRzym43ZuMfy",
      currency: 'INR',
      amount: price * 100,
      name: 'Myntra-clone',
      description: 'Payment Successful',

      handler: async(response) => {
        if (response.razorpay_payment_id) {
          toast.success('Payment Successful');
          const payload = {
            ...cart,
            rating: 0,
            mobile: token?.mobile,
            totalPrice: finalPrice,
            orderedAt : Date.now()
          }

          await dispatch(addOrders(payload));
          navigate('/orders');

          

          for(let i = 0; i<cart.length; i++){
            await dispatch(deleteCartProduct(cart[i].id));
          }
        }
      }
    }

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [])

  return (
    <>
      {isLoading ? <ContentLoader /> :
        <Box w={{ base: '100%', sm: '100%', md: '95%', lg: '80%', xl: '80%', '2xl': '80%' }} m="0 auto" >
          <Toaster toastOptions={{ duration: 4000 }} />
          <Flex gap={'10px'} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}>
            <Box maxW='container.sm' w={{ base: '100%', sm: '100%', md: "65%", lg: "65%", xl: "65%", '2xl': "65%" }}>
              <Box mt="10px" p="10px" borderRadius={"3px"} border={"1px solid #C1D0B5"}>
                <Flex alignItems={"center"}>
                  <CiPercent />
                  <Text fontWeight={"700"} ml="8px">Bank Offers</Text>
                </Flex>
                <Text ml={'24px'} color={"gray.600"} fontSize={"13px"}>10% Instant Discount on ICICI Bank Credit Cards on a min spend of Rs.3500.TCA</Text>
                <Accordion allowToggle>
                  <AccordionItem borderTop={"none"} borderBottom={"none"} bg="white" color={"gray.700"} _hover={{ bg: "white" }}>
                    <h2>
                      <AccordionButton >
                        <Box ml={'9px'} as="span" flex='1' textAlign='left'>
                          show more
                        </Box>
                        {/* <AccordionIcon /> */}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <UnorderedList>
                        <Text color={"gray.600"} fontSize={"13px"}>10% Instant Discount on Kotak Credit and Debit Cards on a min spend of Rs.3500.TCA</Text>
                        <Text color={"gray.600"} fontSize={"13px"}>10% Cashback upto Rs.200 on Paytm Wallet and Postpaid Transaction on a min spend of Rs.2000.TCA</Text>
                        <Text color={"gray.600"} fontSize={"13px"}>5% Unlimited Cashback on FlipKart Axis Bank Credit Card.TCA</Text>
                        <Text color={"gray.600"} fontSize={"13px"}>Flat 10% Cashback upto Rs 200 on Airtel Payments Bank transactions on a min spend of Rs 1000. TCA</Text>
                        <Text color={"gray.600"} fontSize={"13px"}>10% Cashback upto Rs 150 on FreeCharge PayLater transaction. TCA</Text>
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

              </Box>

              <Box>
                <Heading size={"sm"} m="15px 0px" fontWeight={"700"}>Payment Info</Heading>
              </Box>
              <Box borderRadius={"3px"} border={"1px solid #C1D0B5"} color={"gray.700"} p="10px">
                <Box >
                  <Flex justifyContent={"space-between"} flexDirection={"column"}>
                    <Box p="10px" border={"1px solid #C1D0B5"}>
                      <Flex gap='5px' alignItems='center'>
                        <CiStar />
                        <Heading size={"md"} color='red.500'>For the next slide use card number as:-</Heading>
                      </Flex>
                    </Box>

                    <Box p="10px">
                      <Flex gap='5px'>
                        <GiMoneyStack />
                        <Heading size={"xs"}>Card Number :- 4111 1111 1111 1111</Heading>
                      </Flex>
                    </Box>

                    <Box p="10px">
                      <Flex gap='5px'>
                        <BsCreditCard2Back />
                        <Heading size={"xs"}>Expiry :- Any expiry which exceeds the current date {'(e.g. 11/25)'}</Heading>
                      </Flex>
                    </Box>

                    <Box p="10px">
                      <Flex gap='5px'>
                        <Text fontSize={"10px"} border={"1px solid black"} >CVV</Text>
                        <Heading size={"xs"}>Enter random 3 digit number {'(e.g. 359)'}</Heading>
                      </Flex>
                    </Box>

                    <Box p="10px">
                      <Flex gap='5px'>
                        <GiWallet />
                        <Heading size={"xs"}>And for OTP in the next slide enter a random 4 digit number</Heading>
                      </Flex>
                    </Box>
                    <Box>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box color={"gray.700"} mb='10px' mt="10px" p="10px" borderRadius={"3px"} border={"1px solid #C1D0B5"}>
                <Flex justifyContent={"space-between"}>
                  <Flex alignItems={"center"}>
                    <BiGift fontSize={"18px"} />
                    <Text fontWeight={"700"} ml="5px">Have a Gift Card?</Text>
                  </Flex>
                  <Button variant={"link"} color={"#D14D72"} _hover={{ textDecoration: "none" }} textTransform={"uppercase"} fontSize={"14px"}  >Apply Gift Card</Button>
                </Flex>
              </Box>
            </Box>
            <PaymentInfo cart={cart} totalPrice={totalPrice} discountedPrice={discountedPrice} couponValue={couponValue} couponDiscount={couponDiscount} handlePayment={handlePayment}>{window.location.pathname === '/payment' ? 'Pay Now' : 'Continue'}</PaymentInfo>
          </Flex>
        </Box>
      }
    </>
  )
}

export default memo(Payment);