import {map} from 'lodash/fp';

import data from './data.json';

const inc = a => a++;

export const fp = map(inc, data);