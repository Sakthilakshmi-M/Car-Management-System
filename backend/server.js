require("dotenv").config();
const express = require("express");
const auth = require("./routes/authRoute");
const userRoute = require("./routes/userRoutes");
const {mongoose} = require("mongoose");
const cors = require("cors");
const app = express()
app.use(express.json())

const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(cors(corsOptions));

app.use("/api/auth",auth);
app.use("/api/user",userRoute)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  const port = process.env.PORT||8000;
  app.listen(process.env.PORT,()=>{
    console.log("db is connected & Server is listening at port ",process.env.PORT);
})}
)
.catch((err)=>{
  console.log(err);
})