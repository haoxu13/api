// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Struct from '../codec/Struct';
import U32 from '../primitive/U32';
import Gas from './Gas';

/**
 * @name Schedule
 * @description
 * Definition of the cost schedule and other parameterizations for wasm vm
 */
export default class Schedule extends Struct {
  constructor (value?: any) {
    super({
      version: U32,
      putCodePerByteCost: Gas,
      growMemCost: Gas,
      regularOpCost: Gas,
      returnDataPerByteCost: Gas,
      sandboxDataReadCost: Gas,
      sandboxDataWriteCost: Gas,
      maxStackHeight: U32,
      maxMemoryPages: U32
    }, value);
  }

  /**
   * @description Gas cost of a growing memory by single page.
   */
  get growMemCost (): Gas {
    return this.get('growMemCost') as Gas;
  }

  /**
   * @description What is the maximal memory pages amount is allowed to have for a contract.
   */
  get maxMemoryPages (): U32 {
    return this.get('maxMemoryPages') as U32;
  }

  /**
   * @description How tall the stack is allowed to grow?
   */
  get maxStackHeight (): U32 {
    return this.get('maxStackHeight') as U32;
  }

  /**
   * @description Cost of putting a byte of code into the storage.
   */
  get putCodePerByteCost (): Gas {
    return this.get('putCodePerByteCost') as Gas;
  }

  /**
   * @description Gas cost of a regular operation.
   */
  get regularOpCost (): Gas {
    return this.get('regularOpCost') as Gas;
  }

  /**
   * @description Gas cost per one byte returned.
   */
  get returnDataPerByteCost (): Gas {
    return this.get('returnDataPerByteCost') as Gas;
  }

  /**
   * @description Gas cost per one byte read from the sandbox memory.
   */
  get sandboxDataReadCost (): Gas {
    return this.get('sandboxDataReadCost') as Gas;
  }

  /**
   * @description Gas cost per one byte written to the sandbox memory.
   */
  get sandboxDataWriteCost (): Gas {
    return this.get('sandboxDataWriteCost') as Gas;
  }

  /**
   * @description Version of the schedule.
   */
  get version (): U32 {
    return this.get('version') as U32;
  }
}
