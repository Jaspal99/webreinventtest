import { render, screen } from '@testing-library/react';
import { http } from 'msw';
import { setupServer } from 'msw/node';
import Dashboard from '../pages/Dashboard';
import { fetchUsers } from '../service/apiService';

const server = setupServer(
    http.post('https://reqres.in/api/register', ({ request }) => {
        return new Response(JSON.stringify({
            id: 4,
            token: "QpwL5tke4Pnpja7X4"
        }), { status: 200 })
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the users correctly', async () => {
    render(<Dashboard />);
    
    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('test@test.com')).toBeInTheDocument();
});

test('successful registration', async () => {
    const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "pistol"
        })
    });
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data).toHaveProperty('token');
});
