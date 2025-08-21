// Reexport the native module. On web, it will be resolved to BluepillUiModule.web.ts
// and on native platforms to BluepillUiModule.ts
export { default } from './src/BluepillUiModule';
export { default as BluepillUiView } from './src/BluepillUiView';
export * from  './src/BluepillUi.types';
