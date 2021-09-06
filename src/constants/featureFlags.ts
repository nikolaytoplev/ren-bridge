import queryString from "query-string";

import { env } from "./environmentVariables";

export const featureFlags = {
  enableBSCMetamask:
    env.BSC_MM_ENABLED ||
    queryString.parse(window.location.search).bscMetamaskEnabled,
  enableMEWConnect:
    env.MEWCONNECT_ENABLED ||
    queryString.parse(window.location.search).MEWConnectEnabled,
  enableWalletConnect:
    env.WALLETCONNECT_ENABLED ||
    queryString.parse(window.location.search).walletConnectEnabled,
  enableTxHistoryExploration:
    env.TX_HISTORY_EXPLORATION ||
    queryString.parse(window.location.search).txHistoryExploration,
};