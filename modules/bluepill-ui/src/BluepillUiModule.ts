import { NativeModule, requireNativeModule } from 'expo';

import { BluepillUiModuleEvents } from './BluepillUi.types';

declare class BluepillUiModule extends NativeModule<BluepillUiModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<BluepillUiModule>('BluepillUi');
