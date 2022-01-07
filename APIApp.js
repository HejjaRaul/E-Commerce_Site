const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./src/API/Routes/UserRoute")
const authRoute = require("./src/API/Routes/AuthenticationRoute")
const productRoute = require("./src/API/Routes/ProductRoute");
const cartRoute = require("./src/API/Routes/CartRoute");
const orderRoute = require("./src/API/Routes/OrderRoute");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB Connection successful!");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});