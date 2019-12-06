import { BitcoreLibStratis } from '../../index';
import { AbstractBitcoreLibDeriver } from '../btc';

export class StratDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLibStratis;
}
