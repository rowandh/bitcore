import { BitcoinP2PWorker } from './p2p';
import { BaseModule } from "..";
import { BTCStateProvider } from "../../providers/chain-state/btc/btc";

export default class BitcoinModule extends BaseModule {
  constructor(services: BaseModule["bitcoreServices"]) {
    super(services);
    services.Libs.register('STRATIS', 'bitcore-lib', 'bitcore-p2p');
    services.P2P.register('STRATIS', BitcoinP2PWorker);
    services.CSP.registerService('STRATIS', new BTCStateProvider());
  }
}
