import http from 'k6/http';
import { sleep } from 'k6';

// k6 run -e MY_HOSTNAME=test.k6.io 8-env.js

export default function () {
  const res = http.get(`https://${__ENV.MY_HOSTNAME}`);
  sleep(1);
}
