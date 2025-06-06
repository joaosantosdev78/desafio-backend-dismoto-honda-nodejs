const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const YAML = require("yamljs");
const path = require("node:path");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load(path.join(__dirname, "docs", "swagger.yaml"));
const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/produtos", productRoutes);

module.exports = app;
