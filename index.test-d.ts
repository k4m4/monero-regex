import {expectType} from 'tsd';
import moneroRegex = require('.');

expectType<RegExp>(moneroRegex());
expectType<RegExp>(moneroRegex({exact: true}));