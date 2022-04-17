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
        <VStack minW={'33.3%'} pb={3} spacing={0} mt={['8px', 0]}>
            <Icon as={iconName} mb={2} fontSize={[45, 50, 60]} color={useColorModeValue('icons.light', 'icons.dark')}/>
            <Text fontSize={['1.15rem', 18, 21]} fontFamily={'Montserrat'}>{skillName}</Text>
            <Text fontSize={'0.7rem'} pt={'5px'} lineHeight={1.5}>{skillSpecifics}</Text>
        </VStack>
    )
};

const Skills = () => {
    const backgroundColorValue = useColorModeValue('background.lightSecondary', 'background.darkSecondary')
    return(
        <VStack spacing={'8px'} textAlign={'center'} px={[5, 10, 50, '10%']} py={50} bg={backgroundColorValue}>
            <Heading variant={'sectionHeader'}>
                Skills
            </Heading>
            <Stack direction={['column', 'row', 'row']} w={'100%'} justifyContent={'space-around'}>
                <SpecificSkill iconName={IoLogoJavascript} skillName='Javascript'/>
                <SpecificSkill iconName={FaPython} skillName='Python'/>
                <SpecificSkill iconName={FaAws} skillName='AWS'/>
            </Stack>
            <Stack direction={['column', 'row', 'row']} w={'100%'} justifyContent={'space-around'}>
                <SpecificSkill iconName={SiChakraui} skillName='UI Frameworks' skillSpecifics='Chakra UI, Material UI'/>
                <SpecificSkill skillName='Very'/>
                <SpecificSkill skillName='Cool'/>
            </Stack>
        </VStack>
    )
};

export default Skills;