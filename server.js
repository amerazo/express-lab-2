//-----------Enable Express --------------------------//
//-----------Enable Express --------------------------//
const express = require('express');
const app = express();

//-----------Route + Params --------------------------//
//-----------Route + Params---------------------------//
app.set('view engine', 'ejs');
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  let message = '';
  if (name === undefined) {
    message = 'Hello, stranger';
  } else if (name === 'X') {
    message = 'Wow! Hello there, X';
  } else if (name.startsWith('X')) {
    message = `What's up, ${name}`;
  } else {
    message = `${name}! It's so great to see you!`;
  }
  res.render('greeting', { message });
});
//-----------Listen for Server------------------------//
//-----------Listen for Server------------------------//


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
