import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Text, Button, Divider, Input } from '@chakra-ui/react';
import ContentLoader from '../Components/ContentLoader';
import { useDispatch, useSelector } from 'react-redux';
import { MdVerified } from 'react-icons/md';
import '../CSS/customInput.css';
import { addUserProfile, getProfile } from '../Redux/profileReducer/action';
import { updateAddress } from '../Redux/addressReducer/action';
import { updateProfile } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import { ImCheckmark } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const token = JSON.parse(localStorage.getItem('google-login')) || {};
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users, isLoading, isAdded, isUpdated } = useSelector(store => store.profileReducer);
    const [formDetails, setFormDetails] = useState({ name: '', mobile: token?.mobile, gender: '', email: '', birthday: '', alternateMobile: '' });

    useEffect(() => {
        dispatch(getProfile());
    }, [])

    const existedUser = users?.find(el => el.mobile === token?.mobile);

    const handleChange = (e) => {
        const { name, value } = e?.target;
        setFormDetails({ ...formDetails, [name]: value });
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        if (!formDetails.name || !formDetails.email) {
            toast.error('Please fill required fields');
            return;
        }

        if (existedUser) {
            dispatch(updateProfile(existedUser.id, { ...formDetails }));
        }
        else if (!existedUser) {
            dispatch(addUserProfile({ ...formDetails }))
        }
    }

    useEffect(() => {
        if (isAdded || isUpdated) {
            toast.success('User details saved successfully');
        }
    }, [isAdded, isUpdated])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    return (
        <Box minH='90vh'>
            <Toaster toastOptions={{ duration: 4000 }} />
            {isLoading ? <ContentLoader /> :
                <Box minH={{base : '60vh', sm : '60vh', md : '90vh', lg : '90vh', xl : '100vh', '2xl' : '100vh'}} w={{base : '98%', sm : '98%', md : '85%', lg : '77%', xl : '77%', '2xl' : '77%'}} m={'50px auto'}>
                    <Heading fontSize={'18px'}>Account</Heading>
                    <Text fontSize={'12px'}>{existedUser?.name}</Text>
                    <Flex w={'100%'} borderTop={'1px solid #cccbcb'} mt={'13px'}>
                        <Box w={{md : '25%', lg : '18%', xl : '18%', '2xl' : '18%'}} display={{base : 'none', sm : 'none', md : 'block', lg : 'block', xl : 'block', '2xl' : 'block'}} borderRight={'1px solid #cccbcb'} minH={'83vh'}>
                            <Box w={'80%'} borderBottom={'1px solid #cccbcb'} p={'20px 0'} color={'gray.600'}>
                                <Text>Overview</Text>
                            </Box>
                            <Box w={'80%'} borderBottom={'1px solid #cccbcb'} p={'20px 0'} color={'gray.500'}>
                                <Text fontSize={'13px'}>ORDERS</Text>
                                <Text mt={'10px'} onClick={() => navigate('/orders')} cursor={'pointer'}>Orders & Returns</Text>
                            </Box>
                            <Box w={'80%'} color={'gray.600'} borderBottom={'1px solid #cccbcb'} p={'20px 0'}>
                                <Text color={'gray.500'} fontSize={'13px'}>CREDITS</Text>
                                <Text mt={'10px'}>Coupons</Text>
                                <Text>Myntra Credit</Text>
                                <Text>MynCash</Text>
                            </Box>
                            <Box w={'80%'} color={'gray.600'} p={'20px 0'}>
                                <Text color={'gray.500'} fontSize={'13px'}>ACCOUNT</Text>
                                <Text color={'#14cda8'} fontWeight={'bold'} mt={'10px'}>Profile</Text>
                                <Text>Saved Cards</Text>
                                <Text>Addresses</Text>
                                <Text>Myntra Insider</Text>
                            </Box>
                        </Box>
                        <Box p={{base : '8px', sm : '8px', md : '40px', lg : '40px', xl : '40px', '2xl' : '40px'}} w={{base : '98%', sm : '98%', md : '75%', lg : '80%', xl : '80%', '2xl' : '80%'}} boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' border='1px solid #cccbcb' m='30px 10px'>
                            <Box m='20px 0 20px 15px' w='90%'>
                                <Heading size='md' color='gray.700'>Edit Details</Heading>
                                <Box h='1px' m='20px 0'>
                                    <Divider orientation='horizontal' />
                                </Box>
                                <form onSubmit={handleUpdateProfile}>
                                    <Box border='1px solid #cccbcb' p='12px 10px' borderRadius='3px'>
                                        <Text fontSize='12px' color='#777'>Mobile Number*</Text>
                                        <Flex alignItems='center' gap='5px'>
                                            <Text>{token?.mobile.slice(3)}</Text>
                                            <MdVerified style={{ color: '#3eb770' }} />
                                        </Flex>
                                    </Box>
                                    <Box className='input-container'>
                                        <Input name='name' value={existedUser?.name} onChange={(e) => handleChange(e)} type='text' _focusVisible='none' borderRadius='0' border='1px solid #cccbcb' />
                                        <label>Full Name*</label>
                                    </Box>
                                    <Box className='input-container'>
                                        <Input name='email' value={existedUser?.email} onChange={(e) => handleChange(e)} type='text' _focusVisible='none' borderRadius='0' border='1px solid #cccbcb' />
                                        <label>Email*</label>
                                    </Box>
                                    <Flex w='100%' mt='20px'>
                                        <Button leftIcon={existedUser?.gender === 'male' && !formDetails.gender && <ImCheckmark style={{ color: '#ff3f6c' }} />} name='gender' onClick={() => setFormDetails({ ...formDetails, gender: 'male' })} bg='white' _hover='none' _active='none' borderRadius='0' outline='1px solid #cbc9c9' w='50%'>{formDetails.gender === 'male' && <ImCheckmark style={{ color: '#ff3f6c' }} />} {' '} Male</Button>
                                        <Button leftIcon={existedUser?.gender === 'female' && !formDetails.gender && <ImCheckmark style={{ color: '#ff3f6c' }} />} name='gender' onClick={() => setFormDetails({ ...formDetails, gender: 'female' })} bg='white' _hover='none' _active='none' borderRadius='0' outline='1px solid #cbc9c9' w='50%'>{formDetails.gender === 'female' && <ImCheckmark style={{ color: '#ff3f6c' }} />} {' '} Female</Button>
                                    </Flex>
                                    <Box mt='25px' className='input-container'>
                                        <Input name='birthday' value={existedUser?.birthday} onChange={(e) => handleChange(e)} type='text' _focusVisible='none' borderRadius='0' border='1px solid #cccbcb' />
                                        <label className='birthday-label'>Birthday(dd/mm/yyyy)</label>
                                    </Box>
                                    <Heading fontSize='14px' m='25px 0' color='gray.600'>Alternate mobile details</Heading>
                                    <Box position='relative'>
                                        <Input name='alternateMobile' value={existedUser?.alternateMobile} onChange={(e) => handleChange(e)} pl='35px' type='text' color='#777' fontSize='15px' _focusVisible='none' borderRadius='0' border='1px solid #cccbcb' placeholder='Mobile Number' />
                                        <Text position='absolute' top='11px' left='5px' color='#777' fontSize='13px'>+91  |</Text>
                                    </Box>
                                    <Button type='submit' w='100%' mt='25px' _hover='none' _active='none' borderRadius='2px' fontSize='14px' fontWeight='bold' textTransform='uppercase' bg='#ff3f6c' color='white'>Save Details</Button>
                                </form>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            }
        </Box>
    )
}

export default Profile;