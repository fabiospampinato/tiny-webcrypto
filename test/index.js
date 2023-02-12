
/* IMPORT */

import {describe} from 'fava';
import WebCrypto from '../dist/node.js';

/* MAIN */

describe ( 'WebCrypto', it => {

  it ( 'works', t => {

    const uuid = WebCrypto.randomUUID ();

    t.true ( typeof uuid === 'string' );

  });

});
