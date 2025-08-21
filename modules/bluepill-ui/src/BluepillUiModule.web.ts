import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './BluepillUi.types';

type BluepillUiModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class BluepillUiModule extends NativeModule<BluepillUiModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(BluepillUiModule, 'BluepillUiModule');
