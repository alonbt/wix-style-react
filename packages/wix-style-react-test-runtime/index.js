const express = require('express');
const renderVM = require('./vm');

const app = express();

app.get('/puppeteer-testkit-require', (req, res) => {
  try {
    require('wix-style-react/dist/testkit/puppeteer');
    res.send(200);
  } catch (e) {
    res.status(500).send({
      errorMessage:
        "puppeteer testkit can not be required, please make sure you didn't import some css accidently in the drivers",
      errorLog: e.message + e.stack,
    });
  }
});
app.use('/', (req, res) => {
  res.send(
    renderVM({
      type: req.query.type || 'cjs',
    }),
  );
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Fake server is running on port ${process.env.PORT}`);
});
