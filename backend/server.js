require("dotenv").config();
const express = require("express");
const auth = require("./routes/authRoute");
const userRoute = require("./routes/userRoutes");
const {mongoose} = require("mongoose");
const cors = require('cors');
// const path = require("path");
const app = express()
app.use(express.json())

app.use(cors());
app.use(cors({
  origin: 'https://mernapp-uwdg.onrender.com/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.use("/api/auth",auth);
app.use("/api/user",userRoute)

// //serving the frontend

// app.use(express.static(path.join(__dirname,'./frontend/build')))
// app.get("*",function(req,res){
//   res.sendFile(path.join(__dirname,"./frontend/public/index.html"))
// })

mongoose.connect(process.env.MONGO_URI)
.then(
  app.listen(process.env.PORT,()=>{
    console.log("db is connected & Server is listening at port ",process.env.PORT);
  })
)
.catch((err)=>{
  console.log(err);
})