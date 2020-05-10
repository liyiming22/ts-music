/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Options } from 'http-proxy-middleware/dist/types';

export interface ProxyTable {
  [path: string]: Options;
}
