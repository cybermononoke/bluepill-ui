import { requireNativeView } from 'expo';
import * as React from 'react';

import { BluepillUiViewProps } from './BluepillUi.types';

const NativeView: React.ComponentType<BluepillUiViewProps> =
  requireNativeView('BluepillUi');

export default function BluepillUiView(props: BluepillUiViewProps) {
  return <NativeView {...props} />;
}
