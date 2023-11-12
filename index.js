const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const user = await getUser();
  const html = setHtml(user);

  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function getUser() {
  try {
    const usuario = await axios.get('https://api.github.com/users/carolinefortiz');

    return usuario.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

function setHtml(user) {
  let html = '<h1>Dados do Usuário</h1>';
  html += '<table border="1">';

  html += '<tr>';
  html += '<td></td>';
  html += '<td style="text-align: center; vertical-align: middle;">';
  html += '<img src="https://avatars.githubusercontent.com/u/133067703?v=4" alt="Avatar" width="150" height="150">';
  html += '</td>';
  html += '</tr>';

  for (const key in user) {
    if (['login', 'name', 'location', 'bio'].includes(key)) {
      html += `<tr><td>${key}</td><td>${user[key]}</td></tr>`;
    }
  }

  html += '</table>';
  return html;
}
