import { Box, Button, Heading, Image, Text, Flex, Spinner, Toast, useToast } from '@chakra-ui/react'
import React, { memo } from 'react';
import img from '../Assets/myntra-login-in-img.avif'
import { useEffect, useState } from 'react';
import otpImg from '../Assets/verify-otp-img.jpg';
import OtpInput from 'otp-input-react';
import { auth } from '../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, Toaster } from "react-hot-toast";
import '../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOADER_FALSE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../Redux/AuthReducer/actionTypes';
import { useLocation, useNavigate } from 'react-router-dom';
import { width } from '../constants/responsiveness';

const Login = () => {
    const [otpCount, setOtpCount] = useState(25);
    const [otp, setOtp] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [ph, setPh] = useState('');
    const dispatch = useDispatch();
    const { isLoading, token } = useSelector(store => store.authReducer);

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        });
    }

    const handleSendCode = async (e) => {
        dispatch({ type: LOGIN_REQUEST });
        // generateRecaptcha();
        const recaptcha = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, ph, recaptcha)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                dispatch({ type: LOADER_FALSE });
                setShowOtp(true);
                toast.success("OTP sent successfully!");
            }).catch((error) => {
                toast.error(error.message);
                dispatch({ type: LOGIN_FAILURE })
            });
    }

    const handleVerifyCode = async () => {
        dispatch({ type: LOGIN_REQUEST });

        window.confirmationResult.confirm(otp).then((result) => {
            const userDetails = result.user;
            localStorage.setItem('google-login', JSON.stringify({ mobile: userDetails.phoneNumber, token: userDetails.accessToken }));
            toast.success('User logged in successfully');
            dispatch({ type: LOGIN_SUCCESS, payload: userDetails.accessToken });
            navigate('/cart');
        }).catch((error) => {
            dispatch({type : LOGIN_FAILURE});
            toast.error('Otp is incorrect!');
        });
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [])

    return (
        <Box className='scrollbar' pt={'12px'} bg={'#F9ECEC'} minH={'100vh'}>
            <Toaster toastOptions={{ duration: 4000 }} />
            {!token &&
                <Box>
                    {!showOtp ?
                        <Box w={width} m={'auto'}>
                            <Box id='sign-in-button'></Box>
                            <Box w='100%' m={'10px auto 0 auto'}>
                                <Image src={img} />
                            </Box>
                            <Box style={{ padding: '30px 30px 0 30px', margin: 'auto', background: 'white' }}>
                                <Heading mb={'25px'} color={'#161515'} fontSize={'18px'}>Login <span>or</span> Signup</Heading>
                                <PhoneInput inputStyle={{ width: '100%' }} country={"in"} value={ph} onChange={(ph) => setPh('+' + ph)} />
                                <Text fontSize={'13px'} m={'24px 0'} color={'gray.500'}>By continuing, I agree to the <span style={{ color: '#FF3F6C', fontWeight: 'bold' }}>Terms of Use</span> & <span style={{ color: '#FF3F6C', fontWeight: 'bold' }}>Privacy Policy</span></Text>
                                <Button onClick={() => {
                                    generateRecaptcha();
                                    handleSendCode();
                                }} id='sign-in-button' fontWeight={'bold'} borderRadius={'none'} w={'100%'} fontSize={'15px'} _hover={"none"} color={'white'} bg={'#FF3F6C'}>{isLoading && <Spinner mr={'5px'} thickness='3px' speed='0.65s' emptyColor='gray.200' color='pink.300' size='sm' />}CONTINUE</Button>
                                <Text fontSize={'13px'} m={'24px 0'} color={'gray.500'}>Have trouble logging in? <span style={{ color: '#FF3F6C', fontWeight: 'bold' }}>Get Help</span></Text>
                            </Box>
                        </Box>
                        :
                        <Box h={'100vh'} pt={'20px'} bg={'#F9ECEC'}>
                            <Box p={'35px'} w={width} m={'10px auto'} bg={'white'}>
                                <Box mb={'20px'}>
                                    <Image w={'100px'} src={otpImg} alt='otpImg' />
                                </Box>
                                <Heading mb={'10px'} fontSize={'20px'}>Verify with OTP</Heading>
                                <Text color={'gray.500'} fontSize={'14px'}>Sent to {ph}</Text>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    border={'1px solid gray'}
                                    OTPLength={6}
                                    otpType='number'
                                    disabled={false}
                                    autofocus
                                    className='opt-container'>
                                </OtpInput>
                                <Button onClick={handleVerifyCode} borderRadius={'none'} w={'84%'} mt={'20px'} _hover={'none'} bg={'#FF3F6C'} color={'white'} fontWeight={'bold'}> {isLoading && <Spinner mr={'5px'} thickness='3px' speed='0.65s' emptyColor='gray.200' color='pink.300' size='sm' />} <span>Verify OTP</span></Button>
                                <Flex mt='20px' alignItems={'center'}>
                                    <Text fontSize={'14px'}>Log in using</Text>
                                    <Heading ml={'5px'} fontSize={'14px'} color={'#FF3F6C'}>Password</Heading>
                                </Flex>
                                <Flex mt={'20px'} alignItems={'center'}>
                                    <Text fontSize={'14px'}>Having trouble logging in?</Text>
                                    <Heading ml={'5px'} fontSize={'14px'} color={'#FF3F6C'}>Get help</Heading>
                                </Flex>
                            </Box>
                        </Box>
                    }
                </Box>
            }
        </Box>
    )
}

export default memo(Login);