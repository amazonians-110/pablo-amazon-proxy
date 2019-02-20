const morgan = require('morgan');
const express = require('express');

const PORT = 8000;

const app = express();

app.use(morgan('tiny'));

app.use(express.static(`${__dirname}/src/`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
