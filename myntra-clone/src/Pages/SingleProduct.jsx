import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addwishList, getProductsSingleMen, getwishlistproducts } from "../Redux/ProductReducer/action";
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
  Select,
  useToast,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { BsFillCircleFill, BsStarFill, BsTruck } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { RiStarSLine } from "react-icons/ri";
// import { GlobalContext } from "../Context/GlobalContextProvider";
// import AOS from 'aos';

const SingleProduct = () => {
  const [singleData, setSingleData] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);
  // const [addWishlistData,setAddWishlistData] = useState({})
  const toast = useToast()
  const dispatch = useDispatch()
  const { wishlist } = useSelector((store) => store.productReducer)
  const { id } = useParams();

  useEffect(() => {
    getProductsSingleMen(setSingleData, id);
    const storedSize = localStorage.getItem(`selectedSize_${id}`);
    if (storedSize) {
      setSelectedSize({ ...selectedSize, [id]: storedSize });
    }
  }, [id]);

  //  console.log(wishlist)

  let {
    brand,
    categories,
    color,
    count,
    description,
    gender,
    discount,
    price,
    rating,
    sizes,
    size,
    title,
    off_price,
    images
  } = singleData;



  const handleSize = async (el, id) => {

    setSelectedSize((prevSizes) => ({
      ...prevSizes,
      [id]: prevSizes[id] === el ? '' : el,
    }));

    if (selectedSize[id] === el) {
      localStorage.removeItem(`selectedSize_${id}`);
    } else {
      localStorage.setItem(`selectedSize_${id}`, el);
    }


  }


  const handleAdd = (id) => {

    if (!selectedSize[id]) {
      // alert('Please select a size!');
      toast({
        title: 'Please select a size!',
        // description: "We've created your account for you.",
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return;
    }

    let productData = {
      title,
      brand,
      color,
      rating,
      price,
      gender,
      categories,
      size: selectedSize
    }
    // console.log(productData)
  }

  const handleWishList = (id) => {

    if (!selectedSize[id]) {
      toast({
        title: 'Please select a size!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      return;
    }

    const existedProduct = wishlist?.find(el => el.id === id || el.title === title);
    console.log(existedProduct)

    if (existedProduct) {
      toast({
        title: 'Product is already in the wishlist!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
      // return;
    }
    else if (!existedProduct) {
      let productData = {
        title,
        brand,
        color,
        rating,
        price,
        gender,
        categories,
        description,
        discount,
        off_price,
        images,
        productId: id,
        size: selectedSize,
      };

      dispatch(addwishList(productData));
    }



    // if (!Array.isArray(wishlist)) {
    //   // Fetch wishlist data again and update the store
    //   window.location.reload()
    //   dispatch(getwishlistproducts()).then(() => {
    //     // After fetching data, check if the product already exists in the wishlist
    //     const isProductExists = wishlist?.some(
    //       (product) =>
    //         product.productId === id &&
    //         JSON.stringify(product.size) === JSON.stringify(selectedSize)
    //     );

    //     if (isProductExists) {
    //       toast({
    //         title: 'Product is already in the wishlist!',
    //         status: 'warning',
    //         duration: 3000,
    //         isClosable: true,
    //         position: 'top',
    //       });
    //     } else {
    //       // If the product doesn't exist, add it to the wishlist
    //       let productData = {
    //         title,
    //         brand,
    //         color,
    //         rating,
    //         price,
    //         gender,
    //         categories,
    //         description,
    //         discount,
    //         off_price,
    //         images,
    //         productId: id,
    //         size: selectedSize,
    //       };
    //       dispatch(addwishList(productData));
    //     }
    //   });
    // } else {
    //   // If the wishlist data is already available, perform the check and update
    //   const isProductExists = wishlist.some(
    //     (product) =>
    //       product.productId === id &&
    //       JSON.stringify(product.size) === JSON.stringify(selectedSize)
    //   );

    //   if (isProductExists) {
    //     toast({
    //       title: 'Product is already in the wishlist!',
    //       status: 'warning',
    //       duration: 3000,
    //       isClosable: true,
    //       position: 'top',
    //     });
    //   } else {
    //     let productData = {
    //       title,
    //       brand,
    //       color,
    //       rating,
    //       price,
    //       gender,
    //       categories,
    //       description,
    //       discount,
    //       off_price,
    //       images,
    //       productId: id,
    //       size: selectedSize,
    //     };
    //     dispatch(addwishList(productData));
    //   }
    // }
  }

  //  useEffect(()=>{
  //    toast({
  //       title: 'Product added to wishlist!',
  //       status: 'success',
  //       duration: 3000,
  //       isClosable: true,
  //       position: 'top',
  //     });

  //  },[dispatch])

  // useEffect(() => {
  //   dispatch(getwishlistproducts())
  // }, [])

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  }

  const getRandomDeliveryStatus = () => {
    const randomStatus = pincode.length === 6 ? 'Available' : 'Please enter a valid pincode';

    return randomStatus;
  };


  const handleDelivery = () => {
    if (!pincode) {
      setDeliveryStatus('Please enter a valid pincode');
      return;
    }
    setTimeout(() => {
      const deliveryStatus = getRandomDeliveryStatus();
      setDeliveryStatus(deliveryStatus);
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])

  return (
    // <Box>
    <Flex p={'0 20px'} mt={'30px'} justifyContent={'center'} gap={'60px'}>
      <Box w="50%">
        <VStack>
          {
            images &&
            <HStack>
              <Image w="300px" src={images?.image1} />
              <Image w="300px" src={images?.image2} />
            </HStack>
          }
          {
            images && <HStack>

              <Image w="300px" src={images?.image3} />
              <Image w="300px" src={images?.image4} />
            </HStack>
          }

        </VStack>
      </Box>
      <Box w="50%">
        <Box p="10px">
          {/* <VStack> */}
          <Heading size={"md"}>{brand}</Heading>
          <Text fontSize={"19px"} color={"gray.500"}>
            {title}
          </Text>

          {/* </VStack> */}
          <Box
            // border={"1px solid #C1D0B5"}
            // w="9%"
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
            <Text fontWeight={"700"} textTransform={"uppercase"}>SeLEct SIZE</Text>
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
              {sizes?.map((el, ind) => {
                return (
                  <Box
                    key={ind}
                    w="55px"
                    h="55px"
                    display={"grid"}
                    placeItems={"center"}
                    fontWeight={"700"}
                    mr="10px"
                    fontSize={"18px"}
                    borderRadius={"50%"}
                    border={selectedSize[id] == el ? '3px solid #D14D72' : '1px solid gray'}
                    onClick={() => handleSize(el, id)}
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
              onClick={() => handleAdd(id)}
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
              onClick={() => handleWishList(id)}
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
                // mask="999999"
                // maskChar=""
                type="text"
                value={pincode}
                maxLength={6}
                onChange={handlePincodeChange}
                placeholder='Enter pincode'
                focusBorderColor="#d6d1d1"

              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' color={"#D14D72"} isDisabled={pincode.length < 6} onClick={handleDelivery} _hover={{ bg: "white" }} bg="white">
                  {/* {show ? 'Hide' : 'Show'} */}Check
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Text color={deliveryStatus === 'Available' ? 'green.500' : 'red.500'} fontSize="14px">
            {deliveryStatus}
          </Text>
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
            <BsStarFill fontSize={"25px"} color="#00695C" />
          </Flex>
        </Box>

        <Box mt="10px">
          <Text>Product Code: 10398123</Text>
        </Box>
      </Box>
    </Flex>

    // {/* </Box> */}
  );
}

export default SingleProduct;