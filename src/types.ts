export interface ZergpoolApiWalletResponse {
  currency: string // example: "BTC"
  unsold: number // example: 0.00050362     --currently in exchange or immature statuses
  balance: number // example: 0.00000000    --matured ready for payment balance
  unpaid: number // example: 0.00050362     --total unpaid unsold+balance
  paid24h: number // example: 0.00000000    --total amount payed
  paidtotal: number // example: 0.00000000
  minpay: number // example: 0.0025         --payout threshold, can be configured using pl=
  minpay_sunday: number // example: 0.0025  --payout threshold on Sundays
  total: number // example: 0.00050362      --total unpaid + total payed
}

//miners information
export interface ZergpoolApiWalletExMiner {
  version: string // example: "ccminer\/1.8.2"  --miners name
  password: string // example: "d=96"           --password configuration of your miner identified by a pool
  ID: string // example: "d=96"                 --value specified in ID= param of miner's password
  algo: string // example: "decred"             --mining algorithm
  difficulty: number // example: 96             --miner's current difficulty level
  subscribe: number // example: 1               --subscribe extranonce flag
  accepted: number // example: 82463372.083     --hashrate accepted by pool
  rejected: number // example: 0                --hashrate rejected by pool
}

export interface ZergpoolApiWalletExPayout {
  time: string // example: "1617480306",
  amount: number // example: 0.00221229,
  fee: number // example: 0.00001008,
  tx: string // example: "fbe6338404fa3e8b33d545883ae68be0eadf56b01b50a1c40f2746d5fe68ea3b"
}

export interface ZergpoolApiWalletExBlock {
  symbol: string // example: "TZC",
  height: number // example: 1793180,
  amount: number // example: 50,
  algo: string // example: "neoscrypt",
  confirmations: number // example: 207,
  time: string // example: "1617595953",
  category: string // example: "generate",
  blockhash: string // example: "e3235d2451ea7680107b7b25f53e03a854b54d31be3ccf26cf3e0162aea269e3"
}

export interface ZergpoolApiWalletExResponse {
  currency: string // example: "BTC"
  unsold: number // example: 0.00050362     --currently in exchange or immature statuses
  balance: number // example: 0.00000000    --matured ready for payment balance
  unpaid: number // example: 0.00050362     --total unpaid unsold+balance
  paid24h: number // example: 0.00000000    --total amount payed
  paidtotal: number // example: 0.00000000
  minpay: number // example: 0.0025         --payout threshold, can be configured using pl=
  minpay_sunday: number // example: 0.0025  --payout threshold on Sundays
  total: number // example: 0.00050362      --total unpaid + total payed
  miners: ZergpoolApiWalletExMiner[]
  payouts: ZergpoolApiWalletExPayout[]
  blocks: ZergpoolApiWalletExBlock[]
}

export interface ZergpoolApiStatusAlgorithm {
  name: string // example: "allium"                           --algorithm name
  port: number // example: 6433                               --TCP connection port
  coins: number // example: 1                                 --amount of coins available in subject algo
  fees: number // example: 0.5                                --pool fee in %
  hashrate: number // example: 138059334                      --total hashrate in h/s on subject pool algo
  hashrate_shared: number // example: 138059334               --shared mode hashrate in h/s on subject pool algo
  hashrate_solo: number // example: 0                         --solo mode hashrate in h/s on subject pool algo
  workers: number // example: 80                              --amount of workers mining in total
  workers_shared: number // example: 80                       --amount of workers mining in shared mode
  workers_solo: number // example: 0                          --amount of workers mining in solo mode
  estimate_current: string // example: "0.00000346"           --estimate based on last 5 minutes submmited shares per hashrate unit(see mbtc_mh_factor)
  estimate_last24h: string // example: "0.00000341"           --estimate based on last 24h submmited shares per hashrate unit(see mbtc_mh_factor)
  actual_last24h: string // example: "0.00358"                --actual earning based on last 24h found blocks per hashrate unit(see mbtc_mh_factor)
  actual_last24h_shared: string // example: "0.00355"         --actual earning in shared mode based on last 24h found coin blocks per hashrate unit(see mbtc_mh_factor)
  actual_last24h_solo: number | string // example: "0.00636"  --actual earning in solo mode based on last 24h found coin blocks per hashrate unit(see mbtc_mh_factor)
  mbtc_mh_factor: number // example: 1                        --multiplier, value 1 represents Mh/S, 1000 represents GH/S, 1000000 represents TH/S, 0.001 represents KH/s
  hashrate_last24h: number // example: 115385162              --average hashrate during last 24h
  hashrate_last24h_shared: number // example: 114287097       --average hashrate during last 24h in shared mode
  hashrate_last24h_solo: number // example: 1098065           --average hashrate during last 24h in solo mode
}

