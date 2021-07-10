require("dotenv").config();
const Express = require("express");
const controllers = require("./controllers");
const app = Express();


const controller = require("./controllers")

app.use(Express.json());


app.use("/post", controllers.postController)

app.listen(3000, () => {
  console.log('[Server]: App is listening on 3000.');
});

