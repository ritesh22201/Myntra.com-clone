import { Box, Button, Checkbox, Flex, FormLabel, Heading, Text } from '@chakra-ui/react'
import React, { memo, useContext, useEffect, useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductsMen } from '../Redux/ProductReducer/action';
import { GlobalContext } from '../Context/GlobalContextProvider';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialGender = searchParams.getAll('gender');
    const initialCategory = searchParams.getAll('categories');
    const initialColor = searchParams.getAll('color');
    const initialBrand = searchParams.getAll('brand');
    const initialPrice = searchParams.getAll('price');
    const [gender, setGender] = useState(initialGender || []);
    const [categories, setCategory] = useState(initialCategory || []);
    const [color, setColor] = useState(initialColor || [])
    const [brand, setBrand] = useState(initialBrand || []);
    const [price, setPrice] = useState(initialPrice || []);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const { paramVal, setParamVal } = useContext(GlobalContext);

    useEffect(() => {
        let params = {
            categories,
            gender,
            color,
            brand,
            price
        }

        setSearchParams(params);
    }, [categories, gender, color, brand, price])

    const handleGender = (e) => {
        const { value } = e.target;
        let newGender = [...gender];
        if (newGender.includes(value)) {
            newGender = newGender.filter(el => el !== value);
        }
        else {
            newGender.push(value);
        }
        setGender(newGender);
    }

    const handleCategory = (e) => {
        const { value } = e.target;
        let newCategory = [...categories];
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter(el => el !== value);
        }
        else {
            newCategory.push(value);
        }
        setCategory(newCategory);
    }

    const handleColor = (e) => {
        const { value } = e.target;
        let newColor = [...color];
        if (newColor.includes(value)) {
            newColor = newColor.filter(el => el !== value);
        }
        else {
            newColor.push(value);
        }
        setColor(newColor);
    }

    const handleBrand = (e) => {
        const { value } = e.target;
        let newBrand = [...brand];
        if (newBrand.includes(value)) {
            newBrand = newBrand.filter(el => el !== value);
        }
        else {
            newBrand.push(value)
        }
        setBrand(newBrand);
    }

    return (
        <Box>
            <Flex p={'0 10px'} justifyContent="space-between">
                <FormLabel fontWeight={"700"} >FILTERS</FormLabel>
                {/* <FormLabel fontWeight={"700"} fontSize={"15px"} color={"pink.500"} >CLEAR ALL</FormLabel> */}
            </Flex>
            <Box p={'10px'}>
                <Box>
                    <Checkbox isChecked={gender.includes('men')} value={"men"} onChange={(e) => handleGender(e)} colorScheme={'pink'}>Men</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={gender.includes('women')} value={"women"} onChange={(e) => handleGender(e)} colorScheme={'pink'}>Women</Checkbox>
                </Box>
            </Box>

            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>CATEGORIES</Heading>
                <Box >
                    <Checkbox isChecked={categories.includes('tshirt')} onChange={(e) => handleCategory(e)} value={'tshirt'} colorScheme={'pink'}>Tshirts</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('kurtis')} onChange={(e) => handleCategory(e)} value={'kurtis'} colorScheme={'pink'}>Kurtis</Checkbox>
                </Box>
                <Box >
                    <Checkbox isChecked={categories.includes('shirt')} onChange={(e) => handleCategory(e)} value={'shirt'} colorScheme={'pink'}>Shirts</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('Kurta Sets')} onChange={(e) => handleCategory(e)} value={'Kurta Sets'} colorScheme={'pink'}>Kurta sets</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={categories.includes('Kurta')} onChange={(e) => handleCategory(e)} value={'kurta'} colorScheme={'pink'}>Kurta</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('jeans')} onChange={(e) => handleCategory(e)} value={'jeans'} colorScheme={'pink'}>Jeans</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('shorts')} onChange={(e) => handleCategory(e)} value={'shorts'} colorScheme={'pink'}>Shorts</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('bra')} onChange={(e) => handleCategory(e)} value={'bra'} colorScheme={'pink'}>Bra</Checkbox>
                </Box>

                <Box >
                    <Checkbox isChecked={categories.includes('joggers')} onChange={(e) => handleCategory(e)} value={'joggers'} colorScheme={'pink'}>Joggers</Checkbox>
                </Box>

                <Box >
                    <Checkbox isChecked={categories.includes('jackets')} onChange={(e) => handleCategory(e)} value={'jackets'} colorScheme={'pink'}>Jackets</Checkbox>
                </Box>


                <Box >
                    <Checkbox isChecked={categories.includes('sweatshirt')} onChange={(e) => handleCategory(e)} value={'sweatshirt'} colorScheme={'pink'}>Sweatshirt</Checkbox>
                </Box>


                <Box >
                    <Checkbox isChecked={categories.includes('hoodies')} onChange={(e) => handleCategory(e)} value={'hoodies'} colorScheme={'pink'}>Hoodies</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('shoes')} onChange={(e) => handleCategory(e)} value={'shoes'} colorScheme={'pink'}>Shoes</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('bags')} onChange={(e) => handleCategory(e)} value={'bags'} colorScheme={'pink'}>Bags</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('stole')} onChange={(e) => handleCategory(e)} value={'stole'} colorScheme={'pink'}>Stole</Checkbox>
                </Box>

                <Box >
                    <Checkbox isChecked={categories.includes('cardigan')} onChange={(e) => handleCategory(e)} value={'cardigan'} colorScheme={'pink'}>Cardigan</Checkbox>
                </Box>

                <Box>
                    <Checkbox isChecked={categories.includes('beautycare')} onChange={(e) => handleCategory(e)} value={'beautycare'} colorScheme={'pink'}>Beauty Care</Checkbox>
                </Box>
                <Box >
                    <Checkbox isChecked={categories.includes('boots')} onChange={(e) => handleCategory(e)} value={'boots'} colorScheme={'pink'}>Boots</Checkbox>
                </Box>
                <Box >
                    <Checkbox isChecked={categories.includes('camisole')} onChange={(e) => handleCategory(e)} value={'camisole'} colorScheme={'pink'}>Camisole</Checkbox>
                </Box>
                <Box >
                    <Checkbox isChecked={categories.includes('culottes')} onChange={(e) => handleCategory(e)} value={'culottes'} colorScheme={'pink'}>Culottes</Checkbox>
                </Box>
                <Box >
                    <Checkbox isChecked={categories.includes('dresses')} onChange={(e) => handleCategory(e)} value={'dresses'} colorScheme={'pink'}>Dresses</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={categories.includes('shrug')} onChange={(e) => handleCategory(e)} value={'shrug'} colorScheme={'pink'}>Shrug</Checkbox>
                </Box>
                <Box >
                    <Checkbox isChecked={categories.includes('sweaters')} onChange={(e) => handleCategory(e)} value={'sweaters'} colorScheme={'pink'}>Sweaters</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={categories.includes('tops')} onChange={(e) => handleCategory(e)} value={'tops'} colorScheme={'pink'}>Tops</Checkbox>
                </Box>
            </Box>
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>BRAND</Heading>
                <Box>
                    <Checkbox isChecked={brand.includes('Roadster')} value={'Roadster'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Roadster</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('HERE&NOW')} value={'HERE&NOW'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Here&Now</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Clovia')} value={'Clovia'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Clovia</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Mast & Harbour')} value={'Mast & Harbour'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Mast & Harbour</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Dressberry')} value={'Dressberry'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Dressberry</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Celfie Design')} value={'Celfie Design'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Celfie Design</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('KALINI')} value={'KALINI'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Kalini</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('Street Armor by Pantaloons')} value={'Street Armor by Pantaloons'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>Street Armor by Pantaloons</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('HRX')} value={'HRX'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>HRX</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={brand.includes('H&M')} value={'H&M'} onChange={(e) => handleBrand(e)} colorScheme={'pink'}>H&M</Checkbox>
                </Box>
            </Box>
            {/* <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>PRICE</Heading>
                <Box>
                    <Checkbox onChange={(e) => handlePrice(22, 200)} colorScheme={'pink'}>Rs. 22 to Rs. 200</Checkbox>
                </Box>
                <Box>
                    <Checkbox onChange={() => handlePrice(201, 499)} colorScheme={'pink'}>Rs. 201 to Rs. 499</Checkbox>
                </Box>
                <Box>
                    <Checkbox onChange={() => handlePrice(500, 1299)} colorScheme={'pink'}>Rs. 500 to Rs. 1299</Checkbox>
                </Box>
                <Box>
                    <Checkbox onChange={() => handlePrice(1300, 10000)} colorScheme={'pink'}>Rs. 1300 to Rs. 10000</Checkbox>
                </Box>
            </Box> */}
            <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>COLOR</Heading>
                <Box>
                    <Checkbox isChecked={color.includes('brown')} value={'brown'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>🟤Brown</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={color.includes('black')} value={'black'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>⚫Black</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={color.includes('green')} value={'green'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>🟢Green</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={color.includes('white')} value={'white'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>⚪White</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={color.includes('red')} value={'red'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>🔴Red</Checkbox>
                </Box>
                <Flex alignItems={'center'}>
                    <Checkbox isChecked={color.includes('pink')} value={'pink'} onChange={(e) => handleColor(e)} colorScheme={'pink'}></Checkbox>
                    <Flex ml={'11px'} alignItems={'center'}>
                        <BsCircleFill color='pink' />
                        <Text ml={'3px'}>Pink</Text>
                    </Flex>
                </Flex>
                <Box>
                    <Checkbox isChecked={color.includes('blue')} value={'blue'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>🔵Blue</Checkbox>
                </Box>
                <Box>
                    <Checkbox isChecked={color.includes('yellow')} value={'yellow'} onChange={(e) => handleColor(e)} colorScheme={'pink'}>🟡Yellow</Checkbox>
                </Box>
            </Box>
            {/* <Box border={'1px solid #e5e5e5'} lineHeight={'28px'} p={'10px'}>
                <Heading mb={'15px'} fontSize={'15px'}>DISCOUNT RANGE</Heading>
                <Box>
                    <Checkbox colorScheme={'pink'}>10% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>20% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>30% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>40% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>50% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>60% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>70% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>80% and above</Checkbox>
                </Box>
                <Box>
                    <Checkbox colorScheme={'pink'}>90% and above</Checkbox>
                </Box>
            </Box> */}
        </Box>
    )
}

export default memo(Sidebar);