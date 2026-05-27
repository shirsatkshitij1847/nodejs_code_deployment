const express = require('express');
const app = express();
const port = 3000;

const names = [
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun",
  "Anaya", "Diya", "Ishaan", "Kabir", "Saanvi"
];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

app.get('/', (req, res) => {

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Live Name Changer</title>
    <style>
      body {
        font-family: Arial;
        background: #111;
        color: white;
        text-align: center;
        padding-top: 120px;
      }

      .box {
        background: #222;
        display: inline-block;
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
      }

      .name {
        font-size: 40px;
        color: #00ffcc;
        margin-top: 20px;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <h1>Welcome 👋</h1>
      <div>Random User Name:</div>
      <div class="name" id="name">Loading...</div>
    </div>

    <script>
      const names = ${JSON.stringify(names)};

      function randomName() {
        return names[Math.floor(Math.random() * names.length)];
      }

      function updateName() {
        document.getElementById('name').innerText = randomName();
      }

      // change immediately
      updateName();

      // change every 1 second
      setInterval(updateName, 1000);
    </script>
  </body>
  </html>
  `;

  res.send(html);
});

app.get('/deployment', (req, res) => {
  res.json({ message: 'Deployment successful!' });
});

app.get('/production', (req, res) => {
  res.json({ message: 'Deployment    done in production!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});