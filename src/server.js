const app = require("./app");
const database = require("./database/connection");

const PORT = process.env.PORT;

database
  .sync({ force: true })
  .then(() => {
    app.listen(PORT);
  })
  .catch((e) => console.log(e));
