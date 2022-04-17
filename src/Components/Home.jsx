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
import { FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentAttachSharp } from 'react-icons/io5'
import selfie from "../assets/circle-portrait.png"

export default function Home() {
  const headingColor = useColorModeValue('text.headings.light', 'text.headings.dark');
  return (
    <Box py={61} px={[5, 10, '100px', '100px', 200]} bg={useColorModeValue("background.lightPrimary", "background.darkPrimary")} id="Home">
      <Stack direction={["column", "column", "column", "row"]}>
        <VStack
          mr={[0, 0, 0, 50]}
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
            <Link href={"https://docs.google.com/document/d/1IJFtFzuObuSFldTErFEOYusoBINiY53wR6P8QDcDNJA/edit?usp=sharing"} isExternal px={'2px'}>
              <Box as={motion.div} whileHover={{scale: 1.1}}>
                <Icon as={IoDocumentAttachSharp} w={[8, 8, 10]} h={[8, 8, 10]} color={"#785447"}/>
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
            <Heading color={headingColor} fontSize={'2rem'} fontWeight={'400'} mb={2}>Biography</Heading>
            <Text mb={3} className={'bio-text'} fontSize={['sm', 'md', 'lg']} fontWeight={'400'}>
              Hi, I’m Justin Terry, currently working as a Software Engineer (Member of Technical Staff) at VMware in the SRE Automation Platform team. 
              I have a Master’s degree in CS from UT Dallas and a Bachelor of Technology degree from the Indian Institute of Technology (IIT) Guwahati.
            </Text>
            <Text mb={3} className={'bio-text'} fontSize={['sm', 'md', 'lg']}>
              Previously, I worked at Works Applications, Singapore as a Software Engineer, where I worked on delivering libraries, 
              microservices and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our 
              customers. Aside from work, I am also an open-source enthusiast and have created projects that were listed in GitHub trending.
            </Text>
            <Text mb={3} className={'bio-text'} fontSize={['sm', 'md', 'lg']}>
              My interests lie in solving problems related to large-scale distributed software systems.
            </Text>
          </Box>
          <Stack direction={["column", "column", "row"]} alignSelf={'flex-start'}>
            <Box>
              <Stack direction={["column", "column", "row", "row"]}>
                <Box pr={20} pb={11}>
                  <Heading variant={'listHeader'}>Interests</Heading>
                  <UnorderedList px={2} py={2} className={'list-text'} fontSize={['sm', 'sm', 'md']}>
                    <ListItem>Software Engineering</ListItem>
                    <ListItem>Cloud computing</ListItem>
                    <ListItem>Exercising</ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Heading variant={'listHeader'}>Education</Heading>
                  <List px={2} py={2} className={'list-text'} fontSize={['sm', 'sm', 'md']}>
                    <ListItem>
                      <ListIcon as={FaGraduationCap} />
                      Fullstack Development Cert, 2020
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
