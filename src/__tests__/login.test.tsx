import { http } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.post('https://reqres.in/api/login', async ({ request }) => {
    const body = await request.json() as { email: string; password: string };
    if (body.email === "eve.holt@reqres.in" && body.password === "cityslicka") {
      return new Response(JSON.stringify({ token: "QpwL5tke4Pnpja7X4" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 400 });
    }
  })
)

// Test
test('successful login', async () => {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    })
  });
  const data = await response.json();
  expect(response.status).toBe(200);
  expect(data).toHaveProperty('token');
});
