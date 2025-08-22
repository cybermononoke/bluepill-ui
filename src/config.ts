import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { themes } from './config/tamagui.themes'

export const avoConfig = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    ...themes,
  },
  name: 'avo-ui', 
})

export type AvoConfig = typeof avoConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AvoConfig {}
}
