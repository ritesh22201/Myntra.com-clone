import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Divider,
  InputGroup,
  InputRightElement,
  Button,
  Input,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { BsFillCircleFill, BsStarFill, BsTruck } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { RiStarSLine } from "react-icons/ri";
// import { GlobalContext } from "../Contexts/GlobalContextProvider";
import { getProductsSingleMen } from "../Redux/ProductReducer/action";
// import AOS from 'aos';

const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  // const [imageData, setImageData] = useState([]);
  // const {paramVal,setParamVal} = useContext(GlobalContext)
  const [sizesData, setSizesData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getProductsSingleMen(setSingleData, id);
  }, [id]);
 
  // console.log(imageData)

  const {
    brand,
    categories,
    color,
    count,
    description,
    gender,
    discount,
    images,
    price,
    rating,
    sizes,
    size,
    title,
    off_price,
  } = singleData;

//  useEffect(() => {
//    setImageData(() => [images]);
//  }, [id])

  return (
    <Box>
      <Flex justifyContent={"space-evenly"} mt="30px">
        <Box w="60%">
          {/* <VStack>
            <HStack>
              <Image w="300px" src={singleData?.images["image1"]} />
              <Image w="300px" src={singleData?.images["image2"]} />
            </HStack>
            <HStack>

            <Image w="300px" src={singleData?.images["image3"]} />
            <Image w="300px" src={singleData?.images["image4"]} />
            </HStack>
          </VStack> */}
        </Box>
        <Box>
          <Box w="40%" p="10px">
            {/* <VStack> */}
            <Heading size={"md"}>{brand}</Heading>
            <Text fontSize={"19px"} color={"gray.500"}>
              {title}
            </Text>

            {/* </VStack> */}
            <Box
              p="3px"
              borderRadius={"2px"}
            >
              <Flex
                opacity={"0.7"}
                bg={"white"}
                w="36%"
                borderRadius={"2px"}
                fontSize={"14px"}
                alignItems={"center"}
                p="0 5px"
              >
                <Heading fontSize={"14px"}> {rating} </Heading>
                <span style={{ marginLeft: "3px" }}>
                  <FaStar color="#00695C" />
                </span>
                <Text m={"0 4px"}> | </Text>{" "}
                <span>
                  {count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count}
                </span>
              </Flex>
            </Box>
            <Box mt="10px">
              <Divider />
            </Box>

            <Box>
              <Flex alignItems={"center"}>
                <span>
                  <Heading size={"lg"}>{`Rs.${off_price}`}</Heading>
                </span>
                <span>
                  <Text
                    fontSize={"19px"}
                    mr="5px"
                    ml="5px"
                    mt="6px"
                    color={"grey"}
                    textDecoration={"line-through"}
                  >
                    {" "}
                    {`Rs.${price}`}
                  </Text>{" "}
                </span>
                <span>
                  <Text fontSize={"21px"} color="#FF8A65" mt="3px">
                    ({discount}%OFF)
                  </Text>
                </span>
              </Flex>
            </Box>
          </Box>
          <br />
          <Box>
            <Heading size={"xs"} color={"#09867f"}>
              inclusive of all taxes
            </Heading>
          </Box>

          <br />
          <br />
          <Box>
            <Flex alignItems={"center"}>
              <Text fontWeight={"700"}>SELECT SIZE</Text>
              <Text
                ml="40px"
                fontWeight={"600"}
                fontSize={"15px"}
                color={"#D14D72"}
              >
                {"SIZE CHART"} {">"}
              </Text>
            </Flex>
            <Box mt="10px">
              <Flex alignItems={"center"}>
                {sizes?.map((el, i) => {
                  return (
                    <Box
                      w="55px"
                      h="55px"
                      display={"grid"}
                      placeItems={"center"}
                      fontWeight={"700"}
                      onClick={() => setSizesData(i)}
                      mr="10px"
                      backgroundColor={sizesData ? '#d14d72' : ''}
                      color={sizesData ? 'white' : 'black'}
                      fontSize={"18px"}
                      borderRadius={"50%"}
                      _hover={{ border:"1px solid #D14D72"}}
                      border={"1px solid gray"}
                     
                    >
                      {el}
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </Box>

          <Box mt="20px">
            <Flex>
              <Button
                p="30px 80px"
                bg="#D14D72"
                _hover={{ bg: "#d65f81", color: "white" }}
                color={"white"}
              >
                <HStack>
                  <HiOutlineShoppingBag />
                  {/* <VStack> */}
                  <Flex direction={"column"}>
                    <Text fontWeight={"bold"}>ADD TO BAG</Text>
                    {/* <Text mt="2px">Buy with early Access</Text> */}
                    {/* </VStack> */}
                  </Flex>
                </HStack>
              </Button>
              <Button
                ml="10px"
                p="30px 60px"
                bg="white"
                _hover={{ bg: "white", border: "1px solid #6b6d6a" }}
                border={"1px solid #C1D0B5"}
              >
                <HStack>
                  <FiHeart />
                  <Heading size={"sm"} fontWeight={""}>
                    WISHLIST
                  </Heading>
                </HStack>
              </Button>
            </Flex>
          </Box>
          {/* <br/> */}
          <Divider mt="20px" />
          <Box mt="25px">
            <Flex alignItems={"center"}>
              <Heading mr="10px" textTransform={"uppercase"} size={"sm"}>
                Delivery Options
              </Heading>
              <BsTruck fontSize={"20px"} />
            </Flex>
          </Box>
          <Box mt="20px" >
            <Flex >
              {/* <Input w="55%" focusBorderColor="#d6d1d1" placeholder="Enter pincode" type="number" />
               <Button position={"relative"} bg={"white"}  right={"70px"} variant={"ghost"} color={"#D14D72"} >Check</Button> */}
              <InputGroup size='md' w="50%">
      <Input
        pr='4.5rem'
        // type={show ? 'text' : 'password'}
        placeholder='Enter pincode'
        focusBorderColor="#d6d1d1"
      
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' color={"#D14D72"}  _hover={{bg:"white"}}  bg="white">
          {/* {show ? 'Hide' : 'Show'} */}Check
        </Button>
      </InputRightElement>
    </InputGroup>
            </Flex>
            <Text color={"gray.500"} fontSize={"14px"} >Please enter PIN code to check delivery time & Pay on Delivery Availability</Text>
          </Box>

          <Box mt="30px">
            <Text color={"gray.600"} >100% Original Products</Text>
            <Text color={"gray.600"} >Pay on delivery might be available</Text>
            <Text color={"gray.600"} >Easy 14 days returns and exchanges</Text>
            <Text color={"gray.600"} >Try & Buy might be available</Text>
          </Box>

          <Divider mt="20px" />

          <Box mt="30px">

          <Flex alignItems={"center"}>
              <Heading mr="10px" textTransform={"uppercase"} size={"sm"}>
                Product Details
              </Heading>
              {/* <BsTruck fontSize={"20px"} /> */}
              <CgDetailsMore fontSize={"20px"} />
            </Flex>
            <Text color={"gray.600"}>{description}</Text>
            <Text>Brand | {brand}</Text>
            {/* <Text></Text> */}
               <HStack>
            <Text>Color | <HStack><BsFillCircleFill color={color} /> </HStack> {color}</Text>
               </HStack>
              
          </Box>

          <Box>
          <Flex alignItems={"center"}>
              <Heading mr="10px" textTransform={"uppercase"} size={"md"}>
               Ratings
              </Heading>
              {/* <BsTruck fontSize={"20px"} /> */}
              <RiStarSLine fontSize={"26px"} />

            </Flex>
             <Flex alignItems={"baseline"}>
            <Heading mr="18px">{rating}</Heading>
            <BsStarFill fontSize={"25px"} color="#00695C"/>
             </Flex>
          </Box>

          <Box mt="10px">
            <Text>Product Code: 10398123</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
