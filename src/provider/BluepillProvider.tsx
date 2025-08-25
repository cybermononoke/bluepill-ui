import React, { useEffect, useState } from 'react'
import { TamaguiProvider } from 'tamagui'
import * as Font from 'expo-font'
import { View, ActivityIndicator } from 'react-native'
import { config } from '../config/tamagui.config'

export function BluepillProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        // load fonts here
      })
      setReady(true)
    }
    loadFonts()
  }, [])

  if (!ready) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return <TamaguiProvider config={ config }>{children}</TamaguiProvider>
}
