// Imports internal constants defined within the native layer,
// and exports user-facing constants for server states.

import ReactNativeStaticServer from './ReactNativeStaticServer';

const CONSTANTS = ReactNativeStaticServer.getConstants();

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
