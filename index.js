// const sessionConfig = require('./config/session');
const routes = require('./app/routes');

const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const methodOverride = require('method-override');

const app = express();

app.use(express.static(path.resolve('app', 'public')));

// Teste de inserção no banco de dados
// const { User } = require('./app/models');
// User.create({name : 'Teste', email: 'teste3@teste.com', password: 'teste'});

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(session(sessionConfig));
// app.use(flash());
// app.use(methodOverride('_method'));
app.use('/', routes);

app.listen(3000);