import React from "react";
import { motion } from 'framer-motion';
import {
  Box,
  Stack,
  VStack,
  Image,
  Center,
  useColorModeValue,
  Icon,
  Link,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import './Home.css';
import { FaLinkedin, FaGithub, FaGraduationCap, FaFilePdf } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentAttachSharp } from 'react-icons/io5'
import { isMobile } from 'react-device-detect';
import ResumePDF from '../assets/JustinTerrysResume.pdf';
import selfie from "../assets/circle-portrait.png"

export default function Home() {
  const headingColor = useColorModeValue('text.headings.light', 'text.headings.dark');
  return (
    <Box py={'70px'} layerStyle={'section'} bg={useColorModeValue("background.lightPrimary", "background.darkPrimary")} id="Home">
      <Stack direction={["column", "column", "column", "row"]}>
        <VStack
          mr={[0, 0, 0, '60px']}
          spacing={'10px'}
        >
          <Center minW={[200, 270]}>
            <Image
              borderRadius={"full"}
              src={selfie}
              objectFit={"cover"}
              boxSize={["200px", '270px']}
              alt="Image of me"
            />
          </Center>
          <Heading fontSize={['1.6rem', '1.6rem', '2rem']} pt={'10px'}>Justin Terry</Heading>
          <Text color={useColorModeValue('text.jobPosition.light', 'text.jobPosition.dark')} fontSize={['.9rem', '.9rem', '1.1rem']} fontFamily={'Montserrat'}>Software Engineer</Text>
          <Link href={"https://getvoxi.com/"} fontSize={['.9rem', '.9rem', '1.1rem']} color={'#795548'} fontWeight={'300'} isExternal fontFamily={'Montserrat'}>Voxi</Link>
          <Center py={15}>
            <Link
              href="https://www.linkedin.com/in/justin-terry-743939194/"
              isExternal
            >
              <Box as={motion.div} whileHover={{scale: 1.1}} px={'2px'}>
                <Icon as={FaLinkedin} w={[8, 8, 10]} h={[8, 8, 10]} color={"#785447"} />
              </Box>
            </Link>
            <Link href="https://github.com/Koduxxx" isExternal px={'2px'}>
              <Box as={motion.div} whileHover={{scale: 1.1}}>
                <Icon as={FaGithub} w={[8, 8, 10]} h={[8, 8, 10]} color={"#785447"} />
              </Box>
            </Link>
            <Link download={isMobile} href={ResumePDF} isExternal px={'2px'}>
              <Box as={motion.div} whileHover={{scale: 1.1}}>
                <Icon as={FaFilePdf} w={[8, 8, 10]} h={[8, 8, 10]} color={"#785447"}/>
              </Box>
            </Link>
            <Link href="mailto:justinterry796@gmail.com" isExternal px={'2px'}>
              <Box as={motion.div} whileHover={{scale: 1.1}}>
                <Icon as={IoIosMail} w={[8, 8, 10]} h={[8, 8, 10]} color={"#785447"} />
              </Box>
            </Link>
          </Center>
        </VStack>
        <VStack>
          <Box>
            <Heading color={headingColor} fontSize={['2rem', '2rem', '2rem', '2.5rem']} fontWeight={'400'} mb={2}>Biography</Heading>
            <Text mb={5} className={'bio-text'} fontSize={['sm', 'md', 'lg']} fontWeight={'400'}>
              Hi, I’m Justin Terry, currently seeking employment as a Software Developer. I have a year of experience as a Junior Software Developer, and a Full Stack 
              development certificate from Eleven Fifty Academy, an accelerated learning coding bootcamp.

            </Text>
            <Text mb={5} className={'bio-text'} fontSize={['sm', 'md', 'lg']}>
              Previously, I worked at a company known as Voxi, a startup that provides custom platforms for consumers to view and purchase products, as seen on film and 
              television. My responsibilities included maintaining the websites and applications built for clients, developing React Native applications from scratch, 
              keeping up to date on development technologies, developing scripts to enhance the cataloging process, and creating reports of my findings on potentially 
              useful services, such as AWS Rekognition. 

            </Text>
            <Text mb={5} className={'bio-text'} fontSize={['sm', 'md', 'lg']}>
              My interests lie in problem solving, and continuing to broaden my development knowledge.
            </Text>
          </Box>
          <Stack direction={["column", "column", "row"]} alignSelf={'flex-start'} w={'full'}>
            <Box w={'full'}>
              <Stack direction={["column", "column", "row", "row"]}  w={'full'}>
                <Box pr={'30px'} pb={11} w={['100%', '100%', '50%']}>
                  <Heading variant={'listHeader'}>Interests</Heading>
                  <UnorderedList px={'20px'} py={2} className={'list-text'} fontSize={['sm', 'sm', 'md']}>
                    <ListItem>Software Engineering</ListItem>
                    <ListItem>Cloud computing</ListItem>
                    <ListItem>Exercising</ListItem>
                  </UnorderedList>
                </Box>
                <Box w={['100%', '100%', '50%']}>
                  <Heading variant={'listHeader'}>Education</Heading>
                  <List px={'20px'} py={2} className={'list-text'} fontSize={['sm', 'sm', 'md']}>
                    <ListItem>
                      <ListIcon as={FaGraduationCap} />
                      Fullstack Development Cert
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaGraduationCap} color={'transparent'}/>
                        Eleven Fifty Academy
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </VStack>
      </Stack>
    </Box>
  );
}
