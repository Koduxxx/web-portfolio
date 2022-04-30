import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
    layerStyles: {
        section: {
            px: ['20px', '40px', '115px', '10%', '16%', '20%'],
        }
    },
    components: {
        Button: {
            baseStyle: {
                background: '#795548',
            },
            variants: {
                formSubmit: (props) => ({
                    fontFamily: `Roboto, sans-serif, ${base.fonts?.body}`,
                    borderWidth: 1,
                    padding: 3,
                    fontSize: ['.8rem'],
                    height: 0,
                    borderColor: '#795548',
                    color: '#795548',
                    _hover: {
                        backgroundColor: '#795548',
                        color: '#FFFFFF',
                    }
                }),
                projectButton: (props) => ({
                    fontSize: ['.8rem'],
                    color: '#FFFFFF',
                    backgroundColor: '#795548',
                    _hover: {
                        backgroundColor: '#986A5A',
                    }
                }),
                projectButtonSelected: (props) => ({
                    fontSize: ['.8rem'],
                    color: '#FFFFFF',
                    backgroundColor: '#583E35',
                }),
                linkButton: {
                    iconSpacing: 1,
                    padding:'6px',
                    fontSize:'.6rem',
                    borderRadius:'sm',
                    size:'xs',
                    color: '#795548',
                    border: '1px solid #795548',
                    backgroundColor: 'transparent',
                    _hover: {
                        color: '#FFFFFF', transition: '.6s ease', backgroundColor: '#795548'
                    },
                }
            }
        },
        Heading: {
            baseStyle: {
                // backgroundColor: '#33393F'
            },
            variants: {
                sectionHeader: (props) => ({
                    fontSize: ['2rem', '2.2rem', '2.5rem'],
                    fontFamily: `Montserrat, sans-serif, ${base.fonts?.body}`,
                    fontWeight: 400,
                    color: mode('#313131', '#98A6AD')(props),
                    paddingBottom: '10px',
                    // minWidth: ['140px', '180px', '200px', '240px'],
                    minWidth: ['140px', '180px', '240px', '270px', '300px', '400px'],
                }),
                listHeader: (props) => ({
                    fontSize: ['1.1rem', '1.35rem', '1.35rem', '1.35rem'],
                    fontWeight: 700,
                    color: mode('#313131', '#98A6AD')(props),
                })
            }
        },
        Text: {
            variants: {
                textTest: {
                    backgroundColor: 'red'
                }
            }
        },
        List: {
            baseStyle: {
                backgroundColor: 'red',
                fontSize: '100px'
            }
        },
    },
    initialColorMode: 'dark',
    fonts: {
        heading: `Montserrat, sans-serif, ${base.fonts.heading}`,
        body: `Roboto, sans-serif, ${base.fonts?.body}`,
    },
    colors: {
        background: {
            navbarLight: '#F7F7F7',
            navbarDark: '#F7F7F7',
            lightPrimary: '#FFFFFF',
            lightSecondary: '#EAF2FA',
            darkPrimary: '#272935',
            darkSecondary: '#23252F',
            // darkPrimary: '#23252F',
            // darkSecondary: '#1A202C',
            cardLight: '#FFFFFF',
            cardDark: '#33393F',
        },
        text: {
            jobTitle: {
                light: '#777777',
                dark: 'rgba(255, 255, 255, 0.8)',
            },
            companyName: {
                light: '#000000',
                dark: '#795548',
            },
            headings: {
                light: '#313131',
                dark: '#98A6AD',
            },
            jobPosition: {
                light: '#000000',
                dark: 'rgba(255,255,255, .54);',
            },
            jobLocation: {
                light: 'rgba(0, 0, 0, 0.8)',
                dark: 'rgba(255, 255, 255, 0.8)',
            },
            projects: {
                name: {
                    light: '#000000',
                    dark: '#FFFFFF',
                },
                author: {
                    light: 'rgba(0, 0, 0, .54);',
                    dark: 'rgba(255, 255, 255, .54);'
                },
                button: {
                    light: '#FFFFFF',
                    dark: '#FFFFFF',
                }
            }  
        },
        icons: {
            light: '#785447',
            dark: '#785447',
        },
        contactForms: {
            borderLight: 'grey.100',
            borderDark: 'white',
            backgroundLight: '#EAF2FA',
            backgroundDark: '#434659'
        }
    },
    fontSize: {
        sm: 100,
        md: 200,
        lg: 300,
        xl: 400,
    },
});

export default theme;