import {RequestOptions} from 'http';
import request from "./libs/request";
import {
  ZergpoolApiBlocksResponse,
  ZergpoolApiCurrenciesResponse, ZergpoolApiMinersResponse,
  ZergpoolApiStatusResponse,
  ZergpoolApiWalletExResponse,
  ZergpoolApiWalletResponse
} from "./types";

export default class ZergpoolApi {
  constructor(public requestOptions: RequestOptions = {
    protocol: 'http:',
    host: 'api.zergpool.com',
    port: 8080
  }) {

  }

  async getWallet(address: string): Promise<ZergpoolApiWalletResponse> {
    const options = {...this.requestOptions}
    options.path = `/api/wallet?address=${address}`
    const response = await request(options)
    return JSON.parse(response)
  }

  async getWalletEx(address: string): Promise<ZergpoolApiWalletExResponse> {
    const options = {...this.requestOptions}
    options.path = `/api/walletEx?address=${address}`
    const response = await request(options)
    return JSON.parse(response)
  }

  async getStatus(): Promise<ZergpoolApiStatusResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/status'
    const response = await request(options)
    return JSON.parse(response)
  }

  async getCurrencies(): Promise<ZergpoolApiCurrenciesResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/currencies'
    const response = await request(options)
    return JSON.parse(response)
  }

  async getBlocks(coin: string = undefined): Promise<ZergpoolApiBlocksResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/blocks'
    if (coin) {
      options.path += `?coin=${coin}`
    }
    const response = await request(options)
    return JSON.parse(response)
  }

  async getMiners(): Promise<ZergpoolApiMinersResponse> {
    const options = {...this.requestOptions}
    options.path = '/api/miners'
    const response = await request(options)
    return JSON.parse(response)
  }
}
