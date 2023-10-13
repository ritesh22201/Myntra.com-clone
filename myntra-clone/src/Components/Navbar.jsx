import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Menu,
  MenuButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  MenuItem,
  FormControl,
  FormLabel,
  MenuList,
  useDisclosure,
  Input,
  Divider,
  VStack,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from '@chakra-ui/icons';

import { FaHeart, FaUserAlt } from 'react-icons/fa'
import { FiHeart, FiUser } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsMen, getSearchProducts } from '../Redux/ProductReducer/action';
import { GlobalContext } from '../Context/GlobalContextProvider';
import logo from '../Assets/myntra-logo.webp';

export default function Navbar() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { inputVal, setInputVal } = useContext(GlobalContext);
  const { cart } = useSelector(store => store.cartReducer);
  const { wishlist } = useSelector(store => store.productReducer);
  const { users } = useSelector(store => store.profileReducer);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('google-login')) || {};

  useEffect(() => {
    if (id) clearTimeout(id);
    var id = setTimeout(() => {
      dispatch(getSearchProducts(inputVal));
    }, 1000);

    return () => clearTimeout(id);
  }, [inputVal])

  const existedUser = users?.find(el => el?.mobile === token.mobile);

  const handleLogout = () => {
    localStorage.removeItem('google-login');
    window.location.reload();
  }

  return (
    <Box position={'sticky'} top={0} zIndex={'overlay'} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        padding={'20px 10px'}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} alignItems={'center'} justify={{ base: 'center', md: 'start' }}>
          <Image _hover={{ cursor: 'pointer' }} onClick={() => navigate('/')} w={'60px'} src={logo} alt='logo' />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Box w={'36%'} mr={'50px'} display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}>
          <Box position={'relative'} top={'7px'} left={'26px'}>
            <SearchIcon />
          </Box>
          <Input value={inputVal} onChange={(e) => setInputVal(e.target.value)} pl={'40px'} _focusVisible={'none'} type='text' placeholder='Search for products, brands and more' />
        </Box>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Menu>
            <MenuButton as='Button' rightIcon={<ChevronDownIcon />}>
              <VStack cursor={'pointer'}>
                <FiUser style={{ fontSize: '20px' }} />
                <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>Profile</Text>
              </VStack>
            </MenuButton>
            <MenuList _hover='none' fontSize='14px'>
              {token?.token ?
                <>
                  <MenuItem fontSize='14px' fontWeight='bold'>{existedUser ? existedUser?.name : 'Hello Myntra User!'}</MenuItem>
                  <MenuItem mt='-10px' fontSize='14px'>{token?.mobile.slice(3)}</MenuItem>
                </>
                :
                <MenuItem w='48%' _hover='none' _active='none' m='0 0 10px 10px' bg='#ff3f71' color='white' borderRadius='3px' fontWeight='bold' onClick={() => navigate('/login')}>Login/Signup</MenuItem>
              }
              <Box h='1px'>
                <Divider orientation='horizontal' />
              </Box>
              {token?.token && <MenuItem onClick={() => navigate('/orders')}>Orders</MenuItem>}
              {token?.token && <MenuItem onClick={() => navigate('/wishlist')} mt='-5px'>Wishlist</MenuItem>}
              <MenuItem mt='-5px'>Gift Card</MenuItem>
              <MenuItem mt='-5px'>Contact Us</MenuItem>
              <Flex position='relative' alignItems='center'>
                <MenuItem mt='-5px'>Myntra Insider</MenuItem>
                <Text position='absolute' fontSize='13px' right='30px' p='0 8px' bg='#ff3f6c' color='white'>New</Text>
              </Flex>
              <Box h='1px'>
                <Divider orientation='horizontal' />
              </Box>
              <MenuItem>Myntra Credit</MenuItem>
              <MenuItem mt='-5px'>Coupons</MenuItem>
              <MenuItem mt='-5px'>Saved Cards</MenuItem>
              <MenuItem mt='-5px'>Saved Addresses</MenuItem>
              <Box h='1px'>
                <Divider orientation='horizontal' />
              </Box>
              {token?.token && <MenuItem onClick={() => navigate('/profile')}>Edit Profile</MenuItem>}
              {token?.token && <MenuItem onClick={handleLogout} mt='-5px'>Logout</MenuItem>}
            </MenuList>
          </Menu>
          <VStack cursor={'pointer'} onClick={() => navigate('/wishlist')}>
            <FiHeart style={{ fontSize: '20px' }} />
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>Wishlist</Text>
          </VStack>
          <VStack position='relative' cursor={'pointer'} onClick={() => navigate('/cart')}>
            <HiOutlineShoppingBag style={{ fontSize: '20px' }} />
            {cart?.length && token?.token && <Box bg={'#ff3f71'} top={'-19px'} left={'12px'} color={'white'} borderRadius={'50%'} display={'grid'} placeItems={'center'} position={'absolute'} w={'21px'} h={'21px'}>{cart?.length}</Box>}
            <Text style={{ fontSize: '15px', fontWeight: 'bold' }}>Bag</Text>
          </VStack>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={'bold'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'MEN',
    href: '/men',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'WOMEN',
    href: '/women',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'HOME&LIVING',
    href: '/home&living',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'BEAUTY',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'STUDIO',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  }
];