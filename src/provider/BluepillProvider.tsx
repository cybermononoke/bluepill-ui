// src/provider/BluepillProvider.tsx
import React, { useEffect, useState } from 'react'
import { TamaguiProvider } from 'tamagui'
import * as Font from 'expo-font'
import { View, ActivityIndicator } from 'react-native'
import { avoConfig } from '../config' // <- re-exported config index (see below)

// local require() so fonts are bundled with the package
const fontMap = {
  Montserrat: require('../assets/fonts/Montserrat.ttf'),
  MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // if used
}

export const BluepillProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        await Font.loadAsync(fontMap)
      } catch (err) {
        // swallow but log—do not crash consuming app
        // console.warn('Bluepill: font load failed', err)
      } finally {
        if (mounted) setReady(true)
      }
    })()
    return () => { mounted = false }
  }, [])

  // simple fallback UI while fonts load — consumer apps can replace this by
  // handling font-loading themselves and delaying rendering of BluepillProvider.
  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  // provide your scoped config
  return <TamaguiProvider config={avoConfig}>{children}</TamaguiProvider>
}

export default BluepillProvider
