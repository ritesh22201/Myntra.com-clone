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
import img29A from '../Assets/Home/Section2/08.jpg';
import img29B from '../Assets/Home/Section2/09.jpg';
import img29C from '../Assets/Home/Section2/10.jpg';
import img29D from '../Assets/Home/Section2/11.jpg';

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
import img40 from '../Assets/Home/Section3/12.jpg';
import img41 from '../Assets/Home/Section3/13.jpg';
import img42 from '../Assets/Home/Section3/14.jpg';
import img43 from '../Assets/Home/Section3/15.jpg';
import img44 from '../Assets/Home/Section3/16.jpg';
import img45 from '../Assets/Home/Section3/17.jpg';
import img46 from '../Assets/Home/Section3/18.jpg';
import img47 from '../Assets/Home/Section3/19.jpg';
import img48 from '../Assets/Home/Section3/20.jpg';
import img49 from '../Assets/Home/Section3/21.jpg';

//-------------------Section4---------------------
import img50 from '../Assets/Home/Section4/09.jpg';
import img51 from '../Assets/Home/Section4/01.jpg';
import img52 from '../Assets/Home/Section4/02.jpg';
import img53 from '../Assets/Home/Section4/03.png';
import img54 from '../Assets/Home/Section4/04.jpg';
import img55 from '../Assets/Home/Section4/05.jpg';
import img56 from '../Assets/Home/Section4/06.png';
import img57 from '../Assets/Home/Section4/07.jpg';
import img58 from '../Assets/Home/Section4/08.jpg';
import img59 from '../Assets/Home/Section4/10.jpg';
import img60 from '../Assets/Home/Section4/11.jpg';
//-----------------Section5-----------------------
import img61 from '../Assets/Home/Section5/01.jpg';
import img62 from '../Assets/Home/Section5/02.jpg';
import img63 from '../Assets/Home/Section5/03.jpg';
import img64 from '../Assets/Home/Section5/04.jpg';
import img65 from '../Assets/Home/Section5/05.jpg';
import img66 from '../Assets/Home/Section5/06.jpg';
import img67 from '../Assets/Home/Section5/07.jpg';
// import img68 from '../Assets/Home/Section5/08.webp';
import img69 from '../Assets/Home/Section5/27.jpg';
import img70 from '../Assets/Home/Section5/09.webp';
import img71 from '../Assets/Home/Section5/10.webp';
import img72 from '../Assets/Home/Section5/11.webp';
import img73 from '../Assets/Home/Section5/12.webp';
import img74 from '../Assets/Home/Section5/13.webp';
import img75 from '../Assets/Home/Section5/14.jpg';
import img76 from '../Assets/Home/Section5/15.jpg';
import img77 from '../Assets/Home/Section5/16.jpg';
import img78 from '../Assets/Home/Section5/17.webp';
import img79 from '../Assets/Home/Section5/18.webp';
import img80 from '../Assets/Home/Section5/19.webp';
import img81 from '../Assets/Home/Section5/20.webp';
import img82 from '../Assets/Home/Section5/21.webp';
import img83 from '../Assets/Home/Section5/22.webp';
import img84 from '../Assets/Home/Section5/23.jpg';
import img85 from '../Assets/Home/Section5/24.jpg';
import img86 from '../Assets/Home/Section5/25.webp';
import img87 from '../Assets/Home/Section5/26.webp';
import img88 from '../Assets/Home/Section5/08.webp';
import img89 from '../Assets/Home/Section5/28.webp';
import img90 from '../Assets/Home/Section5/29.webp';
import img91 from '../Assets/Home/Section5/30.jpg';
import img92 from '../Assets/Home/Section5/31.jpg';
import img93 from '../Assets/Home/Section5/32.webp';
import img94 from '../Assets/Home/Section5/33.jpg';
import img95 from '../Assets/Home/Section5/34.jpg';
import img96 from '../Assets/Home/Section5/35.jpg';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [])

  return (
    <Box cursor={'pointer'}>
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
        <Box onClick={() => navigate('/products')} display={'grid'} gridTemplateColumns={'repeat(10, 1fr)'}>
          <Image src={img22} alt='img22' />
          <Image src={img23} alt='img23' />
          <Image src={img24} alt='img24' />
          <Image src={img25} alt='img25' />
          <Image src={img27} alt='img27' />
          <Image src={img28} alt='img28' />
          <Image src={img29A} alt='img29A' />
          <Image src={img29B} alt='img29B' />
          <Image src={img29C} alt='img29C' />
          <Image src={img29D} alt='img29D' />
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
          <Image src={img40} alt='img40' />
          <Image src={img41} alt='img41' />
          <Image src={img42} alt='img42' />
          <Image src={img43} alt='img43' />
          <Image src={img44} alt='img44' />
          <Image src={img45} alt='img45' />
          <Image src={img46} alt='img46' />
          <Image src={img47} alt='img47' />
          <Image src={img48} alt='img48' />
          <Image src={img49} alt='img49' />
        </Box>
      </section>
      <section>
        <Image src={img50} alt='img50' />
        <Box onClick={() => navigate('/products')} display={'grid'} gridTemplateColumns={'repeat(10, 1fr)'}>
          <Image src={img51} alt='img51' />
          <Image src={img52} alt='img52' />
          <Image src={img53} alt='img53' />
          <Image src={img54} alt='img54' />
          <Image src={img55} alt='img55' />
          <Image src={img56} alt='img56' />
          <Image src={img57} alt='img57' />
          <Image src={img58} alt='img58' />
          <Image src={img59} alt='img59' />
          <Image src={img60} alt='img60' />
        </Box>
      </section>
      <section>
        <Image src={img61} alt='cover' />
        <Box onClick={() => navigate('/products')} display={'grid'} justifyContent={'center'} gridTemplateColumns={'repeat(6, 1fr)'}>
          <Image src={img62} alt='img53' />
          <Image src={img63} alt='img54' />
          <Image src={img64} alt='img55' />
          <Image src={img65} alt='img56' />
          <Image src={img66} alt='img57' />
          <Image src={img67} alt='img58' />
          <Image src={img69} alt='img59' />
          <Image src={img70} alt='img59' />
          <Image src={img71} alt='img59' />
          <Image src={img72} alt='img59' />
          <Image src={img73} alt='img59' />
          <Image src={img74} alt='img59' />
          <Image src={img75} alt='img59' />
          <Image src={img76} alt='img59' />
          <Image src={img77} alt='img59' />
          <Image src={img78} alt='img59' />
          <Image src={img79} alt='img59' />
          <Image src={img80} alt='img59' />
          <Image src={img81} alt='img59' />
          <Image src={img82} alt='img59' />
          <Image src={img83} alt='img59' />
          <Image src={img84} alt='img59' />
          <Image src={img85} alt='img59' />
          <Image src={img91} alt='img59' />
          <Image src={img86} alt='img59' />
          <Image src={img87} alt='img59' />
          <Image src={img88} alt='img59' />
          <Image src={img89} alt='img59' />
          <Image src={img90} alt='img59' />
          <Image src={img93} alt='img59' />
          <Image src={img92} alt='img59' />
          <Image src={img94} alt='img59' />
          <Image src={img95} alt='img59' />
          <Image src={img96} alt='img59' />
        </Box>
      </section>
    </Box>
  )
}

export default Home;