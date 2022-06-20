import express from "express";
//lấy được các tham số mà client gửi
//query params
import bodyParser from "body-parser"; 
import connectDB from './config/connectDB'
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import cors from 'cors'
require('dotenv').config();


let app = express();
const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))
//config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app); // truyền các đường link

connectDB(); //kết nối database


let port = process.env.PORT || 6969; //lấy port

app.listen(port, () => {
    console.log("backend nodejs is running on the port : " + port);
})