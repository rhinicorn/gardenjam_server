require("dotenv").config();

const Express = require("express");
const controllers = require("./controllers");
const app = Express();
const dbConnection = require("./db");

const cors = require('cors');

app.use(require('./middleware/headers'));
app.use(cors());

const controllers = require("./controllers")

app.use(Express.json());

<<<<<<< HEAD

app.use("/post", controllers.postController)
=======
app.use("/user", controllers.userController);
app.use("/post", controllers.postController);
>>>>>>> 4de267ddb6b038b0ee90c3d7edcf117056803f76

dbConnection.authenticate()
  .then(() => dbConnection.sync())
  .then(() => {
    app.listen(3000, () => {

      console.log(`[Server]: App is listening on 3000.`);
    });
  })
  .catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
  });