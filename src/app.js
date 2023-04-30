import express from 'express';
import cors from 'cors'
import path from 'node:path';
import ejs from 'ejs';
import swaggerUi from 'swagger-ui-express';
import { swaggerConfig } from './docs/swagger.js';
import { router } from './routes/index.js';

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig))

const OPTIONS = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['css', 'html', 'js'],
  index: false,
  maxAge: '1d',
  redirect: false,
}

app.disable('x-powered-by');

// this way u can use html.
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.set('views', path.join('./src/views'));

app.use(express.static('./src/public', OPTIONS));

app.use(router);

app.get('', function (request, response) {
  response.render('index', {
    title: 'IOT Meter',
    text: 'Leia a documentação e aproveite todos os recursos.'
  });
});

app.get('/', function (request, response) {
  response.send('Server on');
});

export default app;
