import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
    addressOrDenom: "0x75A7BFEd3c9de77c5C27205D6Ddf772744ca48fc",
    chainName: "arbitrum",
    collateralAddressOrDenom: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    connections: [
      { token: "ethereum|base|0x75A7BFEd3c9de77c5C27205D6Ddf772744ca48fc" }
    ],
    decimals: 18,
    name: "Arbitrum",
    standard: "EvmHypCollateral",
    symbol: "ARB"
  },
  {
    addressOrDenom: "0x75A7BFEd3c9de77c5C27205D6Ddf772744ca48fc",
    chainName: "base",
    connections: [
      { token: "ethereum|arbitrum|0x75A7BFEd3c9de77c5C27205D6Ddf772744ca48fc" }
    ],
    decimals: 18,
    name: "Arbitrum",
    standard: "EvmHypSynthetic",
    symbol: "ARB"
  }
  ],
  options: {},
};
