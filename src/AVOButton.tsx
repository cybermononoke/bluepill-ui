import { Button, styled } from 'tamagui'

export const AVOButton = styled(Button, {
  name: 'AVOButton',
  circular: true, 
  fontFamily: '$body',
  fontWeight: '$5',
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        bg: '$avoblue',     
        color: 'white',
        borderWidth: 1,
        borderColor: '$avoblue',
        pressStyle: {
          bg: '$avobluepress',     
          borderColor: '$avobluepress',
        },
      },

      secondary: {
        bg: '$color12',
        borderWidth: 1,
        borderColor: '$border',
        color: '$color1',
        pressStyle: {
          bg: '$color11',
          borderColor: '$color4',
        },
      },

      outline: {
        bg: 'transparent',
        borderWidth: 1,
        borderColor: '$color12',
        color: '$text',
        pressStyle: {
          bg: '$color2',
          borderColor: '$color1',
        },
      },
    },

    size: {
      small: {
        height: 36,
        px: 16,
        fontSize: '$3',
      },
      medium: {
        height: 44,
        px: 20,
        fontSize: '$4',
      },
      large: {
        height: 54,
        px: 24,
        fontSize: '$5',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})
