import * as Colors from '@tamagui/colors';
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';
// Alliance Virtual Offices color palette
// Based on actual colors found in their style guidelines
const darkPalette = [
    'hsla(0, 0%, 8%, 1)', // Very dark gray - almost black
    'hsla(0, 0%, 12%, 1)', // Dark gray
    'hsla(0, 0%, 18%, 1)', // Medium dark gray
    'hsla(0, 0%, 24%, 1)', // Gray
    'hsla(0, 0%, 32%, 1)', // Medium gray
    'hsla(0, 0%, 40%, 1)', // Light gray
    'hsla(0, 0%, 48%, 1)', // Lighter gray
    'hsla(0, 0%, 56%, 1)', // Even lighter gray
    'hsla(0, 0%, 64%, 1)', // Very light gray
    'hsla(0, 0%, 72%, 1)', // Almost white gray
    'hsla(0, 0%, 88%, 1)', // Very light gray
    'hsla(0, 0%, 96%, 1)', // Almost white
];
const lightPalette = [
    'hsla(0, 0%, 98%, 1)', // Almost white
    'hsla(0, 0%, 94%, 1)', // Very light gray
    'hsla(0, 0%, 88%, 1)', // Light gray
    'hsla(0, 0%, 82%, 1)', // Medium light gray
    'hsla(0, 0%, 76%, 1)', // Medium gray
    'hsla(0, 0%, 70%, 1)', // Gray
    'hsla(0, 0%, 64%, 1)', // Medium dark gray
    'hsla(0, 0%, 58%, 1)', // Dark gray
    'hsla(0, 0%, 52%, 1)', // Darker gray
    'hsla(0, 0%, 46%, 1)', // Very dark gray
    'hsla(0, 0%, 20%, 1)', // Almost black
    'hsla(0, 0%, 8%, 1)', // Black
];
// Professional shadow system
const lightShadows = {
    shadow1: 'rgba(0,0,0,0.05)',
    shadow2: 'rgba(0,0,0,0.08)',
    shadow3: 'rgba(0,0,0,0.12)',
    shadow4: 'rgba(0,0,0,0.16)',
    shadow5: 'rgba(0,0,0,0.20)',
    shadow6: 'rgba(0,0,0,0.24)',
};
const darkShadows = {
    shadow1: 'rgba(0,0,0,0.3)',
    shadow2: 'rgba(0,0,0,0.4)',
    shadow3: 'rgba(0,0,0,0.5)',
    shadow4: 'rgba(0,0,0,0.6)',
    shadow5: 'rgba(0,0,0,0.7)',
    shadow6: 'rgba(0,0,0,0.8)',
};
// Alliance Virtual Offices brand colors (from actual style guidelines)
// Background color from their guidelines: rgba(248, 246, 245, 1)
const allianceBackground = {
    background: 'hsla(30, 20%, 97%, 1)', // Converted from rgba(248, 246, 245, 1)
};
// Text color from their guidelines: #222222
const allianceText = {
    text: 'hsla(0, 0%, 13%, 1)', // Converted from #222222
};
// Border color from their guidelines: #ccc
const allianceBorder = {
    border: 'hsla(0, 0%, 80%, 1)', // Converted from #ccc
};
const builtThemes = createThemes({
    componentThemes: defaultComponentThemes,
    base: {
        palette: {
            dark: darkPalette,
            light: lightPalette,
        },
        extra: {
            light: {
                ...Colors.green,
                ...Colors.red,
                ...Colors.yellow,
                ...lightShadows,
                shadowColor: lightShadows.shadow1,
                // Alliance Virtual Offices actual brand colors
                ...allianceBackground,
                ...allianceText,
                ...allianceBorder,
                surface: 'hsla(0, 0%, 100%, 1)', // Pure 
                avoblue: 'hsla(197, 61%, 39%, 1)',
                avobluepress: 'hsla(197, 60%, 33%, 1)',
            },
            dark: {
                ...Colors.greenDark,
                ...Colors.redDark,
                ...Colors.yellowDark,
                ...darkShadows,
                shadowColor: darkShadows.shadow1,
                background: 'hsla(0, 0%, 8%, 1)', // Dark background
                surface: 'hsla(0, 0%, 12%, 1)', // Dark surface
                text: 'hsla(0, 0%, 90%, 1)', // Light text for dark mode
                border: 'hsla(0, 0%, 20%, 1)', // Dark border for dark mode
                avoblue: 'hsla(197, 61%, 39%, 1)',
                avobluepress: 'hsla(197, 60%, 33%, 1)',
            },
        },
    },
    accent: {
        palette: {
            // Using neutral grays since actual brand colors aren't specified in text
            dark: [
                'hsla(0, 0%, 45%, 1)', // Medium gray
                'hsla(0, 0%, 50%, 1)',
                'hsla(0, 0%, 55%, 1)',
                'hsla(0, 0%, 60%, 1)',
                'hsla(0, 0%, 65%, 1)',
                'hsla(0, 0%, 70%, 1)',
                'hsla(0, 0%, 75%, 1)',
                'hsla(0, 0%, 80%, 1)',
                'hsla(0, 0%, 85%, 1)',
                'hsla(0, 0%, 90%, 1)',
                'hsla(0, 0%, 95%, 1)',
                'hsla(0, 0%, 98%, 1)',
            ],
            light: [
                'hsla(0, 0%, 55%, 1)', // Medium gray
                'hsla(0, 0%, 60%, 1)',
                'hsla(0, 0%, 65%, 1)',
                'hsla(0, 0%, 70%, 1)',
                'hsla(0, 0%, 75%, 1)',
                'hsla(0, 0%, 80%, 1)',
                'hsla(0, 0%, 85%, 1)',
                'hsla(0, 0%, 90%, 1)',
                'hsla(0, 0%, 95%, 1)',
                'hsla(0, 0%, 98%, 1)',
                'hsla(0, 0%, 99%, 1)',
                'hsla(0, 0%, 100%, 1)',
            ],
        },
    },
    childrenThemes: {
        warning: {
            palette: {
                dark: Object.values(Colors.yellowDark),
                light: Object.values(Colors.yellow),
            },
        },
        error: {
            palette: {
                dark: Object.values(Colors.redDark),
                light: Object.values(Colors.red),
            },
        },
        success: {
            palette: {
                dark: Object.values(Colors.greenDark),
                light: Object.values(Colors.green),
            },
        },
    },
});
export const themes = builtThemes;
