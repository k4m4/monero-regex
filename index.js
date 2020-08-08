'use strict';
const re = '4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}';

module.exports = options => {
	options = options || {};
	return options.exact ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g');
};
