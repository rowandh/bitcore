import { InternalStateProvider } from "../internal/internal";

export class BTCStateProvider extends InternalStateProvider{
  constructor(chain: string = 'STRAT') {
    super(chain);
  }
}
