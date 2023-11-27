import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
    vus: 1,
    duration: '10s',
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    sleep(1)
}
