import React from 'react'
import {
  Stack,
  VStack,
  useColorModeValue,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { IoIosMail, IoLogoJavascript } from "react-icons/io";
import { FaPython, FaAws } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

const SpecificSkill = ({iconName = IoIosMail, skillName = 'skill name placeholder', skillSpecifics = 'skill specifics placeholder'}) => {
    return(
        <VStack 
            minW={'33.3%'} 
            // minW={'25%'}
            // maxW={'25%'}
            pb={[4, 5, 6]} 
            spacing={0} 
            mt={['8px', 0]}
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
        <VStack spacing={'8px'} textAlign={'center'} px={['20px', '40px', '115px', '10%', '16%']} py={['60px', '60px', '110px']} bg={backgroundColorValue}>
            <Heading variant={'sectionHeader'} pb={'30px'}>
                Skills
            </Heading>
            <Stack spacing={'0px'} direction={['column', 'row', 'row']} w={'100%'}>
                <SpecificSkill w={'30%'} iconName={IoLogoJavascript} skillName='Javascript'/>
                <SpecificSkill w={'30%'} iconName={FaPython} skillName='Python'/>
                <SpecificSkill w={'30%'} iconName={FaAws} skillName='AWS'/>
            </Stack>
            <Stack spacing={'0px'} direction={['column', 'row', 'row']} w={'100%'}>
                <SpecificSkill iconName={SiChakraui} skillName='UI Frameworks' skillSpecifics='Chakra UI, Material UI'/>
                <SpecificSkill skillName='Very'/>
                <SpecificSkill skillName='Cool'/>
            </Stack>
        </VStack>
    )
};

export default Skills;