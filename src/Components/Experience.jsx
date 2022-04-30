import React from 'react'
import { Box, Text, Heading, useColorModeValue, Stack, UnorderedList, ListItem, VStack, HStack, Button, useColorMode, Center } from '@chakra-ui/react';
import './Experience.css';

const jobExperience = [
    {
        title: 'Junior Software Developer',
        companyName: 'Voxi',
        dateAndLocation: `January 2021 - May 2021 \u2022 Fishers, Indiana`,
        description: [
            // 'Architected a React Native app using Typescript, GraphQL, AWS AppSync, DynamoDB, Git based CodeCommit for source control, and several other AWS services',
            // 'Collaborated with a UI/UX designer to design and implement features',
            // 'Implemented User Authentication and Authorization using AWS Amplify and Cognito',
            'Utilized redux global state management and GraphQL to allow partners to dynamically change the theme of their app',
            'Optimized performance and usability by asynchronously fetching APIs, avoiding costly functions, and minimizing the amount of renders needed',
            'Created reusable components for increased efficiency',
            'Participated in biweekly code reviews with the CTO'
        ],
        key: 'test1'
    },
    {
        title: 'Junior Software Developer',
        companyName: 'Voxi',
        dateAndLocation: `September 2020 - December 2020 \u2022 Fishers, Indiana`,
        description: [
            // 'Independently spearheaded exploration of possible new features and services, reporting findings to the CTO in a clear and concise manner',
            // 'Architected a web scraping script that retrieved and uploaded product information to an S3 bucket, utilizing primarily NodeJS/Typescript and Puppeteer ',
            // 'Architected a prototype for automatic product recognition',
            'Trained machine learning models utilizing AWS Rekognition',
            'Implemented a serverless system to capture frames from video, using AWS Lambda',
            'Measured and validated model accuracy',
            'Participated in weekly standups, giving progress reports and newfound insights'
        ],
        key: 'test2'
    },
    {
        title: 'Junior Software Developer',
        companyName: 'Voxi',
        dateAndLocation: `June 2020 - September 2020 \u2022 Fishers, Indiana`,
        description: [
            // 'Supported continuous development for a fully responsive serverless web app',
            'Utilized Full Stack knowledge to QA test all facets of the web app and admin portal',
            'Improved App performance significantly by utilizing memoization and callbacks to reduce the amount of unnecessary rerenders in React',
            'Implemented improved UI/UX changes, leading to an increase in user retention',
            'Carefully tracked workflow and updated documentation using Trello and CodeCommit'
        ],
        key: 'test3'
    },
    {
        title: 'Various Customer Service',
        dateAndLocation: `2015 - 2019 \u2022 Noblesville, Indiana`,
        description: [
            'Collaborated with coworkers and helped delegate tasks to complete orders in a timely manner',
            'Excelled at maintaining customer happiness with forward-thinking strategies focused on addressing customer needs and resolving concerns'
        ],
        key: 'test4'
    },
]

export default function Experience(){
    return (
        <Stack 
            direction={['column', 'column', 'column', 'row']}
            layerStyle={'section'}
            minW={'100%'}
            py={['50px', '110px']}
            bg={useColorModeValue('background.lightPrimary', 'background.darkPrimary')} 
            id="Experience"
            justifyContent={'space-between'}
            spacing={0}
        >
            <Heading variant={'sectionHeader'}>
                Experience
            </Heading>
            <VStack spacing={[39, 39, 39]} w={'full'}>
                {/* {jobExperience.map(job => 
                <HStack key={job.key} spacing={0} w={'full'}>
                    <Center display={{base: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex'}} flexDirection={'column'} style={{height: '100%', width: '50px'}}>
                        <Box style={{height: '35%'}}><Box height={'100%'} width={'2px'} backgroundColor={brownColor}/></Box>
                        <Box style={{height: '20%', justifyContent: 'center', display: 'flex', alignItems: 'center'}}><Box width={'20px'} height={'20px'} borderRadius={'50%'} border={'1px solid'} borderColor={brownColor}/></Box>
                        <Box style={{height: '35%'}}><Box height={'100%'} width={'2px'} backgroundColor={brownColor}/></Box>
                    </Center>
                    <Card key={job.dateAndLocation} job={job}/>
                </HStack>)} */}
                {jobExperience.map(job => <Card key={job.dateAndLocation} job={job}/>)}
            </VStack>
        </Stack>
    )
};

function Card({job: {title, companyName, dateAndLocation, description}}) {
    return(
        <Box 
            className='card'
            bg={useColorModeValue('background.cardLight', 'background.cardDark')}
            // minW={['100%', '70vw', '70vw', '50vw', '35vw']} 
            // maxW={['100%', '70vw', '70vw', '50vw', '35vw']}
            minW={'full'} 
            maxW={'full'}
            px={5}
            py={5}
            borderRadius={'sm'}
            // boxShadow={['rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px']}
            boxShadow={['rgba(0, 0, 0, 0.26) 0px 0px 5px']}
            overflow='hidden' 
            _hover={{boxShadow: ['rgba(0, 0, 0, 0.36) 0px 0px 10px']}}
        >
            <Text id={'job-title'} textColor={useColorModeValue('text.jobTitle.light', 'text.jobTitle.dark')}>{title}</Text>
            <Text id={'company-name'} textColor={useColorModeValue('text.companyName.light', 'text.companyName.dark')}>{companyName ? companyName : null}</Text>
            <Text id={'job-location'} textColor={useColorModeValue('text.jobLocation.light', 'text.jobLocation.Dark')}>{dateAndLocation}</Text>
            <UnorderedList pl={10} fontSize={'.65rem'}>
                {description.map((sentence, index) => <ListItem py={'2px'} key={index}>{sentence}</ListItem>)}
            </UnorderedList>
        </Box>
    )
}
