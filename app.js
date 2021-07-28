require("dotenv").config();

const Express = require("express");
const controllers = require("./controllers");
const app = Express();
const dbConnection = require("./db");

const cors = require('cors');

app.use(require('./middleware/headers'));
app.use(cors());


app.use(Express.json());

app.use("/user", controllers.userController);
app.use("/post", controllers.postController);

dbConnection.authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(process.env.PORT, () => (`[Server]: App is listening on ${process.env.PORT}`))
  })
  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });
