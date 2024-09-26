import { register } from '../service/apiService';
import {http}  from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.post('https://reqres.in/api/register', ({ request, params, cookies }) => {
    return new Response(JSON.stringify({
      // Your JSON response here
    }))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('register function works correctly', async () => {
  const response = await register('test@test.com', 'password');
  expect(response.data.token).toBe('123');
});