export interface ZergpoolApiStatusResponse {
  [algo: string]: ZergpoolApiStatusAlgorithm
}

export interface ZergpoolApiCurrency {
  algo: string // example: "lyra2v2"
  port: number // example: 4533
  name: string // example: "Absolute"                 --coin name
  height: number // example: 924762                   --current blockchain height
  difficulty: string // example: "1320.36013"
  workers: number // example: 14                      --amount of workers mining in total
  workers_shared: number // example: 13               --amount of workers mining in shared mode
  workers_solo: number // example: 1                  --amount of workers mining in solo mode
  shares: number // example: 0
  hashrate: number // example: 11878047021            --current total hashrate for this coin
  hashrate_shared: number // example: 5053286721      --current shared hashrate for this coin
  hashrate_solo: number // example: 6824760300        --current solo hashrate for this coin
  network_hashrate: number | string // example: 49744768222
  reward: number // example: 1.5
  estimate: string // example: "0.00156584"
  estimate_current: string // example: "0.00000157"   --estimated current earnings based on coin price per hashrate unit(see mbtc_mh_factor)
  estimate_last24: string // example: "0.00000194"    --estimate earnings mining subject coin based on last 24h price data per hashrate unit(see mbtc_mh_factor)
  actual_last24h: string | number // example: "0.00210"        --actual earning based on last 24h found coin blocks per hashrate unit(see mbtc_mh_factor)
  actual_last24h_shared: string | number // example: "0.00222" --actual earning in shared mode based on last 24h found coin blocks per hashrate unit(see mbtc_mh_factor)
  actual_last24h_solo: string | number // example: "0.00202"   --actual earning in solo mode based on last 24h found coin blocks per hashrate unit(see mbtc_mh_factor)
  mbtc_mh_factor: number // example: 1000             --multiplier, value 1 represents Mh/S, 1000 represents GH/S, 1000000 represents TH/S, 0.001 represents KH/s
  "24h_blocks": number // example: 134                --amount of blocks found during last 24h in all modes
  "24h_blocks_shared": number // example: 51          --amount of blocks found during last 24h in shared mode
  "24h_blocks_solo": number // example: 83            --amount of blocks found during last 24h in solo mode
  "24h_btc": string // example: "0.000019"            --amount of BTC equivalent of 24h found blocks in all modes
  "24h_btc_shared": string // example: "0.000007"     --amount of BTC equivalent of 24h found blocks in shared mode
  "24h_btc_solo": string // example: "0.000011"       --amount of BTC equivalent of 24h found blocks in solo mode
  lastblock: string // example: "924753"              --last block found height
  timesincelast: number // example: 638               --time since last block found in sec
  timesincelast_shared: number // example: 3946       --time since last block found in shared mode in sec
  timesincelast_solo: number // example: 638          --time since last block found in solo mode in sec
  noautotrade: number // example: 0                   --value 1 - coin is not supported for auto exchange mining, value 0 - coin is supported for auto exchange mining
  pool_ttf: number // example: 11
  real_ttf: number // example: 477
  minpay: number // example: 739.64497                --coin amount for payment threshold
  minpay_sunday: number // example: 147.92899         --lowered coin amount for payment threshold on Sundays
  symbol: string // example: "ABS"
}

export interface ZergpoolApiCurrenciesResponse {
  [currency: string]: ZergpoolApiCurrency
}

export interface ZergpoolApiBlock {
  symbol: string // example: "XDN"
  time: string // example: "1618048487"                         --unix timestamp
  height: string // example: "355848"
  amount: null | string //example: "5"
  category: ['new', 'immmature', 'confirmed'] // example: "new" --new/immmature/confirmed
  difficulty: string // example: "25406.253571"                 --difficulty at pool with applied multipliers
  difficulty_user: string // example: "26507.381661"            --difficulty by user's miner
  algo: string // example: "bmw512"
  type: string // example: "shared"                             --type of reward distribution shared o
  finder: string // example: "bc1qgwf6t..."
}

export type ZergpoolApiBlocksResponse = ZergpoolApiCurrency[]

export interface ZergpoolApiMiner {
  algo: string // example: "neoscrypt"
  version: string // example: "NiceHash\/1.0.0"
  count: string // example: "4762"
}

export interface ZergpoolApiMinersResponse {
  [currency: string]: ZergpoolApiMiner
}

