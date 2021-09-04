const express = require('express');
const mainRouter = require('./routers/index.js');
const PORT = process.env.PORT || 3000
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(mainRouter);
app.listen(PORT , () => console.log(`App up at port ${PORT}`));