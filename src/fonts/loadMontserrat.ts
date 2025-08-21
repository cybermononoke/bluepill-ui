// src/fonts/loadMontserrat.ts
import { Platform } from 'react-native'
import * as Font from 'expo-font'

const montserratFonts = {
  'Montserrat-Regular': require('./Montserrat-Regular.ttf'),
  'Montserrat-Medium': require('./Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('./Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('./Montserrat-Bold.ttf'),
}

let fontsLoaded = false

export const loadMontserratFont = async (): Promise<void> => {
  if (fontsLoaded) return
  
  try {
    if (Platform.OS === 'web') {
      // For web, we'll use CSS @font-face
      injectWebFonts()
    } else {
      // For native platforms, use expo-font
      await Font.loadAsync(montserratFonts)
    }
    fontsLoaded = true
  } catch (error) {
    console.warn('Failed to load Montserrat fonts:', error)
  }
}

const injectWebFonts = () => {
  if (typeof document === 'undefined') return
  
  const existingStyle = document.getElementById('montserrat-fonts')
  if (existingStyle) return

  const style = document.createElement('style')
  style.id = 'montserrat-fonts'
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
  `
  document.head.appendChild(style)
}

export const getMontserratFontFamily = (weight: 400 | 500 | 600 | 700 = 400): string => {
  if (Platform.OS === 'web') {
    return 'Montserrat, sans-serif'
  }
  
  switch (weight) {
    case 400:
      return 'Montserrat-Regular'
    case 500:
      return 'Montserrat-Medium'
    case 600:
      return 'Montserrat-SemiBold'
    case 700:
      return 'Montserrat-Bold'
    default:
      return 'Montserrat-Regular'
  }
}