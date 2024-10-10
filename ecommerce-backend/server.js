const express = require("express");
const app = express();
const port = 3010;
const cors = require("cors");
const errorHandler = require("./middleware/error");
const notFound = require("./middleware/notFound");
const productRoutes = require("./routes/product-routes");
const cartRoutes = require("./routes/cart-routes")
const userRoutes = require("./routes/user-route")
const connection = require("./database/pool");
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/product", productRoutes(connection));
app.use("/api/cart", cartRoutes(connection));
app.use("/api/user", userRoutes(connection));
app.use(errorHandler);
app.use(notFound);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});