import { Button, GetProps } from 'tamagui';
import type { ComponentType } from 'react';
type AVOButtonProps = GetProps<typeof Button> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'secondaryoutline';
    size?: 'small' | 'medium' | 'large';
};
export declare const AVOButton: ComponentType<AVOButtonProps>;
export {};
