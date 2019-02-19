const morgan = require('morgan');
const express = require('express');
const path = require('path');

const PORT = 8000;

const app = express();

app.use(morgan);

app.use(express.static(`${path.dirname}/dist`));

app.listen(PORT, console.log(`listening on port ${PORT}`));
