import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { themes } from './tamagui.themes'


export const bluepillConfig = createTamagui({
  ...defaultConfig,

  themes: {
    ...defaultConfig.themes,
    ...themes,
  },

  fonts: {
    ...defaultConfig.fonts,
    heading: {
      family: 'MontserratBold',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 48,
        11: 56,
        12: 64,
      },
      weight: {
        1: '700',
        2: '700',
        3: '700',
        4: '700',
        5: '700',
        6: '700',
        7: '700',
        8: '700',
        9: '700',
        10: '700',
        11: '700',
        12: '700',
      },
    },
    body: {
      family: 'Montserrat',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 48,
        11: 56,
        12: 64,
      },
      weight: {
        1: '400',
        2: '400',
        3: '400',
        4: '400',
        5: '400',
        6: '400',
        7: '400',
        8: '400',
        9: '400',
        10: '400',
        11: '400',
        12: '400',
      },
    },
    mono: {
      family: 'SpaceMono',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 48,
        11: 56,
        12: 64,
      },
      weight: {
        1: '400',
        2: '400',
        3: '400',
        4: '400',
        5: '400',
        6: '400',
        7: '400',
        8: '400',
        9: '400',
        10: '400',
        11: '400',
        12: '400',
      },
    },
  },
})

// export default config
export type BluepillConfig = typeof bluepillConfig
export default BluepillConfig

// export type Conf = typeof config

// declare module 'tamagui' {
//   interface TamaguiCustomConfig extends Conf { }
// }
