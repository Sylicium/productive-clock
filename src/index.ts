
import express from 'express';
import { createServer } from 'http';

import config from './config.js';

import ProductiveClock from './ProductiveClock.js';

import * as WebPages from './webpages/index.js';

console.log((new ProductiveClock()).getJSONDate())

const app = express();
const server = createServer(app);

app.get('/clock', (_req, res) => {
    res.send({
        status: 200,
        endpoints: {
            '/clock/json':      "Get the current time in JSON format",
            '/clock/time':      "Get the current time in 'HH:MM:SS' format",
            '/clock/date':      "Get the current date in 'DD/MM/YYYY' format",
            '/clock/datetime':  "Get the current date and time in 'DD/MM/YYYY HH:MM:SS' format"
        }
    })
    return;
});

app.get('/clock/json', (_req, res) => {
    let clock = new ProductiveClock();
    res.json(clock.getJSONDate());
});
app.get('/clock/time', (_req, res) => {
    res.send(ProductiveClock.timeNow());
});
app.get('/clock/date', (_req, res) => {
    let clock = new ProductiveClock();
    res.send(clock.toLocaleDateString());
})

app.get('/clock/datetime', (_req, res) => {
    let clock = new ProductiveClock();
    res.send(clock.toLocaleString());
})


app.get('/', (_req, res) => {
    res.send(WebPages.main.default);
    return;
});

server.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`);
});

