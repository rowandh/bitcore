const BitcoreLib = require('bitcore-lib');
import { AbstractBitcoreLibDeriver } from '../btc';

export class StratDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLib;
}
