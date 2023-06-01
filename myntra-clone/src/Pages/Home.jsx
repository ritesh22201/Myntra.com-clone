import { Box, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import coverImg from '../Assets/Home/home_cover.jpg'
//------------------Section1----------------------
import img1 from '../Assets/Home/Section1/17.jpg';
import img2 from '../Assets/Home/Section1/01.jpg';
import img3 from '../Assets/Home/Section1/02.jpg';
import img4 from '../Assets/Home/Section1/03.jpg';
import img5 from '../Assets/Home/Section1/04.jpg';
import img6 from '../Assets/Home/Section1/05.jpg';
import img7 from '../Assets/Home/Section1/06.jpg';
import img8 from '../Assets/Home/Section1/07.jpg';
import img9 from '../Assets/Home/Section1/08.jpg';
import img10 from '../Assets/Home/Section1/09.jpg';
import img11 from '../Assets/Home/Section1/10.jpg';
import img12 from '../Assets/Home/Section1/11.jpg';
import img13 from '../Assets/Home/Section1/12.jpg';
import img14 from '../Assets/Home/Section1/13.jpg';
import img15 from '../Assets/Home/Section1/14.jpg';
import img16 from '../Assets/Home/Section1/15.jpg';
import img17 from '../Assets/Home/Section1/16.jpg';
import img18 from '../Assets/Home/Section1/18.jpg';
import img19 from '../Assets/Home/Section1/19.jpg';
import img20 from '../Assets/Home/Section1/20.jpg';
import img21 from '../Assets/Home/Section1/21.jpg';
//----------------------Section2-------------------
import img22 from '../Assets/Home/Section2/01.jpg';
import img23 from '../Assets/Home/Section2/02.jpg';
import img24 from '../Assets/Home/Section2/03.jpg';
import img25 from '../Assets/Home/Section2/04.jpg';
import img26 from '../Assets/Home/Section2/05.jpg';
import img27 from '../Assets/Home/Section2/06.jpg';
import img28 from '../Assets/Home/Section2/07.jpg';
//--------------------Section3---------------------
import img29 from '../Assets/Home/Section3/10.jpg'
import img30 from '../Assets/Home/Section3/01.webp';
import img31 from '../Assets/Home/Section3/02.webp';
import img32 from '../Assets/Home/Section3/03.webp';
import img33 from '../Assets/Home/Section3/04.webp';
import img34 from '../Assets/Home/Section3/05.webp';
import img35 from '../Assets/Home/Section3/06.webp';
import img36 from '../Assets/Home/Section3/07.webp';
import img37 from '../Assets/Home/Section3/08.webp';
import img38 from '../Assets/Home/Section3/09.webp';
import img39 from '../Assets/Home/Section3/11.webp';


const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <Box>
      <Box onClick={() => navigate('/products')} style={{ width: '93%', margin: '30px auto' }}>
        <Image w={'100%'} src={coverImg} alt='coverImg' />
      </Box>
      <section>
        <Image src={img1} alt='img1' />
        <Box onClick={() => navigate('/products')} id='sec-1-grid' display={'grid'} gridTemplateColumns={'repeat(10, 1fr)'}>
          <Image src={img2} alt='img2' />
          <Image src={img3} alt='img3' />
          <Image src={img4} alt='img4' />
          <Image src={img5} alt='img5' />
          <Image src={img6} alt='img6' />
          <Image src={img7} alt='img7' />
          <Image src={img8} alt='img8' />
          <Image src={img9} alt='img9' />
          <Image src={img10} alt='img10' />
          <Image src={img11} alt='img11' />
          <Image src={img12} alt='img' />
          <Image src={img13} alt='img13' />
          <Image src={img14} alt='img14' />
          <Image src={img15} alt='img15' />
          <Image src={img16} alt='img16' />
          <Image src={img17} alt='img17' />
          <Image src={img18} alt='img18' />
          <Image src={img19} alt='img19' />
          <Image src={img20} alt='img20' />
          <Image src={img21} alt='img21' />
        </Box>
      </section>
      <section>
        <Image src={img26} alt='img26' />
        <Box onClick={() => navigate('/products')} display={'grid'} gridTemplateColumns={'repeat(6, 1fr)'}>
          <Image src={img22} alt='img22' />
          <Image src={img23} alt='img23' />
          <Image src={img24} alt='img24' />
          <Image src={img25} alt='img25' />
          <Image src={img27} alt='img27' />
          <Image src={img28} alt='img28' />
        </Box>
      </section>
      <section>
        <Image src={img29} alt='img29' />
        <Box onClick={() => navigate('/products')} display={'grid'} gridTemplateColumns={'repeat(10, 1fr)'}>
          <Image src={img30} alt='img30' />
          <Image src={img31} alt='img31' />
          <Image src={img32} alt='img32' />
          <Image src={img33} alt='img33' />
          <Image src={img34} alt='img34' />
          <Image src={img35} alt='img35' />
          <Image src={img36} alt='img36' />
          <Image src={img37} alt='img37' />
          <Image src={img38} alt='img38' />
          <Image src={img39} alt='img39' />
        </Box>
      </section>
    </Box>
  )
}

export default Home;