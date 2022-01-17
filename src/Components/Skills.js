import React from 'react'
import {
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
import { IoIosMail, IoLogoJavascript } from "react-icons/io";
import { FaPython, FaAws } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

const SpecificSkill = ({iconName = IoIosMail, skillName = 'skill name placeholder', skillSpecifics = 'skill specifics placeholder'}) => {
    return(
        <VStack>
            <Icon as={iconName} />
            <Heading>{skillName}</Heading>
            <Text>{skillSpecifics}</Text>
        </VStack>
    )
};

const Skills = () => {
    return(
        <VStack style={{backgroundColor: 'purple'}} >
            <Stack direction={['column', 'column', 'row']} w={'100%'} justifyContent={'space-around'} backgroundColor={'red'}>
                <SpecificSkill iconName={IoLogoJavascript} skillName='Javascript'/>
                <SpecificSkill iconName={FaPython} skillName='Python'/>
                <SpecificSkill iconName={FaAws} skillName='AWS'/>
            </Stack>
            <Stack direction={['column', 'column', 'row']}>
                <SpecificSkill iconName={SiChakraui} skillName='UI Frameworks' skillSpecifics='Chakra UI, Material UI'/>
                <SpecificSkill skillName='Very'/>
                <SpecificSkill skillName='Cool'/>
            </Stack>
        </VStack>
    )
};

export default Skills;