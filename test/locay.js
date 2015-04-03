'use strict';

import test from 'tape';
import Location from '../src/';

test('Should create a new location instance', function (t) {
  const url = 'http://www.example.com:3000/some/path?some=query#somehash';
  const expected = {
    href: url,
    host: 'www.example.com:3000',
    hash: '#somehash',
    port: '3000',
    search: '?some=query',
    protocol: 'http:',
    pathname: '/some/path',
    hostname: 'www.example.com',
    origin: 'http://www.example.com:3000'
  };

  t.same(expected, new Location(url));

  t.end();
});

test('Should throw when no protocol is supplied', function (t) {
  const url = 'example.com';

  t.throws(function () {
    new Location(url);
  });

  t.end();
});
