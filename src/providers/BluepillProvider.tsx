import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { TamaguiProvider } from 'tamagui'
import { bluepillConfig } from '../config'

// Bundle fonts with the module
const fontMap = {
  Montserrat: require('../components/assets/fonts/Montserrat-Regular.ttf'),
  MontserratBold: require('../components/assets/fonts/Montserrat-Bold.ttf'),
}

interface BluepillProviderProps {
  children: React.ReactNode
  skipFontLoading?: boolean
  loadingComponent?: React.ReactNode
}

export const BluepillProvider = ({ 
  children, 
  skipFontLoading = false,
  loadingComponent 
}: BluepillProviderProps) => {  // ← Move the type annotation here
  const [ready, setReady] = useState(skipFontLoading)

  useEffect(() => {
    if (skipFontLoading) return

    let mounted = true
    
    const loadFonts = async () => {
      try {
        await Font.loadAsync(fontMap)
      } catch (err) {
        console.warn('BluepillUI: Font loading failed', err)
      } finally {
        if (mounted) setReady(true)
      }
    }

    loadFonts()
    
    return () => { mounted = false }
  }, [skipFontLoading])

  if (!ready) {
    return loadingComponent || (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <TamaguiProvider config={bluepillConfig} defaultTheme="light">
      {children}
    </TamaguiProvider>
  )
}

export default BluepillProvider