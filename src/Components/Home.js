import React from 'react';
import {
    Stack,
    VStack,
    Image,
    Center,
    useColorModeValue,
    Icon,
    Link
  } from '@chakra-ui/react';
  import { FaLinkedin, FaGithub  } from 'react-icons/fa';
  import {  IoIosMail } from 'react-icons/io';

export default function Home() {
    return(
        <Center bg={useColorModeValue('background.lightPrimary', 'background.darkPrimary')} id="Home">
            <Stack direction={['column', 'column', 'row']}>
                <VStack>
                    <Center style={{height: 350, width: '30vw', backgroundColor: 'green'}}>
                        <Image
                            borderRadius={"full"}
                            src="https://bit.ly/dan-abramov"
                            objectFit={"cover"}
                            boxSize={"350px"}
                            alt="Image of me"
                        />
                    </Center>
                    <Center>
                        Justin Terry
                    </Center>
                    <Center>
                        Software Engineer
                    </Center>
                    <Center>
                        <Link href="https://www.linkedin.com/in/justin-terry-743939194/" isExternal>
                            <Icon as={FaLinkedin} w={8} h={8} color={"brown"}/>
                        </Link>
                        <Link href="https://github.com/Koduxxx" isExternal>
                            <Icon as={FaGithub} w={8} h={8} color={"brown"}/>
                        </Link>
                        <Link href="mailto:justinterry796@gmail.com" isExternal>
                            <Icon as={IoIosMail} w={8} h={8} color={"brown"}/>
                        </Link>
                    </Center>
                    <div style={{height: 300, width: '50vw', backgroundColor: 'purple'}}>div 2</div>
                </VStack>
                <VStack>
                    <div style={{height: 300, width: '50vw', backgroundColor: 'orange'}}>div 3</div>
                    <div style={{height: 300, width: '50vw', backgroundColor: 'red'}}>
                        <Stack direction={["column", "column", "row"]}>
                            <div>
                                Interests
                            </div>
                            <div>
                                Education
                            </div>
                        </Stack>
                    </div>
                </VStack>
            </Stack>
        </Center>
    )
}