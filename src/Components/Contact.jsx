import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useColorModeValue,
  Box,
  FormControl,
  Input,
  Textarea,
  Button,
  Stack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  HStack,
} from "@chakra-ui/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgjeqdq");
  const [textValue, setTextValue] = useState("");
  const [successAlert, setSuccessAlert] = useState(false);
  const backgroundColorValue = useColorModeValue(
    "background.lightPrimary",
    "background.darkPrimary"
  );
  const borderColorValue = useColorModeValue(
    "contactForms.borderLight",
    "contactForms.borderDark"
  );
  const inputBackgroundColorValue = useColorModeValue(
    "contactForms.backgroundLight",
    "contactForms.backgroundDark"
  );

  const slideSideways = {
    hidden: {
      x: "0",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: .3,
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: {
      // x: "-80vw",
      // opacity: 0,
      x: '80vw',
      transition: {
        // type: "spring",
        // damping: 30,
        // stiffness: 100,
        duration: .3,
      },
    },
  };

  useEffect(() => {
    if (state.succeeded === true) {
      setTextValue("");
      setSuccessAlert(true);
      async function timedAlert() {
        await setTimeout(() => {
          setSuccessAlert(false);
        }, 3000);
      }
      timedAlert();
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (successAlert === true) {
      setTimeout(() => {
        setSuccessAlert(false);
      }, 3000);
    }
  }, [successAlert]);

  useEffect(() => {
    if (state.errors === true) {
      console.log(state.errors);
    }
  }, [state.errors]);

  return (
    <Box
      bg={backgroundColorValue}
      id="Contact"
      px={[5, 10, 20, 20, 250]}
      py={["10%"]}
      as={motion.div}
    >
      <Stack direction={["column", "column", "row", "row"]} justifyContent={'space-between'}>
        <Heading variant={'sectionHeader'}>Contact</Heading>
        <form onSubmit={handleSubmit} style={{minWidth: '50vw'}}>
          <FormControl>
            <Input
              id="email"
              isRequired
              placeholder="Email"
              type="email"
              name="email"
              borderColor={borderColorValue}
              backgroundColor={inputBackgroundColorValue}
              borderRadius={'sm'}
              mb={5}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Textarea
              id="message"
              placeholder="Message"
              name="message"
              value={textValue}
              onChange={(e) => {
                setTextValue(e.target.value);
              }}
              borderColor={borderColorValue}
              backgroundColor={inputBackgroundColorValue}
              borderRadius={'sm'}
              minH={150}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </FormControl>
          <HStack mt={5}>
            <Button
              variant={"formSubmit"}
              type="submit"
              isLoading={state.submitting}
              loadingText={"Submitting"}
              spinnerPlacement={"end"}
              disabled={state.submitting}
              backgroundColor={backgroundColorValue}
              id={"form-button"}
              as={motion.button}
              whileTap={{ scale: 0.9 }}
            >
              Send
            </Button>
            {/* {successAlert && <AlertComponent />} */}
            
              <AnimatePresence>
                {successAlert && <Alert
                  variants={slideSideways}
                  status="success"
                  as={motion.div}
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"exit"}
                  variant="solid"
                  key={'sjdofijsadoifjasoidfj'}
                  justifyContent={"center"}
                  width={"200px"}
                  alignSelf={"center"}
                  height={"20px"}
                  borderRadius={"md"}
                >
                  <AlertIcon boxSize="16px" mr={2} />
                  <AlertTitle fontSize="md">Message sent!</AlertTitle>
                </Alert>}
              </AnimatePresence>
          </HStack>
        </form>
      </Stack>
      {/* <Button onClick={() => setSuccessAlert(true)}>set true</Button>
      <Button onClick={() => setSuccessAlert(false)}>set false</Button> */}
    </Box>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
