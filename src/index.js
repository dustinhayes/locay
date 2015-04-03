'use strict';

import url from 'url';
import assign from 'object-assign';
import extend from './maybe-extend';

export default class Location {
  constructor(u) {
    let ast = url.parse(u);

    if (! ast.protocol) {
      throw new Error(`${url} should contain a protocol`);
    }

    ast = extend(ast, Location.defaults);

    assign(this, {
      href: ast.href,
      host: ast.host,
      hash: ast.hash,
      port: ast.port,
      search: ast.search,
      protocol: ast.protocol,
      pathname: ast.pathname,
      hostname: ast.hostname,
      origin: `${ast.protocol}//${ast.host}`
    });
  }

  toString() {
    return this.href;
  }
}

Location.defaults = {
  hash: '',
  port: '',
  search: '',
  pathname: '/',
  protocol: 'http:',
};
