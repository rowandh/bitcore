import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { BaseModule } from "..";
import { BTCStateProvider } from "../../providers/chain-state/btc/btc";

export default class StratisModule extends BaseModule {
  constructor(services: BaseModule["bitcoreServices"]) {
    super(services);
    services.Libs.register('STRAT', 'bitcore-lib-stratis', 'bitcore-p2p-stratis');
    services.P2P.register('STRAT', BitcoinP2PWorker);
    services.CSP.registerService('STRAT', new BTCStateProvider());
  }
}
