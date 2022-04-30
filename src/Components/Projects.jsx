import {useEffect, useMemo, useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {
  useColorModeValue,
  Box,
  Button,
  Link,
  ButtonGroup,
  Heading,
  HStack,
  VStack,
  Stack,
  Image,
  Text
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BsLink } from 'react-icons/bs'
import placeholder from '../assets/placeholder.jpg';

const projectsArray = [
    {
        name: 'This website',
        description: 'I built this mobile responsive website utilzing mainly React, ChakraUI, and React framer motion',
        author: 'Justin Terry',
        githubLink: 'https://github.com/Koduxxx/web-portfolio',
        imageURL: placeholder,
        language: 'JavaScript',
    },
    {
        name: 'Voxi Two Chicks App',
        description: 'A React Native application that I built for the popular TV show "Good bones", during my time at Voxi. While I cannot share the code, feel free to ask me about it!',
        author: 'Justin Terry',
        link: 'https://play.google.com/store/apps/details?id=app.getvoxi.twochicksandahammer&hl=en_US&gl=US',
        imageURL: placeholder,
        language: 'JavaScript',
    },
     {
        name: 'Cool Space Website',
        description: 'Personal workout tracker based on user input',
        author: 'Justin Terry',
        githubLink: 'http://www.google.com',
        imageURL: placeholder,
        language: 'Python',
    },
    {
        name: 'App 4',
        description: 'Personal workout tracker based on user input this is some filler text to look at wrapping',
        author: 'Justin Terry',
        githubLink: 'http://www.google.com',
        imageURL: placeholder,
        language: 'Python'
    },
]

const ProjectCard = ({project: {name, description, author, githubLink, imageURL, link, language}}) => {
    const fadeOutIn = {
        hidden: {
            x: 0,
            opacity: 0,
            },
        visible: {
            x: 0,
            opacity: 1,
            scale: [0, 1],
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 20,
                stiffness: 100,
                scale: 0
            },
        },
        exit: {
            x: 0,
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.4
            }
        },
  };

    const projectNameColor = useColorModeValue('text.projects.name.light', 'text.projects.name.dark');
    const authorNameColor = useColorModeValue('text.projects.author.light', 'text.projects.author.dark');

    return(
        <Box as={motion.div} variants={fadeOutIn} initial={'hidden'} animate={'visible'} exit={'exit'} key={name} pb={25}>     
            <HStack justifyContent={'space-between'} spacing={'14px'}>
                <VStack alignItems={'flex-start'} maxW={'70%'} spacing={0}>
                    <Text textAlign={'left'} _hover={{color: '#795548', transition: '.6s ease'}} fontSize={'1.1rem'} fontWeight={700} fontFamily={'Montserrat'} color={projectNameColor} mb={0}>{name}</Text>
                    <Text fontSize={'.7rem'} pb={2}>{description}</Text>
                    <Text fontSize={'.9rem'} color={authorNameColor} pb={2}>{author}</Text>
                    {githubLink ? 
                        <Link href={githubLink} isExternal style={{textDecoration: 'none'}}>
                            <Button variant={'linkButton'} size={'xs'} leftIcon={<FaGithub />}>Code</Button>
                        </Link> : 
                        link ? 
                        <Link href={link} isExternal style={{textDecoration: 'none'}}>
                            <Button variant={'linkButton'} size={'xs'} leftIcon={<BsLink />}>Link</Button>
                        </Link> 
                        : null
                    }
                </VStack>
                <Image src={imageURL} h={['41px', '78px', '78px']} w={['80px', '150px', '150px']} minW={['80px', '150px', '150px']} alignSelf={'flex-start'}/>
            </HStack>
        </Box>
    )
}

export default function Projects(){
    const [ projectFilter, setProjectFilter ] = useState('All');
    const [ filteredProjectArray, setFilteredProjectArray ] = useState([]);
    const backgroundColor = useColorModeValue('background.lightSecondary', 'background.darkSecondary');
    const javaScriptProjects = useMemo(() => projectsArray.filter(project => project.language === 'JavaScript'));
    const pythonProjects = useMemo(() => projectsArray.filter(project => project.language === 'Python'));

    useEffect(() => {
        if(projectFilter === 'JavaScript') {
            setFilteredProjectArray(javaScriptProjects);
        } else if (projectFilter === 'Python') {
            setFilteredProjectArray(pythonProjects);
        } else {
            setFilteredProjectArray(projectsArray);
        }
    },[projectFilter])

    return (
        <Stack
            maxW={"100vw"}
            // minW={"100%"}
            justifyContent={'space-between'}
            // spacing={[0, '300px']}
            direction={['column', 'column', 'column', 'row']}
            spacing={0}
            // minH={"20vh"}
            layerStyle={'section'}
            py={['50px', '110px']}
            bg={backgroundColor}
            id="Projects"
        >
            <Heading variant={'sectionHeader'}>Projects</Heading>
            <Box width={['100%']}>
                <ButtonGroup size={'sm'} isAttached marginBottom={25}>
                    <Button variant={projectFilter === 'All' ? 'projectButtonSelected' : 'projectButton'} onClick={() => setProjectFilter('All')}>All</Button>
                    <Button variant={projectFilter === 'JavaScript' ? 'projectButtonSelected' : 'projectButton'} onClick={() => setProjectFilter('JavaScript')}>JavaScript</Button>
                    <Button variant={projectFilter === 'Python' ? 'projectButtonSelected' : 'projectButton'} onClick={() => setProjectFilter('Python')}>Python</Button>
                </ButtonGroup>
                 <AnimatePresence exitBeforeEnter>
                    <Box minW={'100%'} key={projectFilter}>
                        {filteredProjectArray.map((project, index) => <ProjectCard project={project} key={`project ${index}`}/>)}
                    </Box>  
                </AnimatePresence>
            </Box>
        </Stack>
    )
};

