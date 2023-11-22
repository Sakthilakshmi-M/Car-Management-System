require("dotenv").config();
const express = require("express");
const auth = require("./routes/authRoute");
const userRoute = require("./routes/userRoutes");
const {mongoose} = require("mongoose");
const app = express()
app.use(express.json())

app.use("/api/auth",auth);
app.use("/api/user",userRoute);

mongoose.connect(process.env.MONGO_URI)
.then(
  app.listen(process.env.PORT,()=>{
    console.log("db is connected & Server is listening at port ",process.env.PORT);
  })
)
.catch((err)=>{
  console.log(err);
})