
/* IMPORT */

import crypto from 'node:crypto';
import type {WebCrypto} from './types';

/* MAIN */

const WebCrypto = crypto.webcrypto as unknown as WebCrypto; //TSC

/* EXPORT */

export default WebCrypto;
