# monero-regex [![Build Status](https://travis-ci.org/k4m4/monero-regex.svg?branch=master)](https://travis-ci.org/k4m4/monero-regex) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Regular expression for matching Monero (XMR) addresses


## Install

```
~ ❯❯❯ npm install monero-regex
```


## Usage

```js
const moneroRegex = require('monero-regex');

moneroRegex().test('nodejsrocks 47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs');
//=> true

moneroRegex({exact: true}).test('nodejsrocks 47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs foo');
//=> false

moneroRegex({exact: true}).test('47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs');
//=> true

'nodejsrocks 47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs unicorn 42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC rainbow'.match(moneroRegex());
//=> ['47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs', '42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC']
```


## API

### moneroRegex([options])

Returns a regex for matching Monero (XMR) addresses.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any XMR address in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an XMR address.


## Related

- [ethereum-regex](https://github.com/k4m4/ethereum-regex) - Regular expression for matching Ethereum (ETH) addresses.
- [litecoin-regex](https://github.com/k4m4/litecoin-regex) - Regular expression for matching Litecoin (LTC) addresses.
- [bitcoincash-regex](https://github.com/k4m4/bitcoincash-regex) - Regular expression for matching Bitcoin Cash (BCH) addresses.
- [dash-regex](https://github.com/k4m4/dash-regex) - Regular expression for matching Dash addresses.
- [ripple-regex](https://github.com/k4m4/ripple-regex) - Regular expression for matching Ripple (XRP) addresses.
- [neo-regex](https://github.com/k4m4/neo-regex) - Regular expression for matching NEO addresses.
- [dogecoin-regex](https://github.com/k4m4/dogecoin-regex) - Regular expression for matching Dogecoin (DOGE) addresses.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)