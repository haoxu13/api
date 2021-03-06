// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

describe('http/polyfill', () => {
  let origFetch;

  beforeEach(() => {
    origFetch = global.fetch;
    global.fetch = null;
  });

  afterEach(() => {
    global.fetch = origFetch;
  });

  it('polyfills with no exceptions (without fetch)', () => {
    expect(require('./polyfill')).toBeDefined();
  });

  it('polyfills with no exceptions (with fetch)', () => {
    global.fetch = () => true;

    expect(require('./polyfill')).toBeDefined();
  });
});
