import { http, HttpResponse } from 'msw'

let users = [
  { id: 1, email: "george.bluth@reqres.in",password:"password1" },
  { id: 2, email: "janet.weaver@reqres.in",password:"password2" },
  // ... add more predefined users if needed
];

let loggedInUsers = [];

export const handlers = [
  // Registration endpoint
  http.post('https://reqres.in/api/register', async ({ request }) => {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return HttpResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return HttpResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const [fullName] = email.split('@');
    const [first_name, last_name] = fullName.split('.');

    const newUser = { 
      id: users.length + 1, 
      email,
      first_name: first_name.charAt(0).toUpperCase() + first_name.slice(1),
      last_name: last_name ? last_name.charAt(0).toUpperCase() + last_name.slice(1) : ''
    };
    users.push(newUser);

    return HttpResponse.json({ id: newUser.id, token: "QpwL5tke4Pnpja7X4" }, { status: 200 });
  }),

  // Login endpoint
  http.post('https://reqres.in/api/login', async ({ request }) => {
    const { email, password } = await request.json();
    
    const user = users.find(u => u.email === email);
    if (user && password) { // In a real scenario, you'd check the password
      if (!loggedInUsers.some(u => u.id === user.id)) {
        loggedInUsers.push(user);
      }
      return HttpResponse.json({ token: "QpwL5tke4Pnpja7X4" }, { status: 200 });
    }

    return HttpResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }),

  // Get logged-in users endpoint
  http.get('https://reqres.in/api/users/logged-in', () => {
    return HttpResponse.json({ data: loggedInUsers }, { status: 200 });
  })
];