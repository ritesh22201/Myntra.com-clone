import {
  Box, Container, Flex, HStack, Heading, Text, Button, VStack, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  AccordionIcon,
  Divider,
} from '@chakra-ui/react'
import React, { memo } from 'react'
import { BsBank, BsCreditCard2Back, BsTerminalDash } from 'react-icons/bs'
import { BiGift } from 'react-icons/bi'
import { CiPercent, CiStar } from 'react-icons/ci'
import { FaLaptopFile } from 'react-icons/fa'
import { GiMoneyStack, GiWallet } from 'react-icons/gi'


const Payment = () => {
  return (
    <Box w="80%" m="40px auto" >
      <Flex justifyContent={"space-around"}>

        <Box maxW='container.sm' w="60%">
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
            <Heading size={"sm"} m="15px 0px" fontWeight={"700"}>Choose Payment Mode</Heading>
          </Box>
          <Box borderRadius={"3px"} border={"1px solid #C1D0B5"} color={"gray.700"} p="10px">
            <Box >
              <Flex justifyContent={"space-between"} flexDirection={"column"}>


                <Box p="10px" border={"1px solid #C1D0B5"}>
                  <Flex>
                    <CiStar />
                    <Heading size={"xs"}>Recommended</Heading>
                  </Flex>
                </Box>

                <Box p="10px">
                  <Flex>
                    <GiMoneyStack />
                    <Heading size={"xs"}>Cash on Delivery</Heading>
                  </Flex>
                </Box>

                <Box p="10px">
                  <Flex>
                    <BsCreditCard2Back />
                    <Heading size={"xs"}>Credit/Debit Card</Heading>
                  </Flex>
                </Box>

                <Box p="10px">
                  <Flex>
                    <Text fontSize={"10px"} border={"1px solid black"} >UPI</Text>
                    <Heading size={"xs"}>PhonePe/Google Pay/BHIM UPI</Heading>
                  </Flex>
                </Box>

                <Box p="10px">
                  <Flex>
                    <GiWallet />
                    <Heading size={"xs"}>Paytm/Wallets</Heading>
                  </Flex>
                </Box>

                <Box p="10px">
                  <Flex>
                    <BsBank />
                    <Heading size={"xs"}>Net Banking</Heading>
                  </Flex>

                </Box>

                <Box p="10px">
                  <Flex>
                    {/* <GiMoneyStack/> */}
                    <BsTerminalDash />
                    <Heading size={"xs"}>EMI/Pay Later</Heading>
                  </Flex>
                </Box>

                <Box>

                </Box>
              </Flex>
            </Box>
          </Box>

          <Box color={"gray.700"} mt="10px" p="10px" borderRadius={"3px"} border={"1px solid #C1D0B5"}>
            <Flex justifyContent={"space-between"}>

              <Flex alignItems={"center"}>
                <BiGift fontSize={"18px"} />
                <Text fontWeight={"700"} ml="5px">Have a Gift Card?</Text>

              </Flex>
              <Button variant={"link"} color={"#D14D72"} _hover={{ textDecoration: "none" }} textTransform={"uppercase"} fontSize={"14px"}  >Apply Gift Card</Button>
            </Flex>

          </Box>



        </Box>
        <Divider orientation='vertical' h={"500px"} />

        <Box w="25%">
          <Text color={"gray.600"} textTransform={"uppercase"} fontSize={"13px"} fontWeight={"700"}>Price Details(5 Items)</Text>
          <Box color={"gray.600"}>
            <Flex justifyContent={"space-between"}>
              <Text>Total MRP</Text>
              <Text>₹8,354</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Discount MRP</Text>
              <Text>-₹5,654</Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text>Convinience Fee <span style={{ color: '#d65e80', fontWeight: "600" }}> Know More</span> </Text>
              <Text>₹10</Text>
            </Flex>
            <Divider m="10px" />
            <Flex color={"black"} justifyContent={"space-between"}>
              <Heading size={"sm"}>Total Amount</Heading>
              <Heading size={"sm"}>₹2,897</Heading>
            </Flex>
          </Box>
        </Box>

      </Flex>
    </Box>
  )
}

export default memo(Payment);