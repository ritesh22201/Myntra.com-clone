import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Heading,
  Image,
  Link,
  VisuallyHidden,
  Flex,

  chakra,
  useColorModeValue,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

 import apple from '../Assets/Footer/apple.webp';
 import playstore from '../Assets/Footer/playstore.png';
 import returnimg from '../Assets/Footer/14dayReturn.png';
 import original from '../Assets/Footer/original.png';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      pt={'10px'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} mb="25px" spacing={8}>
          <Stack align={'flex-start'}>
            {/* <ListHeader>Company</ListHeader> */}
            <Heading size={"xs"}>ONLINE SHOPPING</Heading>
         
                <Box color={"gray.600"}>

                 <Text>Men</Text>
                 <Text>Women</Text>
                 <Text>Kids</Text>
                 <Text>Home & Living</Text>
                 <Text>Beauty</Text>
                 <Text>Gift Cards</Text>
                <Text>Myntra Insiders</Text>
                </Box>
                <br/>
                <Heading size={"xs"}>USEFUL LINKS</Heading>
                 
                 <Box color={"gray.600"}>

                 <Text>Blog</Text>
                 <Text>Careers</Text>
                 <Text>Site Map</Text>
                 <Text>Corporate Information</Text>
                 <Text>Whitehat</Text>
                 </Box>
            {/* <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link> */}
          </Stack>

          <Stack align={'flex-start'}>
          
            {/* <ListHeader>Support</ListHeader> */}
            <Heading size={"xs"}>CUSTOMER POLICIES</Heading>
            
              <Box color={"gray.600"}>

                 <Text>Contact Us</Text>
                 <Text>FAQ</Text>
                 <Text>T&C</Text>
                 <Text>Terms Of Use</Text>
                 <Text>Track Orders</Text>
                 <Text>Shipping</Text>
                 <Text>Cancellation</Text>
                 <Text>Returns</Text>
                 <Text>Privacy policy</Text>
                 <Text>Grievence Officer</Text>
              </Box>
            {/* <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link> */}
          </Stack>

          <Stack align={'flex-start'}>
            {/* <ListHeader>Legal</ListHeader> */}
            <Heading mb="10px" size={"xs"} textTransform={"uppercase"}>Experience Ud app on mobile</Heading>
            <Flex  gap="10px">
            <Image w="120px" src={apple} />
            <Image  w="120px" src={playstore} />
            </Flex>

            <Box >
            <Heading mt="20px" size={"xs"}>KEEP IN TOUCH</Heading>
       
          <HStack mt="10px" fontSize={"25px"} color={"gray"}>

          <FaFacebook/>
          <FaTwitter/>
          <FaYoutube/>
          <FaInstagram/>
          </HStack>

            </Box>

          </Stack>

          <Stack align={'flex-start'}>
            {/* <ListHeader>Install App</ListHeader> */}
            <HStack>
            <Image w="60px" src={original} />
             <VStack>
                <Text>100% ORIGINAL guarantee for  all products at myntra.com</Text>
               
             
             </VStack>
            </HStack>
            <HStack>
            <Image w="70px" src={returnimg} />
             <VStack>
                <Text>Return within 14 days of <br/>  receiving your order</Text>
               
             
             </VStack>
            </HStack>

          </Stack>
         
        </SimpleGrid>
        <Box >
          <Heading mb="10px" size={"xs"} textTransform={"uppercase"}>Popular Searches</Heading>
          <Text>
Makeup | Dresses | For Girls | T-Shirts |  Sandals | Headphones | Babydolls | Blazers For Men|  Handbags|  Ladies Watches | Bags|  Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees</Text>
          </Box>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>In case of any concern, <Link href="#" color={"blue"} fontWeight={"bold"} >Contact Us</Link> </Text>  
          <Stack direction={'row'} spacing={6}>
          <Text>© 2023 UniqkDezynes Templates. All rights reserved</Text>
          
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}