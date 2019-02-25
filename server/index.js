/* eslint consistent-return:0 import/order:0 */
const express = require('express');
const logger = require('./logger');
const mock = require('./mock');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();
const bodyParser = require('body-parser');

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

app.post('/getEstates', (req, res) => {
  const filter = req.body;
  let result = mock;
  if (filter.action) {
    result = result.filter(i => i.Action === filter.action);
  }
  if (filter.isNothing) {
    result = result.filter(i => i.furnishType === 'NOTHING');
  }
  if (filter.priceTo > 0) {
    result = result.filter(i => i.price < filter.priceTo);
  }
  if (filter.isTownhouse) {
    result = result.filter(i => i.Type === 'TOWNHOUSE');
  }
  if (filter.isRoom) {
    result = result.filter(i => i.Type === 'ROOM');
  }
  if (filter.squreTo > 0) {
    result = result.filter(i => i.square < filter.squreTo);
  }
  if (filter.isElite) {
    result = result.filter(i => i.Type === 'ELITE');
  }
  if (filter.isAppartment) {
    result = result.filter(i => i.Type === 'APPARTMENT');
  }
  if (filter.isRegular) {
    result = result.filter(i => i.furnishType === 'REGULAR');
  }
  if (filter.priceFrom > 0) {
    result = result.filter(i => i.price > filter.priceFrom);
  }
  if (filter.squreFrom > 0) {
    result = result.filter(i => i.price > filter.squreFrom);
  }
  if (filter.isHouse) {
    result = result.filter(i => i.Type === 'HOUSE');
  }
  if (filter.isEuro) {
    result = result.filter(i => i.furnishType === 'EURO');
  }
  console.log(result.length);
  res.send(result);
});

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
