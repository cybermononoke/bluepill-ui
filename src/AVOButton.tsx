// src/AVOButton.tsx
import React, { useEffect, useState } from 'react'
import { Button, styled } from 'tamagui'
import { loadMontserratFont, getMontserratFontFamily } from './fonts/loadMontserrat'

const StyledButton = styled(Button, {
  name: 'AVOButton',
  circular: true,
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
          bg: 'transparent',
          borderColor: '$color1',
        },
      },

      secondaryoutline: {
        bg: 'transparent',
        borderWidth: 1,
        borderColor: '$avoblue',
        color: '$avoblue',
        pressStyle: {
          bg: 'transparent',
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

interface AVOButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'secondaryoutline'
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  fontWeight?: 400 | 500 | 600 | 700
  [key: string]: any
}

export const AVOButton: React.FC<AVOButtonProps> = ({ 
  fontWeight = 500, 
  ...props 
}) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    const initFont = async () => {
      await loadMontserratFont()
      setFontLoaded(true)
    }
    initFont()
  }, [])

  const fontFamily = fontLoaded ? getMontserratFontFamily(fontWeight) : '$body'

  return (
    <StyledButton
      {...props}
      fontFamily={fontFamily}
    />
  )
}