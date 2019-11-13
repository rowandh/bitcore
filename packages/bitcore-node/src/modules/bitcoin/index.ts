import { BitcoinP2PWorker } from './p2p';
import { BaseModule } from "..";
import { BTCStateProvider } from "../../providers/chain-state/btc/btc";

export default class BitcoinModule extends BaseModule {
  constructor(services: BaseModule["bitcoreServices"]) {
    super(services);
    services.Libs.register('stratis', 'bitcore-lib', 'bitcore-p2p');
    services.P2P.register('stratis', BitcoinP2PWorker);
    services.CSP.registerService('stratis', new BTCStateProvider());
  }
}
