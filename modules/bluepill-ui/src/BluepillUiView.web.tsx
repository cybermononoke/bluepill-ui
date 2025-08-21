import * as React from 'react';

import { BluepillUiViewProps } from './BluepillUi.types';

export default function BluepillUiView(props: BluepillUiViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
