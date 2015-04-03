# locay

> A window.location simulator for the browser and beyond

A precise simulation of the location object found in a browser near you.

# Install

from `npm`

```
npm install --save locay
```

# Example

```javascript
import Location from 'location';

let l = new Location('http://www.example.com:3000/some/path?some=query#somehash');
/**
 * Results in:
 *
 * {
 *   href: 'http://www.example.com:3000/some/path?some=query#somehash',
 *   host: 'www.example.com:3000',
 *   hash: '#somehash',
 *   port: '3000',
 *   search: '?some=query',
 *   protocol: 'http:',
 *   pathname: '/some/path',
 *   hostname: 'www.example.com',
 *   origin: 'http://www.example.com:3000'
 * };
 */
```

# License

MIT