const defaultTheme = require('tailwindcss/defaultTheme');
const alpha = { 100: 'FF', 90: 'E6', 80: 'CC', 70: 'B3', 60: '99', 50: '80', 40: '66', 30: '4D', 20: '33', 10: '1A' };

module.exports = {
    theme: {
        extend: {
            colors: {
                lightGreen: '#7cb92b',
                green: '#00B67A',
                pink: '#db256e',
                blue: '#3768af',
                navyBlue: '#131d2c'
            },
            fontSize: theme => ({
                'xs':   ['0.75rem', theme('lineHeight.normal')],  // 12px - Mobile Subheading
                'sm':   ['0.875rem', theme('lineHeight.normal')], // 14
                'base': ['1rem', theme('lineHeight.normal')],     // 16 - P1 & Link
                'md':   ['1.125rem', theme('lineHeight.normal')], // 18 - P2 & Mobile Heading
                'lg':   ['1.25rem'],  // 20
                'xl':   ['1.5rem'],   // 24
                '2xl':  ['1.875rem'], // 30 - Mobile Heading
                '3xl':  ['2.25rem'],  // 36
                '4xl':  ['3rem'],     // 48
                '5xl':  ['4rem'],     // 64px - Heading
                '6xl':  ['6rem']    // 96px - Title
            }),
            fontFamily: {
                'sans-primary': [
                    'Simples', 'arial', 'ui-sans-serif', 'system-ui'
                ],
                'serif-primary': [
                    ...defaultTheme.fontFamily.serif
                ],
            },
            boxShadow: theme => ({
                'outline': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20],
                'focus': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20]
            }),
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem'
                }
            },
            height: {
                'screen-fix': 'calc(var(--vh, 1vh) * 100);',
                'article-fix': 'calc(var(--vh, 1vh) * 60);',
                '99': '37rem',
                '1.5': '0.375rem'
            },
            inset: {
                '0': 0,
                '1/2': '50%'
            },
            transitionDuration: {
                DEFAULT: '500ms'
            },
            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
            },
            // Plugins
            typography: theme => ({
                default: {
                    css: {
                        'h1, h2, h3, h4, h5, h6': {
                            fontFamily: theme('fontFamily.sans-primary').join(', '),
                            fontWeight: theme('fontWeight.semibold'),
                            color: theme('colors.blue.800')
                        },
                        'h2': {
                            fontSize: theme('fontSize.3xl[0]')
                        },
                        'h3': {
                            fontSize: theme('fontSize.2xl[0]')
                        },
                        'h4': {
                            fontSize: theme('fontSize.xl[0]')
                        },
                        'h5': {
                            fontSize: theme('fontSize.lg[0]')
                        },
                        'h6': {
                            fontSize: theme('fontSize.md[0]')
                        },
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: theme('colors.primary.600'),
                            }
                        }
                    }
                }
            }),
            aspectRatio: {
                '1/1': [1, 1],
                '16/9': [16, 9],
                '4/3': [4, 3]
            }
        },
        screens: {
            ...defaultTheme.screens
        }
    },
    variants: {
        extend: {
            translate: ['group-hover'],
            scale: ['group-hover'],
            backgroundColor: ['active'],
        }
    },
    plugins: [
        /*require('tailwindcss/typography'),
        require('tailwindcss-aspect-ratio')(),
        require('tailwindcss-typography')({ componentPrefix: '' })*/
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
}