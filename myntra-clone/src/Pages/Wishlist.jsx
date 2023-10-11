import { Box, Image, Flex, Heading, Text, Grid, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist, getProductsSingleMen, getwishlistproducts } from '../Redux/ProductReducer/action'
import { FaStar } from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CloseIcon } from '@chakra-ui/icons';
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import wishImg from '../Assets/wishlist.png'
import { addProductToCart, getCartProducts } from '../Redux/CartReducer/action'

const Wishlist = () => {
  const dispatch = useDispatch()
  const { wishlist, isDeleted, isAdded, isUpdated } = useSelector((store) => store.productReducer)
  const navigate = useNavigate()
  const [singleData, setSingleData] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const token = JSON.parse(localStorage.getItem('google-login')) || {};
  const {cart} = useSelector(store => store.cartReducer);
  const [cartLoading, setCartLoading] = useState(false);
  const toast = useToast()
  const { id } = useParams();

  useEffect(() => {
    dispatch(getwishlistproducts())
  }, [])

  useEffect(() => {
    getProductsSingleMen(setSingleData, id);
    const storedSize = localStorage.getItem(`selectedSize_${id}`);
    if (storedSize) {
      setSelectedSize({ ...selectedSize, [id]: storedSize });
    }
  }, [id]);

  const handleDelete = async (id) => {
    await dispatch(deleteWishlist(id))
    await dispatch(getwishlistproducts());
  }

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [dispatch, wishlist])

  const handleAdd = async (elem) => {
 
    const existedProduct = cart?.find(el => el.productId == elem.id || el.title == elem.title);

    if (existedProduct) {
      toast({
        title: 'Product is already in the cart!',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
    }
    else
      if (!existedProduct) {

        const wishlistProduct = wishlist?.find(el => el.productId === elem.productId);
    
        if (wishlistProduct) {
          const productData = {
            ...wishlistProduct,
            quantity : 1
          }
          await dispatch(addProductToCart(productData, setCartLoading));
          await dispatch(deleteWishlist(elem.id))
          await dispatch(getwishlistproducts());

          localStorage.setItem('cart', JSON.stringify([...cart, productData]));
        }
      }
  }

  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(getwishlistproducts());
  }, [isDeleted, isAdded, isUpdated])

  return (
    <Box>
      {
        wishlist && wishlist?.length > 0 ? <Box
          w="90%"
          display={"grid"}
          gap="20px"
          p="20px"
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(5,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
        >

          {
            wishlist?.map((el) => {
              return <Box border={'1px solid #e0dfdf'} key={el?.id} position={"relative"} w="100%" >
                <Image src={el?.images?.image1} w="100%" />
                <Box  >
                  <Flex opacity={"0.7"} bg={"white"} w="36%" borderRadius={"2px"} justifyContent={"center"} position={"absolute"} top={"250px"} left={2} fontSize={"14px"} alignItems={"center"} p="0 4px">
                    <Heading fontSize={"14px"}> {el?.rating} </Heading>
                    <span style={{ marginLeft: "3px" }} >
                      <FaStar color="#00695C" />
                    </span>
                  </Flex>
                </Box>
                <Box p="10px" lineHeight={"25px"}>
                  <Heading lineHeight={"25px"} fontSize={"17px"}>
                    {el?.brand}
                  </Heading>
                  <Text color={"gray.600"}>{el?.title?.substring(0, 20)}...</Text>
                  <Flex alignItems={"center"}>
                    <span>
                      <Heading fontSize={"15px"}>{`Rs.${el?.price}`}</Heading>
                    </span>
                    <span>
                      <Text
                        fontSize={"13px"}
                        mr="5px"
                        ml="5px"
                        mt="3px"
                        color={"grey"}
                        textDecoration={"line-through"}
                      >
                        {" "}
                        {`Rs.${el?.off_price}`}
                      </Text>{" "}
                    </span>
                    <span>
                      <Text fontSize={"14px"} color="#FF8A65" mt="3px">
                        ({el?.discount}%OFF)
                      </Text>
                    </span>
                  </Flex>
                </Box>
                <Button onClick={() => handleAdd(el)} fontSize={'14px'} color={'#ff3f71'} fontWeight={'bold'} textTransform={'uppercase'} _hover={'none'} bg={'white'} borderTop={'1px solid #e0dfdf'} borderRadius={'none'} w={'full'}>
                  Move to Bag
                </Button>
                <Box bg={'white'} display={'grid'} placeItems={'center'} cursor={'pointer'} position={'absolute'} borderRadius={'50%'} h={'25px'} opacity={'0.7'} top={'8px'} right={'8px'} w="25px" onClick={() => handleDelete(el.id)}>
                  <CloseIcon style={{ fontSize: "10px" }} />
                </Box>
              </Box>
            })
          }
        </Box> :
          <Box minH="90vh" display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box w="20%" >
              <Flex w="100%" justifyContent={'end'}>
                <Image src={wishImg} w="80%" alt={"Empty wishlist"} />
              </Flex>
              <Box>
                <Text fontSize={"30px"} color="gray" textAlign={"center"}>Oh!</Text>
                <Text color="gray" textAlign={"center"}>
                  There is nothing in your wishlist.
                </Text>
                <Text color="gray" textAlign={"center"}>Let's add some items.</Text>
                <Flex justifyContent={"center"}>

                  <Button onClick={() => navigate("/products")} color={"#D14D72"} border={"1px solid #D14D72"} mt={'10px'} variant="outline" textTransform="uppercase">
                    Add Items
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
      }
    </Box>
  )
}

export default memo(Wishlist);