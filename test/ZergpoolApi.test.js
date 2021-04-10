const {ZergpoolApi} = require("../dist");

const walletFormat = {
  currency: 'string',
  unsold: 'number',
  balance: 'number',
  unpaid: 'number',
  paid24h: 'number',
  paidtotal: 'number',
  minpay: 'number',
  minpay_sunday: 'number',
  total: 'number',
}

const walletMinerFormat = {
  version: 'string',
  password: 'string',
  ID: 'string',
  algo: 'string',
  difficulty: 'number',
  subscribe: 'number',
  accepted: 'number',
  rejected: 'number',
}

const payoutFormat = {
  time: 'string',
  amount: 'number',
  fee: 'number',
  tx: 'string',
}

const walletBlockFormat = {
  symbol: 'string',
  height: 'number',
  amount: 'number',
  algo: 'string',
  confirmations: 'number',
  time: 'string',
  category: 'string',
  blockhash: 'string'
}

const algorithmFormat = {
  name: 'string',
  port: 'number',
  coins: 'number',
  fees: 'number',
  hashrate: 'number',
  hashrate_shared: 'number',
  hashrate_solo: 'number',
  workers: 'number',
  workers_shared: 'number',
  workers_solo: 'number',
  estimate_current: 'string',
  estimate_last24h: 'string',
  actual_last24h: 'string',
  actual_last24h_shared: 'string',
  actual_last24h_solo: ['string', 'number'],
  mbtc_mh_factor: 'number',
  hashrate_last24h: 'number',
  hashrate_last24h_shared: 'number',
  hashrate_last24h_solo: 'number',
}

const currencyFormat = {
  algo: 'string',
  port: 'number',
  name: 'string',
  height: 'number',
  difficulty: 'string',
  workers: 'number',
  workers_shared: 'number',
  workers_solo: 'number',
  shares: 'number',
  hashrate: 'number',
  hashrate_shared: 'number',
  hashrate_solo: 'number',
  network_hashrate: ['string', 'number'],
  reward: 'number',
  estimate: 'string',
  estimate_current: 'string',
  estimate_last24: 'string',
  actual_last24h: ['string', 'number'],
  actual_last24h_shared: ['string', 'number'],
  actual_last24h_solo: ['string', 'number'],
  mbtc_mh_factor: 'number',
  "24h_blocks": 'number',
  "24h_blocks_shared": 'number',
  "24h_blocks_solo": 'number',
  "24h_btc": 'string',
  "24h_btc_shared": 'string',
  "24h_btc_solo": 'string',
  lastblock: 'string',
  timesincelast: 'number',
  timesincelast_shared: 'number',
  timesincelast_solo: 'number',
  noautotrade: 'number',
  pool_ttf: 'number',
  real_ttf: 'number',
  minpay: 'number',
  minpay_sunday: 'number',
  symbol: 'string',
}
const blockFormat = {
  symbol: 'string',
  time: 'string',
  height: 'string',
  amount: ['object'/*null*/, 'string'],
  category: 'string',
  difficulty: 'string',
  difficulty_user: 'string',
  algo: 'string',
  type: 'string',
  finder: 'string',
}

const minerFormat = {
  algo: 'string',
  version: 'string',
  count: 'string',
}

describe('class ZergpoolApi', () => {
  const apiCLient = new ZergpoolApi()
  test('getWallet', async () => {
    const result = await apiCLient.getWallet('338nMdAzN65n8aapcrW8Tiz3BFFJ1PPEdJ')
    for (const key in walletFormat) {
      expect(typeof result[key]).toEqual(walletFormat[key])
    }
  })

  test('getWalletEx', async () => {
    const result = await apiCLient.getWalletEx('338nMdAzN65n8aapcrW8Tiz3BFFJ1PPEdJ')
    for (const key in walletFormat) {
      expect(typeof result[key]).toEqual(walletFormat[key])
    }
    for (const key in walletMinerFormat) {
      for (const miner of result.miners) {
        expect(typeof miner[key]).toEqual(walletMinerFormat[key])
      }
    }
    for (const key in payoutFormat) {
      for (const payout of result.payouts) {
        expect(typeof payout[key]).toEqual(payoutFormat[key])
      }
    }
    for (const key in walletBlockFormat) {
      for (const block of result.blocks) {
        expect(typeof block[key]).toEqual(walletBlockFormat[key])
      }
    }
  })

  test('getStatus', async () => {
    const result = await apiCLient.getStatus()
    for (const algo in result) {
      for (const key in algorithmFormat) {
        const types = Array.isArray(algorithmFormat[key]) ? algorithmFormat[key] : [algorithmFormat[key]]
        expect(types).toContain(typeof result[algo][key])
      }
    }
  })

  test('getCurrencies', async () => {
    const result = await apiCLient.getCurrencies()
    for (const currency in result) {
      for (const key in currencyFormat) {
        const types = Array.isArray(currencyFormat[key]) ? currencyFormat[key] : [currencyFormat[key]]
        expect(types).toContain(typeof result[currency][key])
      }
    }
  })

  test('getBlocks', async () => {
    const result = await apiCLient.getBlocks()
    for (const block of result) {
      for (const key in blockFormat) {
        const types = Array.isArray(blockFormat[key]) ? blockFormat[key] : [blockFormat[key]]
        expect(types).toContain(typeof block[key])
      }
    }
  })

  test('getMiners', async () => {
    const result = await apiCLient.getMiners()
    for (const miner of result) {
      for (const key in minerFormat) {
        const types = Array.isArray(minerFormat[key]) ? minerFormat[key] : [minerFormat[key]]
        expect(types).toContain(typeof miner[key])
      }
    }
  })
})
