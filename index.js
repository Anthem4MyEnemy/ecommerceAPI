const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const cors = require("cors");
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL).
then(() => console.log("DB CONNECTION SUCCESSFULL"))
.catch((err) => {
    console.log(err);
});
// app.use((req,res,next) =>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Headers","*");
//     if(req.method === "OPTIONS"){
//         res.header("Access-Control-Allow-Methods",'PUT,POST,DELETE,GET');
//         return res.status(200).jsnon({});
//     }
// });
app.use(cors());
app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);
app.use("/api/cart",cartRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("BACKEND SERVER IS RUNNING")
});