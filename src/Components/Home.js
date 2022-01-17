import React from "react";
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
import { FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <div>
      <Center
        bg={useColorModeValue(
          "background.lightPrimary",
          "background.darkPrimary"
        )}
        id="Home"
        // m={8}
          p={10}
      >
        <Stack direction={["column", "column", "row"]} justifyItems={'center'} alignContent={'center'} justifyContent={'center'}>
          <VStack
          //  mx={20}
           >
            <Center minW={250}>
              <Image
              borderRadius={"full"}
              src="https://bit.ly/dan-abramov"
              objectFit={"cover"}
              boxSize={"250px"}
              alt="Image of me"
              />
            </Center>
            
            <Center>Justin Terry</Center>
            <Center>Software Engineer</Center>
            <Center>
              <Link
                href="https://www.linkedin.com/in/justin-terry-743939194/"
                isExternal
              >
                <Icon as={FaLinkedin} w={8} h={8} color={"brown"} />
              </Link>
              <Link href="https://github.com/Koduxxx" isExternal>
                <Icon as={FaGithub} w={8} h={8} color={"brown"} />
              </Link>
              <Link href="mailto:justinterry796@gmail.com" isExternal>
                <Icon as={IoIosMail} w={8} h={8} color={"brown"} />
              </Link>
            </Center>
          </VStack>
          <VStack>
            <div>
              <Heading>Biography</Heading>
              <Text>
                Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis. Pariatur in ipsum tempor esse incididunt laboris laboris anim
                tempor magna voluptate duis.
              </Text>
            </div>
            <Stack direction={["column", "column", "row"]}>
              <div
                style={{ backgroundColor: "red" }}
              >
                <Stack direction={["column", "column", "column", "row"]}>
                  <div>
                    <Heading>Interests</Heading>
                    <UnorderedList>
                      <ListItem>Software Engineering</ListItem>
                      <ListItem>Cloud computing</ListItem>
                      <ListItem>Exercising</ListItem>
                    </UnorderedList>
                  </div>
                  <div>
                    <Heading>Education</Heading>
                    <List>
                      <ListItem>
                        <ListIcon as={FaGraduationCap} />
                        Hey
                      </ListItem>
                    </List>
                  </div>
                </Stack>
              </div>
            </Stack>
          </VStack>
        </Stack>
      </Center>
    </div>
  );
}
