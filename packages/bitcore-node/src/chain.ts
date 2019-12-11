module.exports = {
  BTC: {
    lib: require('bitcore-lib-stratis'),
    p2p: require('bitcore-p2p-stratis'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
}
