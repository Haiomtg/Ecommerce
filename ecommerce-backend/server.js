const express = require("express");
const app = express();
const port = 3010;
const cors = require("cors");
const errorHandler = require("./middleware/error");
const notFound = require("./middleware/notFound");
const productRoutes = require("./routes/api/product-routes");
const connection = require("./database/pool");
const corsOptions = {
    origin: "http://localhost:3010",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "strawberry", "pineapple"]});
});

app.use("/api/products", productRoutes(connection));

app.use(errorHandler);
app.use(notFound);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});