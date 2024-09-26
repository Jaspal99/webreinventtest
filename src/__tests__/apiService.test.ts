import { login } from '../service/apiService';
import {http}  from 'msw';
import { setupServer } from 'msw/node';

// Set up the MSW server to mock the login API
const server = setupServer(
    http.post('https://reqres.in/api/login', ({ request, params, cookies }) => {
    return new Response(JSON.stringify({
      // Your JSON response here
    }))
  })
);

// Setup and teardown for the mock server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('login function works correctly', async () => {
  const response = await login('test@test.com', 'password');
  expect(response.data.token).toBe('123');
});
