import http from 'k6/http';

export const options = {
    vus: 100,
    duration: '10s',
}

export default function () {
    const url = 'http://test.k6.io/login';

    const payload = JSON.stringify({
        email: 'aaa',
        password: 'bbb',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': 'Bearer ${token}'
        },
    };

    http.post(url, payload, params);
}
