import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Button: {
            baseStyle: {
                background: 'red',
            }
        }
    },
    initialColorMode: 'light',
    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
    colors: {
        background: {
            navbarLight: '#808080',
            lightPrimary: '#EAF2FA',
            lightSecondary: '#FFFFFF',
            darkPrimary: '#272935',
            darkSecondary: '#23252F',
        },
        textAndIcons: {
            brown: '#795548'
        }
    },
    fontSize: {
        sm: 100,
        md: 200,
        lg: 300,
        xl: 400,
    }
});

export default theme;