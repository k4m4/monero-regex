declare namespace moneroRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any XMR addresses in a string. Useful with `RegExp#test()` to check if a string is an XMR address.
		@default false
		*/
		readonly exact?: boolean;
	}
}

/**
Returns a regex for matching Monero (XMR) addresses.
@example
```
import moneroRegex = require('monero-regex')
moneroRegex().test('nodejsrocks 47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs');
//=> true
```
*/
declare function moneroRegex(options?: moneroRegex.Options): RegExp;

export = moneroRegex;
