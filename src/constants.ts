// Imports internal constants defined within the native layer,
// and exports user-facing constants for server states.

// TODO: This repeats the native module import used in index.ts
// it should be split into a separate file.
import { NativeModules } from 'react-native';

declare global {
  var __turboModuleProxy: object | undefined;
}

// This selects between TurboModule and legacy RN library implementation.
const StaticServer = global.__turboModuleProxy
  ? require('./NativeStaticServer').default
  : NativeModules.StaticServer;

const CONSTANTS = StaticServer.getConstants();

export const SIGNALS = {
  CRASHED: CONSTANTS.CRASHED,
  LAUNCHED: CONSTANTS.LAUNCHED,
  TERMINATED: CONSTANTS.TERMINATED,
};

export enum STATES {
  ACTIVE,
  CRASHED,
  INACTIVE,
  STARTING,
  STOPPING,
}
