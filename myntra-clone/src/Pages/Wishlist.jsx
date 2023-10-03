import { Box, Image, Flex, Heading, Text, Grid, Button, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist, getwishlistproducts } from '../Redux/ProductReducer/action'
import { FaStar } from 'react-icons/fa'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import wishImg from '../Assets/wishlist.png'

const Wishlist = () => {
  const dispatch = useDispatch()
  const { wishlist, isDeleted } = useSelector((store) => store.productReducer)
  const navigate = useNavigate()
  const toast = useToast()

  useEffect(() => {
    dispatch(getwishlistproducts())
  }, [])

  const handleDelete = async (id) => {
    await dispatch(deleteWishlist(id))
    await dispatch(getwishlistproducts());
  }

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [dispatch, wishlist])


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
              return <Box key={el?.id} position={"relative"} w="100%" >
                <Image src={el?.images?.image1} w="100%" />

                <Box  >


                  <Flex opacity={"0.7"} bg={"white"} w="36%" borderRadius={"2px"} justifyContent={"center"} position={"absolute"} top={"250px"} left={2} fontSize={"14px"} alignItems={"center"} p="0 4px">
                    <Heading fontSize={"14px"}> {el?.rating} </Heading>
                    <span style={{ marginLeft: "3px" }} >

                      <FaStar color="#00695C" />
                    </span>
                    {/* <Text m={"0 4px"}> | </Text> <span>{el.count >= 1000 ? `${(el.count/1000).toFixed(1)}k` : el.count}</span> */}
                  </Flex>
                </Box>
                {/* <Box textAlign={"center"} w="98%" >
           <Button w="97%" variant={'outline'}> <FiHeart />  WishList </Button>
        </Box> */}
                <Box _hover={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",

                }} p="10px" lineHeight={"25px"}>
                  <Heading lineHeight={"25px"} fontSize={"17px"}>
                    {el?.brand}
                  </Heading>
                  <Text color={"gray.600"}>{el?.title?.substring(0, 20)}...</Text>
                  <Flex alignItems={"center"}>
                    <span>
                      <Heading fontSize={"15px"}>{`Rs.${el?.off_price}`}</Heading>
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
                        {`Rs.${el?.price}`}
                      </Text>{" "}
                    </span>
                    <span>
                      <Text fontSize={"14px"} color="#FF8A65" mt="3px">
                        ({el?.discount}%OFF)
                      </Text>
                    </span>
                  </Flex>
                </Box>
                <Flex>
                  <Button bg="#D14D72" w="50%">
                    <BsFillCartCheckFill style={{ fontSize: "20px" }} />
                  </Button>
                  <Button w="50%" onClick={() => handleDelete(el.id)}>
                    <AiFillDelete style={{ fontSize: "20px", color: "red" }} />
                  </Button>
                </Flex>
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

export default Wishlist;