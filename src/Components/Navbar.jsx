import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  useColorMode,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';
import './Navbar.css';
import ResumePDF from '../assets/JustinTerrysResume.pdf';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { scroller } from 'react-scroll';

const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
};

const Links = ['Home', 'Experience', 'Projects', 'Resume', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    onClick={() => Links.includes(children) && children !== 'Resume' ? scrollToSection(children) : null}
    px={0}
    py={1}
    fontWeight={'700'}
    color={'black'}
    lineHeight={1.25}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    //   bg: useColorModeValue('grey.200', 'grey.700'),
    }}
    download={children === 'Resume' &&  isMobile === true ? true : false}
    href={children === 'Resume' ? ResumePDF : '#'}
    isExternal={children === 'Resume'}
  >
    {/* // href={children === 'Resume' ? "https://docs.google.com/document/d/1IJFtFzuObuSFldTErFEOYusoBINiY53wR6P8QDcDNJA/edit?usp=sharing" : '#'}> */}
    {children}
  </Link>
);

const Name = () => {
    return (
        <Box fontSize={{base: 20, md: 22, lg: 24}} color={'black'} _hover={{cursor: 'pointer'}} fontWeight={700} onClick={() => scrollToSection('Home')} >Justin Terry</Box>
    )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="navbar__container" style={{position: 'sticky', zIndex: 1000}}>
      <Box bg={useColorModeValue('background.navbarLight', 'background.navbarDark')} borderBottom={'1px solid rgba(0, 0, 0, 0.1)'} px={0} display={{base: 'none', md: 'none', lg: 'flex'}}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'} w={'100%'}>
          <Name />
          <Flex alignItems={'center'}>
              <HStack color={'black'} spacing={5} px={10} alignItems={'center'} as={'nav'} display={{base: 'none', md: 'flex'}} fontSize={14} fontWeight={400}>
                {Links.map((link) => <NavLink key={link} onClick={() => console.log(link)} >{link}</NavLink>)}
                <Button bg={useColorModeValue('background.navbarLight', 'background.navbarDark')} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon color='black'/> : <SunIcon color='black'/>}
                </Button>
              </HStack>
          </Flex>
        </Flex>
      </Box>

      {/* MOBILE */}
      <Box bg={useColorModeValue('background.navbarLight', 'background.navbarDark')} borderStyle={'none'} px={{base: '10px'}} display={{lg: 'none'}}  w={'100%'}>
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon/>} color="black" bg={useColorModeValue('background.navbarLight', 'background.navbarDark')}/>
            {/* 100vw causes a horizontal scrollbar. Need to fix so it's 100% of device width without using vw */}
            <MenuList w={'100vw'} maxW={'100%'} borderRadius={0} borderWidth={0} px={7} boxShadow={'none'} bg={useColorModeValue('background.navbarLight', 'background.navbarDark')} fontSize={14} color="black">
                {Links.map((link) => 
                    // <NavLink key={link}>
                    //     <MenuItem onClick={() => console.log(link)}>{link}</MenuItem>
                    // </NavLink>)
                    <MenuItem>
                      <NavLink key={link}>{link}</NavLink>
                    </MenuItem>)
                }
            </MenuList>
        </Menu>
          <Name />
          <Flex alignItems={'center'}>
              <HStack spacing={1} alignItems={'center'} as={'nav'} display={{lg: 'none'}} fontSize={14}>
                <Button bg={useColorModeValue('background.navbarLight', 'background.navbarDark')} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon color='black'/> : <SunIcon color='black'/>}
                </Button>
              </HStack>
          </Flex>
        </Flex>
      </Box>
    </div >
  );
}