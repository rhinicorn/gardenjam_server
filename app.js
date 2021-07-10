const Express = require("express");
const app = Express();

app.use('/test', (req,res) => {
  res.send('This is a message from the test endpoint')
});

app.listen(3000, () => {
  console.log('[Server]: App is listening on 3000.');
});