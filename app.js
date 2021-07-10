require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require("./db")
const cors = require('cors');
app.use(require('./middleware/headers'));
app.use(cors());


const controllers = require("./controllers")

app.use(Express.json());

app.use("/user", controllers.userController);

app.listen(3000, () => {
  console.log('[Server]: App is listening on 3000.');
});

