import React from 'react'
import { Container, Flex, Heading } from '@chakra-ui/react';

export default function Projects(){
    return (
        <Container maxW="100vw" p={0} style={{backgroundColor: 'red'}} id="Projects">
            <Flex h="100vh" py={0} style={{backgroundColor: 'teal'}}>
                <Heading style={{backgroundColor: 'orange', alignSelf: 'center'}}>
                    Projects
                </Heading>
            </Flex>
        </Container>
    )
};