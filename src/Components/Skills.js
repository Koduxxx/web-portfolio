import React from 'react'
import {
  Stack,
  VStack,
  useColorModeValue,
  Icon,
  Heading,
  Text,
  Box
} from "@chakra-ui/react";
import { IoIosMail, IoLogoJavascript, IoIosMore } from "react-icons/io";
import { FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

const SpecificSkill = ({iconName = IoIosMore, skillName = 'skill name placeholder', skillSpecifics = 'skill specifics placeholder'}) => {
    return(
        <VStack 
            minW={'33.3%'} 
            // minW={'25%'}
            // maxW={'25%'}
            pb={[4, 5, 6]} 
            spacing={0} 
        >
            <Icon as={iconName} mb={2} fontSize={[45, 50, 60]} color={useColorModeValue('icons.light', 'icons.dark')}/>
            <Text fontSize={['1.15rem', '1.15rem', '1.4rem']} fontFamily={'Montserrat'}>{skillName}</Text>
            <Text fontSize={['0.7rem', '0.7rem', '.9rem']} pt={'5px'} lineHeight={1.5}>{skillSpecifics}</Text>
        </VStack>
    )
};

const Skills = () => {
    const backgroundColorValue = useColorModeValue('background.lightSecondary', 'background.darkSecondary')
    return(
        <Box layerStyle={'section'} bg={backgroundColorValue}  py={['60px', '60px', '110px']}>
            <VStack spacing={'0px'} textAlign={'center'}>
                <Heading variant={'sectionHeader'} pb={['10px', '20px', '30px']}>
                    Skills
                </Heading>
                <Stack spacing={'0px'} direction={['column', 'row', 'row']} w={'100%'} pb={['0px', '0px', '20px', '40px']}>
                    <SpecificSkill iconName={IoLogoJavascript} skillName='Javascript' skillSpecifics='React, React Native'/>
                    <SpecificSkill iconName={FaPython} skillName='Python' skillSpecifics='Tkinter'/>
                    <SpecificSkill iconName={FaAws} skillName='AWS' skillSpecifics='S3, Lambda, AppSync, Rekognition, CodeCommit, Cognito'/>
                </Stack>
                <Stack spacing={'0px'} direction={['column', 'row', 'row']} w={'100%'}>
                    <SpecificSkill iconName={SiChakraui} skillName='UI Frameworks' skillSpecifics='Chakra UI, Material UI, Native Base'/>
                    <SpecificSkill iconName={FaGitAlt} skillName='Version Control' skillSpecifics='Git'/>
                    <SpecificSkill skillName='Others' skillSpecifics='GraphQL, Agile Methodologies, HTML5, CSS3'/>
                </Stack>
            </VStack>
        </Box>
    )
};

export default Skills;