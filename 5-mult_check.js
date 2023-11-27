import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'is status 200': (r) => r.status === 200,
    'body size is 11,105 length': (r) => r.body.length == 11105,
    'log':(r) => console.log("Length body",r.body.length)
  });
}
