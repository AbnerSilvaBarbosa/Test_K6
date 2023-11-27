import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '10s',
  ext: {
    loadimpact: {
      // Project: apresentação_Tech
      projectID: 3671346,
      // Test runs with the same name groups test runs together.
      name: 'Test (27/11/2023-12:13:48)'
    }
  }
};

export default function() {
  http.get('http://test.k6.io');
  sleep(1);
}