const express = require('express');
const app = express();
const port = 3000;

// Simple random name generator
const names = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
  "Anaya", "Diya", "Ishaan", "Kabir", "Saanvi"
];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

// HTML response route
app.get('/', (req, res) => {
  const user = getRandomName();

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            text-align: center;
            padding-top: 100px;
          }
          .card {
            background: white;
            padding: 30px;
            margin: auto;
            width: 50%;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            color: #333;
          }
          .name {
            color: #007bff;
            font-size: 24px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Welcome 👋</h1>
          <p class="name">Hello, ${user}!</p>
          <p>Your deployment is working successfully 🚀</p>
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

// JSON routes (keep for API testing)
app.get('/deployment', (req, res) => {
  res.json({ message: 'Deployment successful!' });
});

app.get('/production', (req, res) => {
  res.json({ message: 'Deployment done in production! lets check routes.' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});