import {map} from 'lodash';

import data from './data.json';

const inc = a => a++;

export const simple = map(data, inc);